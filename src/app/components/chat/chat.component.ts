import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit{

  mensaje:string = "";
  element:any;
  constructor( private _chat:ChatService ) {
    this._chat.loadMessages().subscribe( ()=>{
        setTimeout(()=>{
          this.element.scrollTop = this.element.scrollHeight;
        },20)
    });
  }
  ngOnInit(){
    this.element = document.getElementById('app-mensajes')
  }

  sendMessage(){
    if(this.mensaje.length === 0){
      return;
    }
    
    this._chat.addMessage(this.mensaje).then(()=> console.log("Message Sent")).catch((err)=>console.error("Error sending message", err))
    this.mensaje= "";
  }
}
