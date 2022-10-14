import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/APIv1/usuarios.service';
//import { Usuarios } from 'src/app/models/usuarios';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-add-edit-usuarios',
  templateUrl: './add-edit-usuarios.component.html',
  styleUrls: ['./add-edit-usuarios.component.scss']
})


export class AddEditUsuariosComponent implements OnInit {

  public ActivateAddEditUser: boolean = false;

  public userId: String = "";
  public Nombre: String = "";
  public Apellidos: String = "";
  public Condominio: String = "";
  public Direccion: String = "";
  public toast: String = "";


  constructor(private serviceUsuario: ListaUsuariosComponent, private service: UsuariosService) {   }

  //@Input() UserSelected: any;
  
  userObject: any = this.serviceUsuario.UserSelected;

  
  ngOnInit(): void {

    this.userId = this.userObject["id"];
    this.Nombre = this.userObject["Nombre"];
    this.Apellidos = this.userObject["Apellidos"];
    this.Direccion = this.userObject["Direccion"];
    this.Condominio = this.userObject["Condominio"];

  }

  
  crearUsuario() {

    
    var nuevoUsuario = {Nombre: this.Nombre, Apellidos: this.Apellidos, Condominio:this.Condominio};
    
    this.service.addNewUser(this.userObject).subscribe(res=>{
 
      this.toast =('<div class="toast-body">'+ res.toString() +'</div>');
      this.serviceUsuario.refreshUsers(); 

    });
    
    console.log("este es el nuevo Usuario" + nuevoUsuario);
    
  }

  editarUsuario() {
    this.serviceUsuario.refreshUsers();

  }

  closeModal() {

    this.ActivateAddEditUser = false;
    this.userId = "";
    this.Nombre = "";
    this.Apellidos = "";
    this.Direccion = "";
    this.Condominio = "";

    this.serviceUsuario.refreshUsers();
    

  }


}


