import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent{
  counter : number = 1;
  counterSignal = signal(10);

  IncreaseBy(value:number){
    this.counter += value;
    this.counterSignal.update((current)=> current + value);
  }

  DecreaseBy(value:number){
    this.counter -= value;
    this.counterSignal.update((current)=> current - value);
  }

  ResetCounter(){
    this.counter = 1;
    this.counterSignal.set(10);
  }


}
