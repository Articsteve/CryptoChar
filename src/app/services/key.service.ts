import { Injectable } from '@angular/core';
import * as forge from "node-forge";
import * as aesjs from "aes-js";

@Injectable()
export class KeyService {


 key:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  constructor() {


   }
   encrypt( str:string ){
     let textBytes = aesjs.utils.utf8.toBytes(str);
     let aesCtr = new aesjs.ModeOfOperation.ctr(this.key, new aesjs.Counter(5));
     let encryptedBytes = aesCtr.encrypt(textBytes);
     let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
     return encryptedHex;
   }
   decrypt( str:string ){
     let encryptedBytes = aesjs.utils.hex.toBytes(str);
     let aesCtr = new aesjs.ModeOfOperation.ctr(this.key, new aesjs.Counter(5));
     let decryptedBytes = aesCtr.decrypt(encryptedBytes);
     let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
     return decryptedText;
   }
}
