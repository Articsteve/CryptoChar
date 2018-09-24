import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key'
})
export class KeyPipe implements PipeTransform {

  transform(value: any): any {
    let aestheticKey:any;

    if(value != ""){
      aestheticKey = this.chunk(value, 10).join('\n');
    }
    else{
      aestheticKey = "You have no keys associated";
    }
    return aestheticKey;
  }


  chunk(str, n) {
      var ret = [];
      var i;
      var len;

      for(i = 0, len = str.length; i < len; i += n) {
         ret.push(str.substr(i, n))
      }

      return ret
  };
}
