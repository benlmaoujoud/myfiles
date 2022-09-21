package com.dms.management.repository;


import java.io.IOException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


import com.dms.management.model.Document;

@Repository

public class DocumentServiceRepository {


	@Autowired

	private JdbcTemplate jdbcTemplate;

	//getAllDocuments 

	public List<Document> getAllDocuments() {
		
		
		List<Document> documentList=new ArrayList<>();
		
		 documentList=jdbcTemplate.query("SELECT *from Document", new RowMapper<Document>(){  
			
			@Override
			public Document mapRow(ResultSet rs, int rowNum) throws SQLException {

									
				Document document=new Document();
				document.setDocumentId(rs.getString("documentId"));
				document.setDocumentName(rs.getString("documentName"));
				document.setDocumentDescription(rs.getString("documentDescription"));
				document.setDocumentCategory(rs.getString("documentCategory"));
				document.setUnits(rs.getInt("units"));
				document.setPathOfDocument(rs.getString("pathOfDocument"));
				document.setDateUpload(rs.getString("dateUpload"));
				document.setLastModification(rs.getString("lastModification"));

				return document;
			}  
		    }); 
		 
		return  documentList;
		}
		// from trash

		public List<Document> getFromTrash() {
		
		
			List<Document> documentList=new ArrayList<>();
			
			 documentList=jdbcTemplate.query("SELECT *from Trash", new RowMapper<Document>(){  
				
				@Override
				public Document mapRow(ResultSet rs, int rowNum) throws SQLException {
					// TODO Auto-generated method stub
										
					Document document=new Document();
					document.setDocumentId(rs.getString("documentId"));
					document.setDocumentName(rs.getString("documentName"));
					document.setDocumentDescription(rs.getString("documentDescription"));
					document.setDocumentCategory(rs.getString("documentCategory"));
					document.setUnits(rs.getInt("units"));
					document.setPathOfDocument(rs.getString("pathOfDocument"));
					document.setDateUpload(rs.getString("dateUpload"));
					document.setLastModification(rs.getString("lastModification"));
	
					return document;
				}  
				}); 
			 
			return  documentList;
			}
	//gett-DocumentsBycategory

	public List<Document> getDocumentsByCategory(String categoryName) {
		
		List<Document> documentList=new ArrayList<>();
		
		 documentList=jdbcTemplate.query("SELECT *from Document where lower(documentCategory)='"+categoryName.toLowerCase()+"'", new RowMapper<Document>(){  
			   
			@Override
			public Document mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
									
				Document document=new Document();
				document.setDocumentId(rs.getString("documentId"));
				document.setPathOfDocument(rs.getString("pathOfDocument"));

				document.setDocumentName(rs.getString("documentName"));
				document.setDocumentDescription(rs.getString("documentDescription"));
				document.setDocumentCategory(rs.getString("documentCategory"));
				document.setUnits(rs.getInt("units"));
				document.setDateUpload("dateUpload");
				document.setLastModification("lastModification");

				
				
				return document;
			}  
		    }); 
		return documentList;
		}
	
	//addDocument Repo

	public void addDocument(Document documentDetails) throws IOException {
		
		 String INSERT_STATEMENT = "INSERT INTO Document(documentId,documentName,pathOfDocument,documentDescription,documentCategory, units,dateUpload,lastModification) VALUES (?,?,?,?,?,?,?,?)" ;
			jdbcTemplate.batchUpdate(INSERT_STATEMENT, new BatchPreparedStatementSetter() {
				
				@Override
				public void setValues(PreparedStatement ps, int i) throws SQLException {
					// TODO Auto-generated method stub
					ps.setString(1,documentDetails.getDocumentId());

					ps.setString(2, documentDetails.getDocumentName());
					String x = "/zz";
					ps.setString(3,x);

					ps.setString(4, documentDetails.getDocumentDescription());

					ps.setString(5, documentDetails.getDocumentCategory());
					ps.setInt(6, documentDetails.getUnits());
					ps.setString(7, documentDetails.getDateUpload());
					ps.setString(8, documentDetails.getLastModification());



				}
				
				@Override
				public int getBatchSize() {
					// TODO Auto-generated method stub
					return 1;
				}
			});
	}
	//updateDocument Repo

	public int updateDocument(Document documentDetails, String documentId) {
		
		String query="UPDATE Document set documentName='"+documentDetails.getDocumentName()+"',documentDescription='"+documentDetails.getDocumentDescription()+"',documentCategory='"+documentDetails.getDocumentCategory()+"',units='"+documentDetails.getUnits()+"',lastModification='"+documentDetails.getLastModification()+"'where documentId='"+documentId+"' ";  
			    return jdbcTemplate.update(query);  
	}
	//delete

	public int deleteDocument(String documentId){  
	    String query="delete from Document where documentId='"+documentId+"' ";  
	    return jdbcTemplate.update(query);  
	}  

	public String fetchPasswordForUserName(String userName) {
		
		String result="";
		
		String query="SELECT password from User where username='"+ userName+"'";
		
		result= jdbcTemplate.queryForObject(query,String.class);
		
		return result;
	}


	public void addDocumentToTrash(Document documentDetails) throws IOException {
		
		String INSERT_STATEMENT = "INSERT INTO Trash(documentId,documentName,pathOfDocument,documentDescription,documentCategory, units,dateUpload,lastModification) VALUES (?,?,?,?,?,?,?,?)" ;
		   jdbcTemplate.batchUpdate(INSERT_STATEMENT, new BatchPreparedStatementSetter() {
			   
			   @Override
			   public void setValues(PreparedStatement ps, int i) throws SQLException {
				   // TODO Auto-generated method stub
				   ps.setString(1,documentDetails.getDocumentId());

				   ps.setString(2, documentDetails.getDocumentName());
				   String x = "/zz";
				   ps.setString(3,x);

				   ps.setString(4, documentDetails.getDocumentDescription());

				   ps.setString(5, documentDetails.getDocumentCategory());
				   ps.setInt(6, documentDetails.getUnits());
				   ps.setString(7, documentDetails.getDateUpload());
				   ps.setString(8, documentDetails.getLastModification());



			   }
			   
			   @Override
			   public int getBatchSize() {
				   // TODO Auto-generated method stub
				   return 1;
			   }
		   });
   }
	
}


