import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core/src/metadata/directives';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ManageAreasComponent } from './components/manage-areas/manage-areas.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
//Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { SnackbarService } from './services/snackbar.service';
import { ProgressbarService } from './services/progressbar.service';
//Guards
import { AuthGuard } from './guards/auth.guard';
//angular modules
import { MaterialModule } from './material.module';
//Config
import { APP_CONFIG, HERO_DI_CONFIG }    from './app.config';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    UsersComponent,
    ManageAreasComponent,
    EditUserComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    UsersService,
    SnackbarService,
    ProgressbarService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
