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

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.numeroPreguntas);

  }

  generateExam(){
    
  }
}
