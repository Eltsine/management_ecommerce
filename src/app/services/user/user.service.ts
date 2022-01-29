import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../gs-api/src/services/authentication.service';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  login(authenticationRequest: AuthenticationRequest): void{
    // @ts-ignore
    return this.authenticationService.authenticate(authenticationRequest).subscribe(data => {
        localStorage.setItem('authenticationResponse', JSON.stringify(data));
      }, error => {
      console.log(error);
      this.router.navigate(['login']);
      });

  }
}
