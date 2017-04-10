import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {FooterPage} from "../pages/footer/footer";
import {LazadaPage} from "../pages/lazada/lazada";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {CloudSettings, CloudModule} from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '26ec6612'
  },
  'push': {
    'sender_id': 'AAAAB4vVzFk:APA91bGqCpaz95AP3fwYrMy9vTJBvU74RfIwv2dvZEcjf65E6WU_NNBogqzTlzK3nVt9uBIWzmUXWTHXl0JD3FNRa77-EFsBCQSHf-9K7x4Ob-yTTySjhIyGgAAx6Z5nvVnF8UUlCaWX',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FooterPage,
    LazadaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    FooterPage,
    LazadaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
