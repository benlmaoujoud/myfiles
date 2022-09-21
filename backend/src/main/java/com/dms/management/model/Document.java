package com.dms.management.model;

import java.io.File;

public class Document {
	
	private String documentId;
	private String documentName;
	private String pathOfDocument; 
	private String documentDescription;
	private String documentCategory;
	private int units;
	private String dateUpload;
	private String lastModification;

	// private File fileStorage; 


	
	
	public Document() {
		super();
	}


	public Document(String documentId, String documentName,String pathOfDocument, String documentDescription, String documentCategory, int units,File fileStorage,String dateUpload, String lastModification ) {
		super();
		this.documentId = documentId;
		this.documentName = documentName;

		this.pathOfDocument=pathOfDocument;
		this.documentDescription = documentDescription;
		this.documentCategory = documentCategory;
		this.units = units;
		this.dateUpload=dateUpload;
		this.lastModification=lastModification; 

		// this.fileStorage=fileStorage;

 
	}
	
	



	public String getDocumentId() {
		return documentId;
	}


	public void setDocumentId(String documentId) {
		this.documentId = documentId;
	}


	public String getDocumentName() {
		return documentName;
	}


	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}
	public String getPathOfDocument(){
		return pathOfDocument; 
	}
	public void setPathOfDocument(String pathOfDocument){
		this.pathOfDocument=pathOfDocument; 
	}


	public String getDocumentDescription() {
		return documentDescription;
	}


	public void setDocumentDescription(String documentDescription) {
		this.documentDescription = documentDescription;
	}


	public String getDocumentCategory() {
		return documentCategory;
	}


	public void setDocumentCategory(String documentCategory) {
		this.documentCategory = documentCategory;
	}


	public int getUnits() {
		return units;
	}
	


	public void setUnits(int units) {
		this.units = units;
	}


	public void setDateUpload(String dateUpload){
		this.dateUpload=dateUpload;
	}
	public String getDateUpload(){
		return dateUpload; 
	}

	public void setLastModification(String lastModification){
		this.lastModification=lastModification; 
	}
	public String getLastModification(){
		return lastModification; 
	}



	@Override
	public String toString() {
		return "document [documenttId=" + documentId + ", documentName=" + documentName + ", documentDescription="
				+ documentDescription + ", documentCategory=" + documentCategory + ", units=" + units + "]";
	}


	
	
	
}
