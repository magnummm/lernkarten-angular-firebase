import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public auth: Auth,
    public database: Database,
    private router: Router
  ) {}
  registerUser(registerData: any) {
    createUserWithEmailAndPassword(
      this.auth,
      registerData.email,
      registerData.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        set(ref(this.database, 'users/' + user.uid), {
          username: registerData.username,
          email: registerData.email,
        });

        alert('user created!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  signInUser(loginData: any) {
    signInWithEmailAndPassword(this.auth, loginData.email, loginData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const date = new Date();
        update(ref(this.database, 'users/' + user.uid), {
          last_login: date,
        });
        console.log('user logged in!');

        this.router.navigate(['game']);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
      });
  }

  signOutUser() {
    signOut(this.auth)
      .then(() => {
        // Sign-out successful.
        // session destroy or redirect
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
