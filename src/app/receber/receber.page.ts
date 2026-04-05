import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  cliente: string;
  vencimento: string;
  recebimento: string;
  valor: string;
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
    valor: '',
  };

  listaRecebimentos: any[] = [];

  receber() {
    const cliente = this.usuario.cliente.trim();
    const vencimento = this.usuario.vencimento.trim();
    const recebimento = this.usuario.recebimento.trim();
    const valor = this.usuario.valor.trim();
    if (!cliente || !vencimento || !recebimento || !valor) {
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
      valor: '',
    };
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }

  voltarMenu(){
    this.route.navigate(['/menu'])
  }

}
