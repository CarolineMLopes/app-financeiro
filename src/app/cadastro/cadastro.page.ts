import { Component, OnInit } from '@angular/core';
import { AngularDelegate } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false,
})
export class CadastroPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  abrirMenu(){
    this.router.navigate(['/menu'])
  }
}
