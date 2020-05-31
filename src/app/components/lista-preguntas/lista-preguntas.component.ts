import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css'],
  providers: [PreguntaService]
})
export class ListaPreguntasComponent implements OnInit {

  public preguntas: any;

  constructor(private _preguntaService: PreguntaService) { }

  ngOnInit(): void {
    getAllPreguntas();
  }
  getAllPreguntas() {
    this._preguntaService.getAllPreguntas().subscribe(
      response => {
        this.preguntas = JSON.stringify(response.preguntas);
      },
      error => {
        console.log(<any>error);

      }
    );
  }
}
