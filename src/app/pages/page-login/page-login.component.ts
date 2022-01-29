import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {AuthenticationRequest} from '../../../gs-api/src/models/authentication-request';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  authenticationRequest: AuthenticationRequest = {};


constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  login(): void{
  this.userService.login(this.authenticationRequest);

  }

}
