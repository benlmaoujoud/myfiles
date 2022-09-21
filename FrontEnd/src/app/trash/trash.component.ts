import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DocumentService } from '../services/document.service';
import { RouterService } from '../services/router.service';
import { SharedServiceService } from '../services/shared-service.service';
import { SuccessfulDialogComponent } from '../successful-dialog/successful-dialog.component';
import { UnSuccessfulDialogComponent } from '../un-successful-dialog/un-successful-dialog.component';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  documentList:any;
  document:any;
 
   constructor(private documentService: DocumentService,public dialog: MatDialog, private sharedServices: SharedServiceService, private routerService:RouterService ) { }
 
   ngOnInit(): void {
     this.documentService.getFromTrash().subscribe(data => {
       this.documentList = data;
       
     });
   }

   viewDocument(){
     console.log("hello");
     
   }
   
   key: string ='id';
   reverse: boolean=false;
   sort(key:string)
   {
     this.key=key;
     this.reverse=!this.reverse;
   }

   restoreDocument(document:Document){

    this.document=document;
  this.documentService.addDocumentToBase(this.document).subscribe(data => {
    console.log(data);
     if(data)
     {
      this.openSuccessfulDialog();
        this.ngOnInit();
     }
       else{
        this.openunSuccessfulDialog();
        this.ngOnInit();
     }

   });

    

    }



    openSuccessfulDialog() {
      this.sharedServices.setdialogtitle("Successfull");
      this.sharedServices.setdialogcontent("Documennt Restored Successfully !!");
      this.dialog.open(SuccessfulDialogComponent);
    }
  
    openunSuccessfulDialog() {
      this.sharedServices.setdialogtitle("Unsuccessfull");
      this.sharedServices.setdialogcontent(" Document could not be Restored !!");
      this.dialog.open(UnSuccessfulDialogComponent);
    }
    
  }
 

