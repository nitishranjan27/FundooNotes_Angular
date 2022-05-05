import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakenoteComponent } from './components/takenote/takenote.component';
import { GetallnoteComponent } from './components/getallnote/getallnote.component';
import { IconsComponent } from './components/icons/icons.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    TakenoteComponent,
    GetallnoteComponent,
    IconsComponent,
    DisplaynotesComponent,
    UpdatenoteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
