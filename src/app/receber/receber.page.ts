import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  cliente: string;
  vencimento: string;
  recebimento: string;
  valor: number;
}

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false,
})
export class ReceberPage implements OnInit {

  usuario: Usuario   = {
    cliente: '',
    vencimento: '',
    recebimento: '',
    valor: 0
  };

  listaRecebimentos: any[] = [];

  receber() {
    const cliente = this.usuario.cliente.trim();
    const vencimento = this.usuario.vencimento.trim();
    const recebimento = this.usuario.recebimento.trim();
    const valor = this.usuario.valor;
    if (!cliente || !vencimento || !recebimento || valor <= 0) {
      return;
    }

    const novoRecebimento: Usuario = {
      cliente: cliente,
      vencimento: vencimento,
      recebimento: recebimento,
      valor: valor
    };

    this.listaRecebimentos.unshift(novoRecebimento);
    this.limparCampos();
  }

  excluir(index: number) {
    this.listaRecebimentos.splice(index, 1);
  }

  limparCampos() {
    this.usuario = {
      cliente: '',
      vencimento: '',
      recebimento: '',
      valor: 0
    };
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }

  voltarMenu(){
    this.route.navigate(['/menu'])
  }

}
