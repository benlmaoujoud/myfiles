import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Document } from '../Document';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient: HttpClient, private sharedServiceService:SharedServiceService) { }


  getAllDocuments(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/dms/getAllDocuments',{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  getFromTrash(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/dms/getFromTrash',{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  addDocument(document:Document): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/dms/addDocument',document,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }
  addDocumentToBase(document:Document): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/dms/addDocumentToBase',document,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }
  onUpload(FileSelected:FormData){

    return this.httpClient.post<any>('http://localhost:8080/dms/upload',FileSelected,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  getAllDocumentsByCategory(category: any): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/dms/getDocumentsByCategory/${category['category']}`,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  deleteDocument(documentId: any): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/dms/deleteDocument/${documentId}`,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

  updateDocument(document:Document,documentId: any): Observable<any>{
    return this.httpClient.post<any>(`http://localhost:8080/dms/updateDocument/${documentId}`,document,{
      headers:new HttpHeaders(
        {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      )
    });
  }

}
