import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  userModel = new User()
  mensagem = "" 

  
  // receberDados() {
  //   console.log(this.userModel)

  //   //enviar dados para API
  //   //OAuth 2 tecnologia autenticacao
  //   this.loginService.login(this.userModel).subscribe((response)=> {
  //     console.log("response:", response) 
  //     console.log ("O Status code é:", response.status)
  //     console.log ("O toquen de permissão é:", response.body.accessToken)

  //     this.mensagem = "Bem vindo " + response.body.user.nome
  //     console.log (this.mensagem)
  //   }, (responseErro) => {
  //     console.log("responseErro", responseErro)
  //     this.mensagem = responseErro.error
      
  //   })
  // }
  receberDados() {
    console.log("Modelo:", this.userModel)

    const listapalavras: string [] = [ "select", "from", "drom", "or", "having", "group", "by", "insert", "exect", "\"", "\'", "--", "*", ";", "#"]
    listapalavras.forEach(palavra => {
      if(this.userModel.email?.toLowerCase().includes(palavra)){
        this.mensagem = "Dados invalidos" + palavra

        return;
      }

    });

    this.loginService.login(this.userModel).subscribe((response) => {
      this.mensagem = "Login com Sucesso!";
      this.router.navigateByUrl('/');

    }, (erro) => {
      this.mensagem = erro.error;
    } )

  }  
}


