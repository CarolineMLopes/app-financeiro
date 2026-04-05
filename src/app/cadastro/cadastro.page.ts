import { Component, OnInit } from '@angular/core';
import { AngularDelegate } from '@ionic/angular';
import { Router } from '@angular/router';

interface Usuario {
  nome: string;
  tipo: string;
  endereco: string;
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
    endereco: ''
  };

  listaCadastros: any[] = [];

  cadastrar() {
    const name = this.usuario.nome.trim();
    const type = this.usuario.tipo.trim();
    const endereco = this.usuario.endereco.trim();
    if (!name || !type || !endereco) {
      return;
    }

    const novoCadastro: Usuario = {
      nome: name,
      tipo: type,
      endereco: endereco
    };

    this.listaCadastros.unshift(novoCadastro);
    this.limparCampos();
  }

  excluir(index: number) {
    this.listaCadastros.splice(index, 1);
  }

  limparCampos() {
    this.usuario = {
      nome: '',
      tipo: '',
      endereco: ''
    };
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }

  abrirMenu(){
    this.router.navigate(['/menu'])
  }
}
