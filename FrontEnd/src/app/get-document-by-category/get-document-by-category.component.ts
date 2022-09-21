import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-get-document-by-category',
  templateUrl: './get-document-by-category.component.html',
  styleUrls: ['./get-document-by-category.component.css']
})
export class GetDocumentByCategoryComponent implements OnInit {

  documentList:any;
  document:any;
  key:any="";
  headers = ["Document Id", "Document Name", "Description", "Category", "Units"];


  constructor(private documentService: DocumentService) { }


  ngOnInit(): void {
    
  }

  
  categoryForm=new FormGroup({
    
    category: new FormControl('',[Validators.required])
  })

  get category(){
    return this.categoryForm.get('category');
  }

  getDocumentByCategory(){

    this.key=this.categoryForm.value;

    this.documentService.getAllDocumentsByCategory(this.key).subscribe(data => {
      this.documentList = data;
    });

  }


}
