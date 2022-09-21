package com.dms.management.service;

import java.util.List;


import com.dms.management.model.Document;


public interface DocumentService {
	
	public  List<Document> getAllDocuments();
	public  List<Document> getFromTrash();
	public List<Document> getDocumentsByCategory(String categoryName);
	public boolean addDocument(Document documentDetails);
	public boolean addDocumentToBase(Document documentDetails);

	public boolean updateDocument(Document documentDetails,String documentId);
	public boolean deleteDocument(String DocumentId);

}
