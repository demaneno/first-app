import { Component, NgModule } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CounterService} from '../common/services/counter.service'


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
  secondLocal: number = 60;

 constructor(counterService: CounterService){
   counterService.seconds.subscribe((seconds)=> {
    this.secondLocal = seconds;

    if(this.secondLocal <=0 ){
      this.onRefreshPage();
      }
   })
  }


  onSetTimer(){
    
  }
 
  onStart(){
    // 
    this.onSetTimer();

  }

  onSubmit(){    
    if(this.value >0 ){
      this.onShowLog();
      this.onSetValue();
      if(this.getal == this.rand || this.log ==0 || this.secondLocal <= 0){
      this.onRefreshPage();
      }
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
      setTimeout(
        function refreshPage(){
          location.reload();
      },2000);
}

    

}
