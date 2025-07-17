import { Component } from '@angular/core';
import { RoladaService } from '../app/services/rolada.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Rolador de Dados';
  modificador = 0;
  dificuldade?: number;
  resultado = '';

  //Variáveis de cada dado
  resultadoDado1 = 1;
  resultadoDado2 = 1;
  resultadoDado3 = 1;
  rolandoDados = false;

  //Imagens
  private backgroundImageUrls = [
    'assets/images/BG1.png', 
    'assets/images/BG2.png', 
    'assets/images/BG3.png', 
    'assets/images/BG4.png',
    'assets/images/BG5.png',
    'assets/images/BG6.png',
    'assets/images/BG7.png',
  ];

  //URL da imagem aleatória
  backgroundImage: string;

  constructor(private roladaService: RoladaService) {
    this.backgroundImage = this.getAleatorioBackgroundImage();
  }

  getAleatorioBackgroundImage(): string {
    return `url(${this.backgroundImageUrls[Math.floor(Math.random() * this.backgroundImageUrls.length)]})`;
  }

  onRoll() {
    this.rolandoDados = true;
    setTimeout(() => {
      const resultados = this.roladaService.rolarDados();

      this.resultadoDado1 = resultados[0];
      this.resultadoDado2 = resultados[1];
      this.resultadoDado3 = resultados[2];

      this.resultado = this.roladaService.calcularResultado(
        resultados,
        this.modificador,
        this.dificuldade
      );

      this.rolandoDados = false;
    }, 1000); //Animação em milissegundos
  }  
}
