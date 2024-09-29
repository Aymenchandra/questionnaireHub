import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions =
{
  Headers:new HttpHeaders
  ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private apiUrl="http://localhost:5000/forms"
  constructor(
    private http:HttpClient
  ) { }

  getForms():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  addForms(forms:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`,forms)
  }
  
}
