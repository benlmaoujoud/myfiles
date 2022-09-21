import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { GetDocumentByCategoryComponent } from './get-document-by-category/get-document-by-category.component';
import { GetAllDocumentsComponent } from './get-all-documents/get-all-documents.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import {RouterModule, Routes} from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { DocumentService } from './services/document.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SuccessfulDialogComponent } from './successful-dialog/successful-dialog.component';
import { UnSuccessfulDialogComponent } from './un-successful-dialog/un-successful-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthenticationServiceService } from './services/authentication-service.service';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard} from './can-activate-guard';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { RegisterComponent } from './register/register.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { TrashComponent } from './trash/trash.component';

const routes: Routes=[
  {
    path:'login',//path is http:localhost:4200/login
    component:LoginPageComponent,

  },
  {
    path:'dashboard',
    component: GetAllDocumentsComponent,
    canActivate:[CanActivateRouteGuard],

  },
  {
    path:'documentByCategory',//path is http:localhost:4200/documentByCategory
    component:GetDocumentByCategoryComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'getAllDocuments',//path is http:localhost:4200/getAllDocuments
    component:GetAllDocumentsComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'add',//path is http:localhost:4200/add
    component:AddDocumentComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'trash',//path is http:localhost:4200/getAllDocuments
    component:TrashComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'update',//path is http:localhost:4200/update
    component:UpdateDocumentComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path:'register',//path is http:localhost:4200/register
    component:RegisterComponent,
    canActivate:[CanActivateRouteGuard]
  },

  {
    //by default we are opening login
        path:'',
        redirectTo:'login',
        pathMatch:'full'
  }
]



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    DashboardComponent,
    GetDocumentByCategoryComponent,
    GetAllDocumentsComponent,
    AddDocumentComponent,
    UpdateDocumentComponent,
    MainNavComponent,
    SuccessfulDialogComponent,
    UnSuccessfulDialogComponent,
    RegisterComponent,
    TrashComponent,

  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    Ng2OrderModule
  ],
  providers: [DocumentService,AuthenticationServiceService,AuthenticationServiceService,RouterService,
    {provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '926826329843-ldm5ob897r90m58licih3bgu2ferov2p.apps.googleusercontent.com'
          )
        },
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
