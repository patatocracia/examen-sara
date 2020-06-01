import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';


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

  constructor(private _preguntaService: PreguntaService) {
    this.numeroPreguntas = 10;
    this.status = false;
    this.preguntas = new Array;
  }

  ngOnInit(): void {
    this.status = false;
    console.log(this.preguntas);

  }

  generateExam() {
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
    this.timeLeft = numeroPreguntas * 40;
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
