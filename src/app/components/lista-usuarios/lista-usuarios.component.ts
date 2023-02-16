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
  public tipoUsuario: any = [];
  public fechaNacimiento: any = [];
  public rfcORcurp: any  = '';
  public correo: any = '';
  public telefono: any = '';

  
  constructor(private service: UsuariosService     
              ){}



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
      Direccion:"",
      tipoUsuario: "",
      fechaNacimiento: "",
      rfcORcurp: "",
      correo: "",
      telefono: "",
      }

    this.UserSelected = this.userOperation;
  
    this.ActivateAddEditUser = true;

  }

  editUserClick(){

    this.ActivateAddEditUser = true;
    this.ModalTitle = "Editar Usuario";
    this.userOperation = this.ListaUsuarios[this.HighlightRow];
    
    this.UserSelected = this.ListaUsuarios[this.HighlightRow];

    this.borrado = false;

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


      this.refreshUsers();

    })


  }


  closeModal() {

    this.ActivateAddEditUser = false;
    //this.refreshUsers();

  }


}
