import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDocumentsComponent } from './get-all-documents.component';

describe('GetAllDocumentsComponent', () => {
  let component: GetAllDocumentsComponent;
  let fixture: ComponentFixture<GetAllDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
