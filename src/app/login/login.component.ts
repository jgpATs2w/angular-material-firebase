import { Component, OnInit } from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.afAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(()=>{
          this.router.navigate(['/protected']);
      }).catch(console.error);
  }

}
