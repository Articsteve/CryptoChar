import { Injectable } from '@angular/core';

@Injectable()
export class KeyService {

  privateKey:string = "";
  publicKey:string = "";
  forge = require('node-forge');

  actualPublicKey:any;
  constructor() {
    
   }

}
