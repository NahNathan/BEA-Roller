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
  rolandoDados = false;

  // Array com os nomes dos arquivos de imagem
  private backgroundImageUrls = ['BG1.png', 'BG2.png', 'BG3.png', 'BG4.png', 'BG5.png', 'BG6.png'];
  
  // Função para obter a URL da imagem aleatória
  getAleatorioBackgroundImage(): string {
    return `url(${this.backgroundImageUrls[Math.floor(Math.random() * this.backgroundImageUrls.length)]})`;
  }

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
