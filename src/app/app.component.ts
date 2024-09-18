import { Component } from '@angular/core';
import { RoladaService } from '../app/services/rolada.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Rolador de Dados';
  modificador = 3;
  dificuldade?: number;
  resultado = '';

  // Variáveis para armazenar o valor de cada dado
  resultadoDado1 = 1;
  resultadoDado2 = 1;
  resultadoDado3 = 1;

  // Controla o estado de rolagem dos dados
  rolandoDados = false;

  constructor(private roladaService: RoladaService) {}

  onRoll() {
    this.rolandoDados = true; // Ativa a animação de rolagem
    setTimeout(() => {
      // Chama o serviço para rolar os três dados
      const resultados = this.roladaService.rolarDados();

      // Atribui os resultados individuais aos componentes
      this.resultadoDado1 = resultados[0];
      this.resultadoDado2 = resultados[1];
      this.resultadoDado3 = resultados[2];

      // Calcula o resultado final
      this.resultado = this.roladaService.calcularResultado(
        resultados,
        this.modificador,
        this.dificuldade
      );

      this.rolandoDados = false; // Desativa a animação após a rolagem
    }, 1000); // Duração da animação em milissegundos
  }
}
