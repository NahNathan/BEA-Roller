import { Component } from '@angular/core';
import { RoladaService } from '../app/services/rolada.service'; // Importa o serviço

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Rolador de Dados A Bandeira do Elefante e Da Arara';
  resultado: string = ''; 
  modificador: number = 0;
  dificuldade?: number;
  constructor(private roladaService: RoladaService) { }

  //Rolando os dados e mostrando o resultado
  onRoll() {
    const roladas = this.roladaService.rolarDados();
    this.resultado = this.roladaService.calcularResultado(roladas, this.modificador, this.dificuldade);
  }
}
