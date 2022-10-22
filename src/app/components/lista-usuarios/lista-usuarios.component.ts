import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/APIv1/usuarios.service';




@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})

export class ListaUsuariosComponent implements OnInit {

  public HighlightRow: number = -1;
  public ModalTitle: string = "";
  public ActivateAddEditUser: boolean = false;
  public userOperation: any = [];
  public ListaUsuarios: any = [];
  public UserSelected: any = [];
  public borrado: boolean = false;
  //public modalText: any = [];
  //public userObject: any = new Usuarios();
  

  constructor(
    private service: UsuariosService  
    
    ){ 

    //this.userObject.push(new Usuarios(this.ListaUsuarios[this.HighlightRow]));
    ////this.usuario = new Usuario('Juan','Perez','Americas',2);
  }



  ngOnInit(): void {

    this.refreshUsers();

  }

  refreshUsers() {

    this.service.getUsers().subscribe(data => {

      this.ListaUsuarios = data;
    });
  }

  selectRow(index: number): void {
    console.log('Index' + index);
    this.HighlightRow = index;
    
  }

  addUserClick(){

    this.ModalTitle = "Agregar Usuario";

    console.log("si llega");
    
    this.userOperation = {
      id:0,
      Nombre: "", 
      Apellidos:"",
      Condominio:"",
      Direccion:""
    }

    this.UserSelected = this.userOperation;
    //console.log(this.userOperation)
    this.ActivateAddEditUser = true;

  }

  editUserClick(){

    this.ActivateAddEditUser = true;
    this.ModalTitle = "Editar Usuario";
    this.userOperation = this.ListaUsuarios[this.HighlightRow];
    
    //console.log(this.userOperation)
    this.UserSelected = this.ListaUsuarios[this.HighlightRow];

    this.borrado = false;
    //console.log(this.UserSelected)
    //console.log(this.ListaUsuarios[this.HighlightRow]['id'])
  }

  delUserClick(){

    //esta seguro = true
    this.borrado = true;
    this.ActivateAddEditUser = true;
    this.ModalTitle = "Borrar Usuario";
    this.userOperation = this.ListaUsuarios[this.HighlightRow];

     //console.log(this.viewContainerRef.createEmbeddedView(this.ListaUsuarios[this.HighlightRow]));

  }

  borrarUsuario() {

    var id_ = this.ListaUsuarios[this.HighlightRow]["id"];
    console.log(id_)
    this.service.deleteUser(id_).subscribe(res => {

      //this.toast = ('<div class="toast-body">' + res.toString() + '</div>');
      this.refreshUsers();

    })


  }


  closeModal() {

    this.ActivateAddEditUser = false;
    //this.refreshUsers();

  }


}
