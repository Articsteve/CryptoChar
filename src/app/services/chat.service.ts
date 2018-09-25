import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Message } from '../interfaces/message.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {KeyService} from './key.service';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats:Message[] = [];
  public user: any = {};

  constructor( private afs: AngularFirestore,  private afAuth: AngularFireAuth, private _ks:KeyService ) {
      this.afAuth.authState.subscribe( userData =>{
        //console.log('User State', userData)
        if(!userData){
          return;
        }
        this.user.name = userData.displayName;
        this.user.uId = userData.uid;
      })
    }

  login(provider:string) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.user = {};
    this.afAuth.auth.signOut();
  }

  loadMessages(){
    this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('date', 'desc').limit(5));
    return this.itemsCollection.valueChanges().map( (data: Message[]) => {
      console.log(data);
      this.chats = [];
      for(let msn of data)
      {
        this.chats.unshift( msn );
      }
    })
  }

  addMessage( text:string ){

    let encrMsg = this._ks.encrypt(text);

    let message:Message = {
      userId: this.user.uId,
      name: this.user.name,
      MensajeEncriptado: encrMsg,
      Mensaje: text,
      date: new Date().getTime()
    }
    return this.itemsCollection.add( message);
  }
}
