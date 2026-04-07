import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Pagar {
  fornecedor: string;
  vencimento: string;
  pagamento: string;
  valor: string;
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
    valor: ''
  };

  listaPagamentos: any[] = [];

  pagamento() {
    const fornecedor = this.pagar.fornecedor.trim();
    const vencimento = this.pagar.vencimento.trim();
    const pagamento = this.pagar.pagamento.trim();
    const valor = this.pagar.valor.trim();
    if (!fornecedor || !vencimento || !pagamento || !valor) {
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
      valor: ''
    };
  }

  constructor(private route: Router) { }

  ngOnInit() {
  }

  voltarMenu(){
    this.route.navigate(['/menu'])
  }
}
