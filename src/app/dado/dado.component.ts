import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  @Input() valor: number = 1;
  @Input() rolando: boolean = false; // Recebe o estado de rolagem do componente pai

  // Função chamada ao fim da animação
  pararAnimacao() {
    this.rolando = false;
  }
}
