import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage {
  preguntas: { enunciado: string, opciones: string[], respuestaCorrecta: number }[];
  indicePreguntaActual: number;
  puntaje: number;
   
  constructor() {
    this.preguntas = [
      {
        enunciado: "¿Cuál de los siguientes no es un tipo de dato en PHP?",
        opciones: ["Integer", "Boolean", "String", "Float"],
        respuestaCorrecta: 3 // Respuesta correcta es "Float"
      },
      {
        enunciado: "¿Qué significa PHP?",
        opciones: ["Personal Home Page", "Preprocessed Hypertext Processor", "PHP: Hypertext Preprocessor", "Private Home Page"],
        respuestaCorrecta: 2 // Respuesta correcta es "PHP: Hypertext Preprocessor"
      },
      {
        enunciado: "¿Qué método se utiliza para enviar datos a través de un formulario HTML utilizando PHP?",
        opciones: ["GET", "POST", "REQUEST", "DATA"],
        respuestaCorrecta: 1 // Respuesta correcta es "POST"
      },
      {
        enunciado: "¿Qué función se utiliza para abrir un archivo en PHP?",
        opciones: ["open_file()", "read_file()", "fopen()", "file_open()"],
        respuestaCorrecta: 2 // Respuesta correcta es "fopen()"
      },
      {
        enunciado: "¿Cuál es el operador de concatenación en PHP?",
        opciones: ["+", ".", "&", "*"],
        respuestaCorrecta: 1 // Respuesta correcta es "."
      },
      {
        enunciado: "¿Qué función se utiliza para establecer la zona horaria en PHP?",
        opciones: ["date_default_timezone_get()", "set_timezone()", "date_default_timezone_set()", "set_timezone_default()"],
        respuestaCorrecta: 2 // Respuesta correcta es "date_default_timezone_set()"
      },
      {
        enunciado: "¿Qué función se utiliza para obtener la longitud de una cadena en PHP?",
        opciones: ["strlen()", "length()", "str_length()", "count_chars()"],
        respuestaCorrecta: 0 // Respuesta correcta es "strlen()"
      },
      {
        enunciado: "¿Cuál de las siguientes no es una estructura de control en PHP?",
        opciones: ["if", "switch", "for", "select"],
        respuestaCorrecta: 3 // Respuesta correcta es "select"
      }
    ];
    this.indicePreguntaActual = 0;
    this.puntaje = 0;
  }
   
  responderPregunta(opcionSeleccionada: number) {
    if (opcionSeleccionada === this.preguntas[this.indicePreguntaActual].respuestaCorrecta) {
      this.puntaje++;
    }
    this.indicePreguntaActual++;
  }
   
  reiniciarQuiz() {
    this.indicePreguntaActual = 0;
    this.puntaje = 0;
  }
  
  

  
  }


