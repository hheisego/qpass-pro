import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvitacionesComponent } from './components/invitaciones/invitaciones.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

//Servicios -> Models
import { UsuariosService } from './APIv1/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { AddEditUsuariosComponent } from './components/add-edit-usuarios/add-edit-usuarios.component';
import { ComponentnameComponent } from './components/componentname/componentname.component';
import { ToastComponent } from './components/toast/toast.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    LeftMenuComponent,
    LayoutComponent,
    NavbarComponent,
    InvitacionesComponent,
    AddUsuarioComponent,
    ListaUsuarioComponent,
    UsuarioComponent,
    UsuariosComponent,
    ListaUsuariosComponent,
    AddEditUsuariosComponent,
    ComponentnameComponent,
    ToastComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuariosService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
