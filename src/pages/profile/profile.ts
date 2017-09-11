import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Alert,
  AlertController
} from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: any;
  public birthDate: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider) { }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }
}