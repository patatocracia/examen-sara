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
  public iteracion: number;
  public respuesta: boolean;

  constructor(private _preguntaService: PreguntaService) {
    this.numeroPreguntas = 10;
    this.status = false;
    this.timeLeft = this.numeroPreguntas * 40;
    this.correccion = new Array;
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
    this.respuesta = responseForm.controls['respuesta'].value;
    this.iteracion = responseForm.controls['iteracion2'].value;


    if (this.preguntas[this.iteracion].response == this.respuesta) {
      var correccion+this.iteracion = true;
    } else {
      var correccion+this.iteracion = false;
    }
    console.log(this.correccion[this.iteracion]);

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
