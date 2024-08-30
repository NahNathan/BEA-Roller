import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoladaService {
  
  constructor() { }

  //Rodando 3d6
  rolarDados(): number[] {
    return [this.rolarUmDado(), this.rolarUmDado(), this.rolarUmDado()];
  }

  //Rodando cada dado
  private rolarUmDado(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  //Calcular o resultado e determinar se passou ou não
  calcularResultado(Roladas: number[], modificador: number, dificuldade?: number): string {
    console.log(Roladas)
    const mod = Number(modificador);
    const total = Roladas.reduce((a, b) => a + b, 0) + mod;
    
    if (dificuldade !== undefined) {
      return total >= dificuldade ? `${total} - Sucesso!` : `${total} - Falha!`;
    }
    return `Total: ${total}`;
  }
  
}
