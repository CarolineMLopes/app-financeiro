import { Component, OnInit } from '@angular/core';
import { AngularDelegate } from '@ionic/angular';
import { Router } from '@angular/router';

interface Cadastro {
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
  
  cadastro: Cadastro = {
    nome: '',
    tipo: '',
    endereco: ''
  };

  listaCadastros: any[] = [];

  cadastrar() {
    const name = this.cadastro.nome.trim();
    const type = this.cadastro.tipo.trim();
    const endereco = this.cadastro.endereco.trim();
    if (!name || !type || !endereco) {
      return;
    }

    const novoCadastro: Cadastro = {
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
    this.cadastro = {
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
