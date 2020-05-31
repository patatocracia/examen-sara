import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()

export class PreguntaService {

private url: string;

constructor(private _http: HttpClient){
  this.url = GLOBAL.url;
}

createPregunta(pregunta: Pregunta): Observable<any> {
  let params = JSON.stringify(pregunta);
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + '/register', params, { headers: headers });
}



}
