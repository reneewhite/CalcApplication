import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
value = 0;
value2= 0;
  constructor(public navCtrl: NavController) {

  }

  onClick(){
    this.value += 3;
    
  }
  onClick1(){
    this.value += 2;
    
  }
  onClick2(){
    this.value += 1;
    
  }
  onClick3(){
    
    
    if(this.value)
    {
      this.value = 0;
    }else if(this.value2){
      this.value2 = 0;
    }
  }

  onClick4(){
    this.value2 += 3;
    
  }
  onClick5(){
    this.value2 += 2;
    
  }
  onClick6(){
    this.value2 += 1;
    
  }
 


}
