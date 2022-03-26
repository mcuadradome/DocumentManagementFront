import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/Access.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  user: User;

  constructor(private router: Router, private auth: AuthService) {

  this.user ={
      username: '',
      password: ''
  }

   }

  ngOnInit(): void {
  }

  onLogin(): void {

    // this.auth.login(this.user).subscribe((res) => {
    //   this.router.navigate(['/home']);
    // },
    // error => {
    //   console.error('Error ' + error);
    // });

    this.router.navigate(['/home']);


  }

}
