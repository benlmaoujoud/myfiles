package com.dms.management.controller;



import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dms.management.message.ResponseMessage;
import com.dms.management.model.Document;

import com.dms.management.service.DocumentService;
import com.dms.management.service.FilesStorageService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/dms")
public class MainController {
	
	@Autowired
	DocumentService documentService;

	@Autowired
	FilesStorageService storageService;

	@PostMapping("/upload")
	public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file ){
		
		String message = "";
		try {
		  storageService.save(file);
		  message = "Uploaded the file successfully: " + file.getOriginalFilename();
		  return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
		  message = "Could not upload the file: " + file.getOriginalFilename() + "!";
		  return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}	
	}
	ObjectMapper objectMapper = new ObjectMapper().configure(SerializationFeature.INDENT_OUTPUT, true);
	//endpoint to get all documents 
	@GetMapping("/getAllDocuments")
	public Object getAllDocuments(){	
		List<Document> result= documentService.getAllDocuments();
		return result;
	}

	@PostMapping("/addDocumentToBase")
	public boolean addDocumentToBase(@RequestBody Document documentDetails ) throws JsonProcessingException{
		boolean response = documentService.addDocumentToBase(documentDetails);	
		return response;
		
	}


	@GetMapping("/getFromTrash")
	public Object getFromTrash(){	
		List<Document> result= documentService.getFromTrash();
		return result;
	}
	//to get document by category
	@GetMapping("/getDocumentsByCategory/{key}")
	public Object getDocumentsByCategory(@PathVariable("key") String categoryName) throws JsonProcessingException{
		
		List<Document> result= documentService.getDocumentsByCategory(categoryName);
		String listToJson = objectMapper.writeValueAsString(result);
		return listToJson;
	}
	private final Path root = Paths.get("uploads");

	@GetMapping("/bb")

	public String hello(){
		return root.toAbsolutePath().toString();
	}

	// post method to add a doc
	@PostMapping("/addDocument")
	public boolean addDocument(@RequestBody Document documentDetails ) throws JsonProcessingException{
		boolean response = documentService.addDocument(documentDetails);	
		return response;
		
	}

	
	@PostMapping("updateDocument/{documentId}")  
    public boolean updateDocument(@RequestBody Document documentDetails,@PathVariable("documentId") String documentId) {  
        boolean result= documentService.updateDocument(documentDetails, documentId);  
        return result;  
    }  
	
	@DeleteMapping("deleteDocument/{documentId}")  
    public boolean deleteDocument(@PathVariable("documentId") String documentId) {  
        boolean result= documentService.deleteDocument(documentId);  
        return result;  
    } 
	
}
