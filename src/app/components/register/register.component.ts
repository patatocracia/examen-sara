import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '../../models/pregunta';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
pregunta: Pregunta;
@Input()
createHandler: Function;

    constructor(private _preguntaService: PreguntaService) {
      this.pregunta = new Pregunta("", "", "")
    }

    createPregunta(pregunta: Pregunta){
      this._preguntaService.createPregunta(pregunta).then((newPregunta: Pregunta)=>{
        this.createHandler(newPregunta)
      })
    }

  ngOnInit(): void {
  }

}
