import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';

//Services
import { ChatService } from './services/chat.service';
import { KeyService } from './services/key.service';

//Components
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GKeyComponent } from './components/g-key/g-key.component';
import { UncryptComponent } from './components/uncrypt/uncrypt.component';

//Routes
import { app_routing } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { KeyPipe } from './pipes/key.pipe';
import { CryptComponent } from './components/crypt/crypt.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    GKeyComponent,
    UncryptComponent,
    HomeComponent,
    KeyPipe,
    CryptComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserModule,
    FormsModule,
    app_routing
  ],
  providers: [
    ChatService,
    KeyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
