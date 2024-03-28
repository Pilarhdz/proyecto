import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage  {

  display: string = '';
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 
  agregar(value: any) {
    this.display += value;
  }
 
  Limpiar() {
    this.display = '';
  }
 
  calcular() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }
 
  

}
