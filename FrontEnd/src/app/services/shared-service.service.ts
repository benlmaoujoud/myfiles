import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  title:string="";
  content:string="";
  document:any;

  constructor() { }

  setdialogtitle(title:string){
    this.title=title;
  }

  setdialogcontent(content:string){
    this.content=content;

  }

  getdialogtitle(){
    return this.title;
  }
  getdialogcontent(){
    return this.content;

  }

  setDocument(document:any){
      this.document=document;
  }
 
  getDocument(){
    return this.document;
  }
}
