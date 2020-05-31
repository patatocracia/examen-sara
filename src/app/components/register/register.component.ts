import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../../models/pregunta';
import { PreguntaService } from '../../services/pregunta.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [PreguntaService]
})
export class RegisterComponent implements OnInit {

public status: string;
public pregunta: Pregunta;

    constructor(private _preguntaService: PreguntaService) {
      this.pregunta = new Pregunta("", "", "")
    }


  ngOnInit(): void {
  }

  onSubmit(form){
    this._preguntaService.createPregunta(this.pregunta).subscribe(
      response => {
        if(response.pregunta && response.pregunta._id){ //si nos devuelven un usuario y ese usuario tiene una id
          this.status= 'Success' //todo ha ido bien
          form.reset();
        }else{
          this.status='Error'
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
