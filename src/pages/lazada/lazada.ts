import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";

/*
  Generated class for the Lazada page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lazada',
  templateUrl: 'lazada.html'
})
export class LazadaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.iab.create('http://www.lazada.vn','_blank','location=no,toolbar=yes,hidden=no');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LazadaPage');
  }

}
