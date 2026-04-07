import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Pagar {
  fornecedor: string;
  vencimento: Date;
  pagamento: Date;
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
    vencimento: new Date(),
    pagamento: new Date(),
    valor: ''
  };

  listaPagamentos: any[] = [];

  pagamento() {
    const fornecedor = this.pagar.fornecedor.trim();
    const vencimento = this.pagar.vencimento.toString().trim();
    const pagamento = this.pagar.pagamento.toString().trim();
    const valor = this.pagar.valor.trim();
    if (!fornecedor || !vencimento || !pagamento || !valor) {
      return;
    }

    const novoPagamento: Pagar = {
      fornecedor: fornecedor,
      vencimento: new Date(vencimento),
      pagamento: new Date(pagamento),
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
      vencimento: new Date(),
      pagamento: new Date(),
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
