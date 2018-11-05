import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { CanvasDrawComponent } from '../components/canvas-draw/canvas-draw';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CreatePage } from '../pages/create/create';
import { ViewNotePage } from '../pages/view-note/view-note'
import { RestProvider } from '../providers/rest/rest';
import { NativeStorage } from '@ionic-native/native-storage';
import { StorageProvider } from '../providers/storage/storage';
import { CanvasPage } from '../pages/canvas/canvas';

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    HomePage,
    LoginPage,
    RegisterPage,
    ViewNotePage,
    CanvasDrawComponent,
    CanvasPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreatePage,
    HomePage,
    LoginPage,
    RegisterPage,
    ViewNotePage,
    CanvasPage,
    CanvasDrawComponent
  ],
  providers: [
    StatusBar,
    NativeStorage,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    StorageProvider,
    RestProvider,
    Camera,
    PhotoLibrary,
  ]
})
export class AppModule {}
