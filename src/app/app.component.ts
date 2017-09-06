import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyB1uxfqMwMeG0UOuG4KKVY1IFAfJNFXYr0",
      authDomain: "eventmanager-21a5e.firebaseapp.com",
      databaseURL: "https://eventmanager-21a5e.firebaseio.com",
      projectId: "eventmanager-21a5e",
      storageBucket: "",
      messagingSenderId: "716727941635"
    });


  const unsuscribe = firebase.auth().onAuthStateChanged( user => {
    if(!user){
      this.rootPage = 'LoginPage';
      unsuscribe();
    } else {
      this.rootPage = HomePage;
      unsuscribe();
    }
  });
}
}
