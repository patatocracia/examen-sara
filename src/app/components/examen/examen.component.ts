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

  constructor(private _preguntaService: PreguntaService) {
    this.numeroPreguntas = 10;
    this.status = false;
    this.preguntas = new Array(this.numeroPreguntas);
  }

  ngOnInit(): void {
    this.status = false;
  }

  generateExam() {
    for (let i = 0; i <= this.numeroPreguntas; i++) {
    this._preguntaService.getRandomPregunta().subscribe(response=>{
        this.preguntas[i]= response.pregunta;
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
  }
}
