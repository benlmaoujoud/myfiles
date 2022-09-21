import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Document } from '../Document';
import { DocumentService } from '../services/document.service';
import { SharedServiceService } from '../services/shared-service.service';
import { SuccessfulDialogComponent } from '../successful-dialog/successful-dialog.component';
import { UnSuccessfulDialogComponent } from '../un-successful-dialog/un-successful-dialog.component';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {

  document:Document  = new Document();
   
  successMessage:string ="";
  errMessage: string ="";

  constructor(private documentService: DocumentService, private dialog:MatDialog, private sharedServices:SharedServiceService) { 
  }

  ngOnInit(): void {

    this.document=this.sharedServices.getDocument();
  }

  
    updateDocumentForm=new FormGroup({
    documentname:new FormControl('',[Validators.required]),
    units: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  })

  get documentname(){
    return this.updateDocumentForm.get('documentname');
  }

  get units(){
    return this.updateDocumentForm.get('units');
  }

  get category(){
    return this.updateDocumentForm.get('category');
  }

  get description(){
    return this.updateDocumentForm.get('description');
  }

  updateDocument(){

    this.document.documentName=this.documentname?.value;
    this.document.units=this.units?.value;
    this.document.documentCategory=this.category?.value;
    this.document.documentDescription=this.description?.value;
    this.document.lastModification=new Date().toLocaleString();

    

    if(this.document.documentId=="")
    {
      this.errMessage="Document could not be Added to the catalog : Document Id is required";
    }
    else if(this.document.documentName=="")
    {
      this.errMessage="Document could not be Added to the catalog : Document Name is required";
    }
    else if(this.document.documentCategory=="")
    {
      this.errMessage="Document could not be Added to the catalog : Document Category is required";
    }
    else if(this.document.units==0 || this.document.units==null)
    {
      this.errMessage="Document could not be Added to the catalog : Document Units can not be 0";
    }
    else if(this.document.documentDescription=="")
    {
      this.errMessage="Document could not be Added to the catalog : Document Description is required";
    }
    else{
      this.documentService.updateDocument(this.document, this.document.documentId).subscribe(data => {

        if(data)
        {
          this.openSuccessfulDialog();
        }
        else{
          this.openunSuccessfulDialog();
        }
        
      });

    }

  }
   
  openSuccessfulDialog() {
    this.sharedServices.setdialogtitle("Successfull");
    this.sharedServices.setdialogcontent("Document Updated Successfully !!");
    this.dialog.open(SuccessfulDialogComponent);
  }

  openunSuccessfulDialog() {
    this.sharedServices.setdialogtitle("Unsuccessfull");
    this.sharedServices.setdialogcontent("Document could not be Updated !!");
    this.dialog.open(UnSuccessfulDialogComponent);
  }

}
