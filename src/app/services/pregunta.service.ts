import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Http, Response } from '@angular/http';
import { GLOBAL } from './global';

@Injectable()

export class PreguntaService {

private url: string;

constructor(private _http: Http){
  this.url = global.url;
}

createPregunta(newPregunta: Pregunta): Promise<void | Pregunta> {
  return this._http.post(this.url+'/register', newPregunta)
              .toPromise()
              .then(response => response.json() as Pregunta)
              .catch();
}



}
