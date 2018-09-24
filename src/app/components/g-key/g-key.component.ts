import { Component, OnInit } from '@angular/core';
import * as keypair from 'keypair';
import * as forge from 'node-forge';
import { KeyService } from '../../services/key.service';

@Component({
  selector: 'app-g-key',
  templateUrl: './g-key.component.html',
  styleUrls: ['./g-key.component.css']
})
export class GKeyComponent implements OnInit {

  publicKey:string;
  privateKey:string;
  pub2copy:string;

  constructor( private _ks:KeyService ) {

    this.publicKey = _ks.publicKey;
    this.privateKey = _ks.privateKey;


    console.log(this.publicKey, "Public Key");
    console.log(this.privateKey, "Private Key");
  }

  removeDeclarations( key:string ){
    let clean:string;

    clean = key.replace('-----BEGIN RSA PUBLIC KEY-----','');
    clean = clean.replace('-----END RSA PUBLIC KEY-----','');
    clean = clean.replace('-----BEGIN RSA PRIVATE KEY-----','');
    clean = clean.replace('-----END RSA PRIVATE KEY-----','');

    return clean;
  }
  copyKey(val: string){
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      alert("Copied to clickboard");
    }

    createNewKeys(){
          const pubprivkey = keypair(2048,65537); //sie in bits, encryption exponential
          //RSA 2 P numbers
          this.pub2copy = pubprivkey.public;
          this.publicKey = this.removeDeclarations(pubprivkey.public);
          this.privateKey = this.removeDeclarations(pubprivkey.private);
          this._ks.privateKey = this.privateKey;
          this._ks.publicKey = this.publicKey;
          this._ks.actualPublicKey = forge.pki.publicKeyFromPem(pubprivkey.public);
    }

  ngOnInit() {
  }

}
