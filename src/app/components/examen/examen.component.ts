import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css'],
  providers: [PreguntaService]
})
export class ExamenComponent implements OnInit {

  public numeroPreguntas: any;
  public preguntas: any;
  public status: boolean;
  public timeLeft: number;
  public interval;
  public subscribeTimer: any;
  public timerStatus: boolean;
  public iteracion;
  public respuesta;
  public correccion;

  constructor(private _preguntaService: PreguntaService) {
    this.numeroPreguntas = 10;
    this.status = false;
    this.timeLeft = this.numeroPreguntas * 40;
    this.correccion = new Array;
    this.respuesta = new Array;
    this.iteracion = new Array;
  }

  ngOnInit(): void {
    this.status = false;
    console.log(this.preguntas);

  }

  generateExam() {
    this.preguntas = new Array;
    for (let i = 0; i < this.numeroPreguntas; i++) {
      this._preguntaService.getRandomPregunta().subscribe(response => {
        this.preguntas.push(response.pregunta);
      },
        error => {
          console.log(<any>error);

        }
      );

    }

    console.log(this.preguntas);

    this.status = true;
  }
  changeNumber($event) {
    this.numeroPreguntas = $event;
    this.preguntas = new Array(this.numeroPreguntas);
    this.timeLeft = this.numeroPreguntas * 40;
  }

  changeRadio($event) {
    this.respuesta = $event;
  }
  onSubmit(responseForm: NgForm) {
    this.respuesta.push(responseForm.controls['respuesta'].value);
    this.iteracion.push(responseForm.controls['iteracion2'].value);



    console.log(this.correccion[this.iteracion]);

  }

  correccionAll(){
    console.log('hola');

    for (let index = 0; index < this.numeroPreguntas; index++) {
      if (this.preguntas[index].response == this.respuesta[index]) {
        this.correccion.push(true);
      } else {
        this.correccion.push(false);
      }

    }
    console.log(this.correccion);
    console.log(this.respuesta);


  }
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timerStatus = false;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
