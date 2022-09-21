export class Document{
    documentId:string;
    documentName:string;
    pathOfDocument:string;
    documentDescription:string;
    documentCategory:string;
    units:number;

    dateUpload:string;
    lastModification:string; 

    constructor(){
        this.documentId="";
        this.documentName="";
        this.pathOfDocument="";
        this.documentDescription="";
        this.documentCategory="";
        this.units=0;
        this.dateUpload=""; 
        this.lastModification="";

    }
}