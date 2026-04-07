import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Recebimento {
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

  receber: Recebimento   = {
    cliente: '',
    vencimento: '',
    recebimento: '',
    valor: 0,
  };

  listaRecebimentos: any[] = [];

  Receber() {
    const cliente = this.receber.cliente.trim();
    const vencimento = this.receber.vencimento.trim();
    const recebimento = this.receber.recebimento.trim();
    const valor = parseFloat(this.receber.valor.toString().trim());
    if (!cliente || !vencimento || !recebimento || valor <= 0) {
      return;
    }

    const novoRecebimento: Recebimento = {
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
    this.receber = {
      cliente: '',
      vencimento: '',
      recebimento: '',
      valor: 0,
    };
  }

  formatarData(data: string): string {
    if (!data || !data.includes('-')) return data;
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }

  voltarMenu(){
    this.route.navigate(['/menu'])
  }

}
