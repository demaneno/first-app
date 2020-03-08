import { Component, NgModule } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'First-App';
  log : number = 10;  
  value : number;
  getal : number;
  rand: number = randomIntFromInterval(1,100);
  showLog = false;

  CounterService(){ }

  onSetTimer(){
    return this.CounterService();
  }
    
  onSubmit(){    
    if(this.value >0 ){
      this.onShowLog();
      this.onSetValue();
      this.onRefreshPage();
      return this.value;
    }    
  }

  onSetCounter(){
      if(this.rand<1){
        this.rand = randomIntFromInterval(1,100);
      }
      return this.rand;
  }

  onSetValue(){
    this.getal = this.value;
    return this.getal;
  }

  onShowLog(){
    this.showLog = true;
    return this.log = this.log - 1;
  }

  onRefreshPage(){
    if(this.getal == this.rand || this.log ==0){
      setTimeout(
        function refreshPage(){
          location.reload();
      },500);
    }
}

    

}
