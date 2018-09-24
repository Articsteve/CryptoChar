import { Component, OnInit } from '@angular/core';
import * as forge from "node-forge";

@Component({
  selector: 'app-uncrypt',
  templateUrl: './uncrypt.component.html',
  styleUrls: ['./uncrypt.component.css']
})
export class UncryptComponent implements OnInit {

  state:String = "Crypt";
  key:boolean = false;
  localPublicKey:any;
  publicKey:any;
  ctxt:string;
  utxt:string;

  constructor() {

   }
   changeMethod(){
     if(this.state == "Crypt"){
       this.state = "Uncrypt";
     }
     else{
       if(this.state == "Uncrypt"){
         this.state = "Crypt";
       }
     }
   }



   cryptUncrypt(){
     if(this.state == "Crypt"){
       //console.log(this.ctxt);

     }
     else{
       if(this.state == "Uncrypt"){
         //console.log(this.utxt);
       }
     }
   }

   setUpKey(key){
     //let rsa = forge.pki.rsa;
     console.log(key);
     this.key = true;
     this.localPublicKey = forge.pki.publicKeyFromPem(key);


   }
  ngOnInit() {
  }

}
