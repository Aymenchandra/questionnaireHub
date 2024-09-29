import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/services/forms/forms.service';
import { StylesManager, Model, SurveyNG } from "survey-angular";

StylesManager.applyTheme("defaultV2");
var surveyJson : any  = {
  elements:[],
};

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.css']
})
export class FormsListComponent implements OnInit {
  
  forms:any[]=[];
  selected = false
  constructor(private formsService:FormsService) { }

  ngOnInit(): void {
    this.getforms()
  }

  getforms()
  {
    this.formsService.getForms().subscribe((forms)=>{
      this.forms=forms
      console.log(this.forms)
    })
  }
  selectform(index : number){
    surveyJson = {elements:[]}
    for(let i=0;i<this.forms[index].length; i++)
    {
      surveyJson.elements.push(this.forms[index][i])
    }
    const survey = new Model(surveyJson);
    SurveyNG.render("surveyContainer", { model: survey });
  }

}
