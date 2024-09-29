import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/services/forms/forms.service';
import { forms } from '../../models/forms';
import { Multidata } from '../../models/forms';


@Component({
  selector: 'app-ajout-forms',
  templateUrl: './ajout-forms.component.html',
  styleUrls: ['./ajout-forms.component.css']
})

export class AjoutFormsComponent implements OnInit {

  submitted = false
  FormData: any[] = [];
  multiSelect: any[] = []
  choices: any[] = []
  data = new forms;
  multidata = new Multidata;
  constructor(private formsService: FormsService) { }

  ngOnInit(): void { }

  addForm() {
    this.data = new forms();
    this.FormData.push(this.data);
  }

  addMultiForm(index: number) {
    if (!this.FormData[index].multidata) {
      this.FormData[index].multidata = [];
    }
    this.multidata = new Multidata();
    this.FormData[index].multidata.push(this.multidata);
  }

  addMultiColumn(index: number) {
    if (!this.FormData[index].multicolumn) {
      this.FormData[index].multicolumn = [];
    }
    this.multidata = new Multidata();
    this.FormData[index].multicolumn.push(this.multidata);
  }

  addMultiRow(index: number) {
    if (!this.FormData[index].multirow) {
      this.FormData[index].multirow = [];
    }
    this.multidata = new Multidata();
    this.FormData[index].multirow.push(this.multidata);
  }

  duplicateForms(index: number) {
    const originalForm = this.FormData[index];

  // Utility function to create a deep copy of an array of objects
  const deepCopyArray = <T>(array: T[] | undefined): T[] => {
    return array ? array.map(item => ({ ...item })) : [];
  };

  // Create a new form with deep copies of relevant properties
  const newForm = {
    ...originalForm,
    multiselect: deepCopyArray(originalForm.multiselect),
    multidata: deepCopyArray(originalForm.multidata),
    multicolumn: deepCopyArray(originalForm.multicolumn),
    multirow: deepCopyArray(originalForm.multirow),
  };

  this.FormData.push(newForm);
  }

  removeForm(index: number) {
    this.FormData.splice(index, 1);
  }

  removeOneMultiForm(indexForm: number, indexMainData: number) {
    this.FormData[indexForm].multidata.splice(indexMainData, 1);
  }

  removeColumn(indexForm: number, indexMainData: number) {
    this.FormData[indexForm].multicolumn.splice(indexMainData, 1);
  }

  removeRow(indexForm: number, indexMainData: number) {
    this.FormData[indexForm].multirow.splice(indexMainData, 1);
  }

  SaveForm() {
    this.FormData.forEach(form => {
      form.choices = form.multidata?.map((data: Multidata) => data.multiTitle) || [];
      form.columns = form.multicolumn?.map((col: Multidata) => col.multiColumn) || [];
      form.rows = form.multirow?.map((row: Multidata) => row.multiRow) || [];

      if (form.choices.length === 0) {
        delete form.choices;
      }
      if (form.columns.length === 0) {
        delete form.columns;
        delete form.rows;
      }

      delete form.multidata;
      delete form.multicolumn;
      delete form.multirow;
    });

    console.log(this.FormData);
    this.formsService.addForms(this.FormData).subscribe(res => {
      console.log(res);
    });
    this.submitted = true;
  }

}
