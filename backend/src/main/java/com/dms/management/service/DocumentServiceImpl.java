package com.dms.management.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.dms.management.model.Document;

import com.dms.management.repository.DocumentServiceRepository;

@Repository
public class DocumentServiceImpl implements DocumentService {

	@Autowired
	DocumentServiceRepository documentServiceRepository;
	
	@Override
	public List<Document> getAllDocuments() {
		// TODO Auto-generated method stub
		
		List<Document> result=new ArrayList<>();
		
		try {
			result= documentServiceRepository.getAllDocuments();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return result;
		
	}


	@Override
	public List<Document> getFromTrash() {
		// TODO Auto-generated method stub
		
		List<Document> result=new ArrayList<>();
		
		try {
			result= documentServiceRepository.getFromTrash();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return result;
		
	}


	@Override
	public List<Document> getDocumentsByCategory(String categoryName) {
		// TODO Auto-generated method stub
		List<Document> result=new ArrayList<>();
		
		try {
			result= documentServiceRepository.getDocumentsByCategory(categoryName);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return result;
	}

	//to base
	@Override
	public boolean addDocumentToBase(Document documentDetails)  {
		// TODO Auto-generated method stub
		boolean result;
		
		try {
			documentServiceRepository.addDocument(documentDetails);
			result=true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			result=false;
		}
		return result;
	}


	

	@Override
	public boolean addDocument(Document documentDetails)  {
		// TODO Auto-generated method stub
		boolean result;
		
		try {
			documentServiceRepository.addDocument(documentDetails);
			documentServiceRepository.addDocumentToTrash(documentDetails);

			result=true;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			result=false;
		}
		return result;
	}

	@Override
	public boolean updateDocument(Document documentDetails, String documentId) {
		// TODO Auto-generated method stub
		
		int result;
		
		try {
			result=documentServiceRepository.updateDocument(documentDetails,documentId);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			result=0;
		}
		
		if(result==0)
		{
			return false;
		}
		return true;
	}

	
	@Override
	public boolean deleteDocument(String documentId) {
		// TODO Auto-generated method stub
		int result;
		
		try {
			result=documentServiceRepository.deleteDocument(documentId);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			result=0;
		}
		
		if(result==0)
		{
			return false;
		}
		return true;
	}

	

	// @Override
	// public boolean addDocument(Document documentDetails) throws DocumentAlreadyExistsException {
	// 	// TODO Auto-generated method stub
	// 	return false;
	// }

	// @Override
	// public boolean updateDocument(Document documentDetails, String documentId) {
	// 	// TODO Auto-generated method stub
	// 	return false;
	// }

	// @Override
	// public boolean deleteDocument(String DocumentId) {
	// 	// TODO Auto-generated method stub
	// 	return false;
	// }
	

}
