import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {

  constructor(private ngxService : NgxUiLoaderService,private route:Router){}

  ngOnInit() {}

  loading(){
    this.ngxService.start();
    setTimeout(()=>{
      this.ngxService.stop()
      this.route.navigate(['/addForms'])

    }, 5000);
  }
}
