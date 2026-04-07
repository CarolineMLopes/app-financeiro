import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Pagar {
  fornecedor: string;
  vencimento: string;
  pagamento: string;
  valor: number;
} 

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false,
})
export class PagarPage implements OnInit {

    pagar: Pagar     = {
    fornecedor: '',
    vencimento: '',
    pagamento: '',
    valor: 0
  };

  listaPagamentos: any[] = [];

  pagamento() {
    const fornecedor = this.pagar.fornecedor.trim();
    const vencimento = this.pagar.vencimento.toString().trim();
    const pagamento = this.pagar.pagamento.toString().trim();
    const valor = parseFloat(this.pagar.valor.toString().trim());
    if (!fornecedor || !vencimento || !pagamento || valor <= 0) {
      return;
    }

    const novoPagamento: Pagar = {
      fornecedor: fornecedor,
      vencimento: vencimento,
      pagamento: pagamento,
      valor: valor
    };

    this.listaPagamentos.unshift(novoPagamento);
    this.limparCampos();
  }

  excluir(index: number) {
    this.listaPagamentos.splice(index, 1);
  }

  limparCampos() {
    this.pagar = {
      fornecedor: '',
      vencimento: '',
      pagamento: '',
      valor: 0
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
