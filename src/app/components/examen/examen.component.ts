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
  public preguntas: Array<any>;
  public status: boolean;

  constructor(private _preguntaService: PreguntaService) {
    this.numeroPreguntas = 10;
    this.status = false;
  }

  ngOnInit(): void {
    this.status = false;
  }

  generateExam() {
    this.preguntas.forEach(element => {
      this._preguntaService.getRandomPregunta().subscribe(response => {
        element = response.pregunta;
      },
        error => {
          console.log(<any>error);

        }
      );
    });


    this.status = true;
  }
  changeNumber($event) {
    this.numeroPreguntas = $event;
  }
}
