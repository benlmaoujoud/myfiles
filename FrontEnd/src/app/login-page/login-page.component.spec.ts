import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from '../can-activate-guard';
import { GetAllDocumentsComponent } from '../get-all-documents/get-all-documents.component';
import { AuthenticationServiceService } from '../services/authentication-service.service';
import { RouterService } from '../services/router.service';

import { LoginPageComponent } from './login-page.component';


const routes: Routes=[
  {
    path:'login',//path is http:localhost:4200/login
    component:LoginPageComponent
  },
  {
    path:'dashboard',
    component: GetAllDocumentsComponent,
    canActivate:[CanActivateRouteGuard]
  }
]

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports:[
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
      ],
      providers:[RouterService,AuthenticationServiceService]
    })
    .compileComponents();
  });

  it(`form should be invalid`, async(() => {
    component.loginForm.controls['emailid'].setValue('');
    component.loginForm.controls['password'].setValue('');

    expect(component.loginForm.valid).toBeFalsy();

  }));

  it(`form should be Valid`, async(() => {
    component.loginForm.controls['emailid'].setValue('airbus02@gmail.com');
    component.loginForm.controls['password'].setValue('1234');

    expect(component.loginForm.valid).toBeTruthy();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
