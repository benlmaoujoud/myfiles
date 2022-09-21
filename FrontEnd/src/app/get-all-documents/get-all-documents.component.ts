import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Document} from '../Document';
import { DocumentService } from '../services/document.service';
import { RouterService } from '../services/router.service';
import { SharedServiceService } from '../services/shared-service.service';
import { SuccessfulDialogComponent } from '../successful-dialog/successful-dialog.component';
import { UnSuccessfulDialogComponent } from '../un-successful-dialog/un-successful-dialog.component';

@Component({
  selector: 'app-get-all-documents',
  templateUrl: './get-all-documents.component.html',
  styleUrls: ['./get-all-documents.component.css']
})
export class GetAllDocumentsComponent implements OnInit {

 documentList:any;
 document:any;

  constructor(private documentService: DocumentService,public dialog: MatDialog, private sharedServices: SharedServiceService, private routerService:RouterService) { }

  ngOnInit(): void {
    this.documentService.getAllDocuments().subscribe(data => {
      this.documentList = data;
      
    });
  }

  deleteDocument(documentId: string){

    this.documentService.deleteDocument(documentId).subscribe(data => {

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

  updateDocument(document: Document){

    this.sharedServices.setDocument(document);
    this.routerService.routeToUpdateDocument();
  }

  viewDocument(){
    console.log("hello");
    
  }
   
  openSuccessfulDialog() {
    this.sharedServices.setdialogtitle("Successfull");
    this.sharedServices.setdialogcontent("Documennt Deleted Successfully !!");
    this.dialog.open(SuccessfulDialogComponent);
  }

  openunSuccessfulDialog() {
    this.sharedServices.setdialogtitle("Unsuccessfull");
    this.sharedServices.setdialogcontent(" Document could not be Deleted !!");
    this.dialog.open(UnSuccessfulDialogComponent);
  }
  
  key: string ='id';
  reverse: boolean=false;
  sort(key:string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

}
