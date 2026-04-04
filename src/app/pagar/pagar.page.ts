import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
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

    usuario: Usuario   = {
    fornecedor: '',
    vencimento: '',
    pagamento: '',
    valor: ''
  };

  listaPagamentos: any[] = [];

  pagamento() {
    const fornecedor = this.usuario.fornecedor.trim();
    const vencimento = this.usuario.vencimento.trim();
    const pagamento = this.usuario.pagamento.trim();
    const valor = this.usuario.valor.trim();
    if (!fornecedor || !vencimento || !pagamento || !valor) {
      return;
    }

    const novoPagamento: Usuario = {
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
    this.usuario = {
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
