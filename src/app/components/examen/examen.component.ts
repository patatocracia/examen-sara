import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import {NgForm} from '@angular/forms';


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
  public correccion: any;
  public iteracion: number;
  public respuesta: boolean;

  constructor(private _preguntaService: PreguntaService) {
    this.numeroPreguntas = 10;
    this.status = false;
    this.timeLeft = this.numeroPreguntas * 40;
  }

  ngOnInit(): void {
    this.status = false;
    console.log(this.preguntas);

  }

  generateExam() {
    this.preguntas = new Array;
    for (let i = 0; i < this.numeroPreguntas; i++) {
    this._preguntaService.getRandomPregunta().subscribe(response=>{
        this.preguntas.push(response.pregunta);
      },
      error=>{
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

  changeRadio($event){
    this.respuesta = $event;
  }
  onSubmit(responseForm: ngForm) {
    console.log(responseForm.value);

    console.log(responseForm.iteracion);

    this.iteracion = form.iteracion;
    this.respuesta = form.respuesta;
    console.log('hola');
    console.log(this.iteracion);
    console.log(this.respuesta);



    if (this.preguntas[this.iteracion].response == this.respuesta ) {
      this.correccion = true;
    }else{
      this.correccion = false;
    }
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timerStatus = false;
      }
    },1000)
  }

  pauseTimer() {
      clearInterval(this.interval);
    }
  }
