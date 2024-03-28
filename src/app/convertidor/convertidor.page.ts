import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.page.html',
  styleUrls: ['./convertidor.page.scss'],
})
export class ConvertidorPage  {
  
  cantidadDinero: number = 0;
    tipoMoneda: string = "";
    opcionSeleccionada: string = "";
    resultadoConversion: number | null = null;
   
    constructor(private alertController: AlertController) {}
   
    conversion() {
      if (this.cantidadDinero <= 0 || this.tipoMoneda === "" || this.opcionSeleccionada === "") {
        this.mostrarMensaje('Por favor, ingrese un valor válido.');
        return;
      }
   
      switch (this.tipoMoneda) {
        case 'dolarP':
          this.convertirDolar();
          break;
        case 'euroP':
          this.convertirEuro();
          break;
        case 'pesoP':
          this.convertirPeso();
          break;
        case 'bolivarP':
          this.convertirBolivar();
          break;
        case 'rupiaP':
          this.convertirRupia();
          break;
        default:
          this.mostrarMensaje('Tipo de moneda no válido.');
      }
    }
   
    async mostrarMensaje(mensaje: string) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: mensaje,
        buttons: ['OK']
      });
   
      await alert.present();
    }
   
    convertirDolar() {
      switch (this.opcionSeleccionada) {
        case 'euro':
          this.resultadoConversion = this.cantidadDinero * 0.93;
          break;
        case 'dolar':
          this.resultadoConversion = this.cantidadDinero;
          break;
        case 'rupia':
          this.resultadoConversion = this.cantidadDinero * 82.99;
          break;
        case 'bolivar':
          this.resultadoConversion = this.cantidadDinero * 6.85;
          break;
        case 'peso':
          this.resultadoConversion = this.cantidadDinero * 17.09;
          break;
        default:
          this.mostrarMensaje('Moneda de conversión no válida.');
      }
    }
   
    convertirEuro() {
      switch (this.opcionSeleccionada) {
        case 'euro':
          this.resultadoConversion = this.cantidadDinero;
          break;
        case 'dolar':
          this.resultadoConversion = this.cantidadDinero * 1.08;
          break;
        case 'rupia':
          this.resultadoConversion = this.cantidadDinero * 89.49;
          break;
        case 'bolivar':
          this.resultadoConversion = this.cantidadDinero * 7.39;
          break;
        case 'peso':
          this.resultadoConversion = this.cantidadDinero * 18.41;
          break;
        default:
          this.mostrarMensaje('Moneda de conversión no válida.');
      }
    }
   
    convertirPeso() {
      switch (this.opcionSeleccionada) {
        case 'euro':
          this.resultadoConversion = this.cantidadDinero * 0.054;
          break;
        case 'dolar':
          this.resultadoConversion = this.cantidadDinero * 0.058;
          break;
        case 'rupia':
          this.resultadoConversion = this.cantidadDinero * 4.85;
          break;
        case 'bolivar':
          this.resultadoConversion = this.cantidadDinero * 0.40;
          break;
        case 'peso':
          this.resultadoConversion = this.cantidadDinero;
          break;
        default:
          this.mostrarMensaje('Moneda de conversión no válida.');
      }
    }
   
    convertirBolivar() {
      switch (this.opcionSeleccionada) {
        case 'euro':
          this.resultadoConversion = this.cantidadDinero * 0.13;
          break;
        case 'dolar':
          this.resultadoConversion = this.cantidadDinero * 0.14;
          break;
        case 'rupia':
          this.resultadoConversion = this.cantidadDinero * 11.92;
          break;
        case 'bolivar':
          this.resultadoConversion = this.cantidadDinero;
          break;
        case 'peso':
          this.resultadoConversion = this.cantidadDinero * 2.45;
          break;
        default:
          this.mostrarMensaje('Moneda de conversión no válida.');
      }
    }
   
    convertirRupia() {
      switch (this.opcionSeleccionada) {
        case 'euro':
          this.resultadoConversion = this.cantidadDinero * 0.011;
          break;
        case 'dolar':
          this.resultadoConversion = this.cantidadDinero * 0.012;
          break;
        case 'rupia':
          this.resultadoConversion = this.cantidadDinero;
          break;
        case 'bolivar':
          this.resultadoConversion = this.cantidadDinero * 0.083;
          break;
        case 'peso':
          this.resultadoConversion = this.cantidadDinero * 0.21;
          break;
        default:
          this.mostrarMensaje('Moneda de conversión no válida.');
      }
    }
}