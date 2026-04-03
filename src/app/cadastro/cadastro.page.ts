import { Component, OnInit } from '@angular/core';
import { AngularDelegate } from '@ionic/angular';
import { Router } from '@angular/router';

interface Usuario {
  nome: string;
  tipo: string;
  email: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {
  
  usuario: Usuario = {
    nome: '',
    tipo: '',
    email: ''
  };

  listaCadastros: any[] = [];

  cadastrar() {
    const name = this.usuario.nome.trim();
    const type = this.usuario.tipo.trim();
    const email = this.usuario.email.trim();
    if (!name || !type || !email) {
      return;
    }

    const novoCadastro: Usuario = {
      nome: name,
      tipo: type,
      email: email
    };

    this.listaCadastros.unshift(novoCadastro);
    this.limparFormulario();
  }

  excluir(index: number) {
    this.listaCadastros.splice(index, 1);
  }

  limparFormulario() {
    this.usuario = {
      nome: '',
      tipo: '',
      email: ''
    };
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }

  abrirMenu(){
    this.router.navigate(['/menu'])
  }
}
