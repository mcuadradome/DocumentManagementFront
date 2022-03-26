import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Constants } from 'src/app/common/Constants';
import { User, UserResponse } from 'src/app/models/Access.interface';
import { catchError, map } from 'rxjs/operators';
import { AccessService } from '../access.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userIsLogued : boolean;
  private loggedId = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private constants: Constants,
              private access: AccessService) {
    this.userIsLogued = false;
  }

  login(authData: User): Observable<UserResponse> {
    return this.access.login(authData).pipe(
      map((res: UserResponse) => {
        this.loggedId.next(false);
        this.userIsLogued = true;
        return res;
      }),
      catchError((error) => this.handlerError(error))
    );

  }

  get isLogged(): Observable<boolean>{
    return this.loggedId.asObservable();
  }

  logout(): void{
    localStorage.removeItem('idUser');
    this.userIsLogued = false;
  }

  private handlerError(err: any): Observable<never>{
    let errorMessage = 'An ocurred on error to retriving data';
    if (err){
      errorMessage = 'Error code ' + `${err.message}`;
    }

    return throwError(errorMessage);

  }

}




