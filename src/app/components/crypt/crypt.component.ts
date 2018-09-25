import { Component, OnInit } from '@angular/core';
import { KeyService } from '../../services/key.service';
import * as aesjs from "aes-js";

@Component({
  selector: 'app-crypt',
  templateUrl: './crypt.component.html',
  styles: []
})
export class CryptComponent implements OnInit {

  state:String = "Encrypt";
  ctxt:string;
  utxt:string;

  constructor( private _ks:KeyService ) {

  }

  changeMethod(){
    if(this.state == "Encrypt"){
      this.state = "Decrypt";
    }
    else{
      if(this.state == "Decrypt"){
        this.state = "Encrypt";
      }
    }
  }

  cryptUncrypt(){
    if(this.state == "Encrypt"){
      let encryptedText =  this._ks.encrypt(this.ctxt);
      this.utxt = encryptedText;
    }
    else{
      if(this.state == "Decrypt"){
        let decryptedText =  this._ks.decrypt(this.utxt);
        this.ctxt = decryptedText;
      }
    }
  }

  ngOnInit() {
  }

}
