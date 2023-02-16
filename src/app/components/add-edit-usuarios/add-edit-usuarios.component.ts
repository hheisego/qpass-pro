import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from 'src/app/APIv1/usuarios.service';
import Swal from 'sweetalert2'
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';

@Component({
  selector: 'app-add-edit-usuarios',
  templateUrl: './add-edit-usuarios.component.html',
  styleUrls: ['./add-edit-usuarios.component.scss']
})


export class AddEditUsuariosComponent implements OnInit {

  public ActivateAddEditUser: boolean = false;

  public userId: any = "";
  public Nombre: String = "";
  public Apellidos: String = "";
  public Condominio: String = "";
  public Direccion: String = "";
  public borrado: boolean = false;
  public tipoUsuario: any = '';
  public fechaNacimiento: any = '';
  public rfcORcurp: any = '';
  public correo: any = '';
  public telefono: any = '';


  constructor(private serviceUsuario: ListaUsuariosComponent, private service: UsuariosService) {   }

  //@Input() UserSelected: any;
  
  userObject: any = this.serviceUsuario.UserSelected;

  
  ngOnInit(): void {

    this.userId = this.userObject["id"];
    this.Nombre = this.userObject["Nombre"];
    this.Apellidos = this.userObject["Apellidos"];
    this.Direccion = this.userObject["Direccion"];
    this.Condominio = this.userObject["Condominio"];
    this.borrado = this.serviceUsuario.borrado;
    this.tipoUsuario = this.userObject["tipoUsuario"];
    this.fechaNacimiento = this.userObject["fechaNacimiento"];
    this.rfcORcurp = this.userObject["rfcOrcurp"];
    this.correo = this.userObject["correo"];
    this.telefono = this.userObject["telefono"];


  }

  
  crearUsuario() {

    
    var nuevoUsuario = {Nombre: this.Nombre, 
                        Apellidos: this.Apellidos, 
                        Condominio:this.Condominio,
                        Direccion:this.Direccion,
                        tipoUsuario:this.tipoUsuario,
                        fechaNacimiento:this.fechaNacimiento,
                        rfcOrcurp:this.rfcORcurp,
                        correo:this.correo,
                        telefono:this.telefono
                      };
    
    this.service.addNewUser(nuevoUsuario).subscribe(res=>{
 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario: '+ this.Nombre +' se ha creado',
        showConfirmButton: false,
        timer: 2222,
       
      })
      this.serviceUsuario.refreshUsers(); 
    });
    
    
    
  }

  editarUsuario() {

    //id: this.userId, 
    var modifyUsuario = {Nombre: this.Nombre, 
                        Apellidos: this.Apellidos, 
                        Condominio: this.Condominio,
                        Direccion: this.Direccion,
                        tipoUsuario: this.tipoUsuario,
                        fechaNacimiento: this.fechaNacimiento,
                        rfcOrcurp: this.rfcORcurp,
                        correo: this.correo,
                        telefono: this.telefono
                      };

    var id_ = this.userId;

    this.service.updateUser(id_, modifyUsuario).subscribe(res=>{


      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario: ' + this.Nombre + ' modificado correctamente',
        showConfirmButton: false,
        timer: 2222,

      })

      
      this.serviceUsuario.refreshUsers(); 

    })

  }

 
  closeModal() {

    this.ActivateAddEditUser = false;
    this.userId = "";
    this.Nombre = "";
    this.Apellidos = "";
    this.Direccion = "";
    this.Condominio = "";
    this.Direccion = "";
    this.tipoUsuario = "";
    this.fechaNacimiento = "";
    this.rfcORcurp = "";
    this.correo = "";
    this.telefono = "";

    this.serviceUsuario.refreshUsers();
    

  }


}


