import { Component, OnInit } from '@angular/core';
import * as forge from "node-forge";
import { KeyService } from '../../services/key.service';

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

  constructor( private _ks:KeyService) {
/*    console.log(_ks.privateKey, "Service Private");
    console.log(_ks.privateKey, "Service Public");*/
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
       console.log(this.ctxt);
       let byteArray = this.unPack(this.ctxt);
       console.log(byteArray, "bytes");
       console.log(String.fromCharCode.apply(String, byteArray), "Unchanged?")
       let encrypted = this.localPublicKey.encrypt(byteArray);
       this.utxt = encrypted;
     }
     else{
       if(this.state == "Uncrypt"){
         //console.log(this.utxt);
         let byteArray = this.unPack(this.utxt);
         let decrypted = this.localPublicKey.decrypt(byteArray);
         this.ctxt = String.fromCharCode.apply(String, decrypted);
       }
     }
   }

   setUpKey(key){
     //let rsa = forge.pki.rsa;
     console.log(key);
     this.key = true;
     this.localPublicKey = forge.pki.publicKeyFromPem(key);
   }
   unPack(str) {
    var bytes = [];
    for(var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char >>> 8);
        bytes.push(char & 0xFF);
    }
    return bytes;
  }


  stringToBytes(str) {
  var ch, st, re = [];
  for (var i = 0; i < str.length; i++ ) {
  	ch = str.charCodeAt(i);  // get char
  	st = [];                 // set up "stack"
  	do {
  	  st.push( ch & 0xFF );  // push byte to stack
  	  ch = ch >> 8;          // shift value down by 1 byte
  	}
  	while ( ch );
  	// add stack contents to result
  	// done because chars have "wrong" endianness
  	re = re.concat( st.reverse() );
  }
  // return an array of bytes
  return re;
  }
  //String.fromCharCode.apply(String, arr);

  ngOnInit() {
  }

}
