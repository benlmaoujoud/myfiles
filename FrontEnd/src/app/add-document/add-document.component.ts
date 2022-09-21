import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Document } from '../Document';
import { DocumentService } from '../services/document.service';
import { SharedServiceService } from '../services/shared-service.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  document: Document = new Document();
  
  successMessage:string ="";
  errMessage: string ="";
  selectedFile: any=null;

  constructor(private documentService:DocumentService, private sharedServiceService:SharedServiceService) { 

  }


  ngOnInit(): void {
  }

 

addDocumentForm=new FormGroup({
    
    documentid:new FormControl('',[Validators.required]),
    documentname:new FormControl('',[Validators.required]),
    units: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    //filepath:new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  })

  get documentid(){
    return this.addDocumentForm.get('documentid');
  }

  get documentname(){
    return this.addDocumentForm.get('documentname');
  }

  get units(){
    return this.addDocumentForm.get('units');
  }

  get category(){
    return this.addDocumentForm.get('category');
  }
  
  filePath(){
    return this.selectedFile.name; 
  }

  get description(){
    return this.addDocumentForm.get('description');
  }
  onFileSelected(event: any){
    this.selectedFile = <File>event.target.files[0];
}


addFile(){
  const documentAsFormData = new FormData();
  documentAsFormData.append('file',this.selectedFile);
  this.documentService.onUpload(documentAsFormData).subscribe(data => {
       
   console.log(data)
    


  }); 


  

}
  addDocument(){
    this.document.documentId=this.documentid?.value;
    this.document.documentName=this.documentname?.value;
   // this.document.pathOfDocument=this.filepath?.value;
    this.document.units=this.units?.value;
    this.document.documentCategory=this.category?.value;
    this.document.documentDescription=this.description?.value;
    this.document.pathOfDocument=this.filePath();

    this.document.dateUpload=new Date().toLocaleString();
    this.document.lastModification="original";

    console.log(this.document);
    
    
    // );

    // documentAsFormData.append('file',this.selectedFile);
    // console.log(documentAsFormData.getAll)    
    if(this.document.documentId=="")
    {
      this.errMessage="Documennt could not be Added to the catalog : Document Id is required";
    }
    else if(this.document.documentName=="")
    {
      this.errMessage="Document could not be Added to the Database : Document Name is required";
    }
    else if(this.document.documentCategory=="")
    {
      this.errMessage="Document could not be Added to the Database : Document Category is required";
    }
    else if(this.filePath()=="")
    {
      this.errMessage="Check your file ";
    }
    else if(this.document.units==0  || this.document.units==null)
    {
      this.errMessage="Document could not be Added to the Database : Document Units can not be 0";
    }
    else if(this.document.documentDescription=="")
    {
      this.errMessage="Document could not be Added to the Database : Document Description is required";
    }
    else{

      this.documentService.addDocument(this.document).subscribe(data => {
       console.log(data);
        if(data)
        {
            this.errMessage="";
            this.successMessage="Document successfully added to the Database";
        }
        else{
          this.successMessage="";
          this.errMessage="Document could not be Added to the Database : Check Specification of your Document";
        }
  
      })

    }

   
  }

  


}
