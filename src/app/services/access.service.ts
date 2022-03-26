import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../common/Constants';
import { User, UserResponse } from '../models/Access.interface';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient, private constants: Constants) { }

  public login(authData: User): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.constants.BASE_URI + '/users/byEmail/' + authData.username);
  }


}
