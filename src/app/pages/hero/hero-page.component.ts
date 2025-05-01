import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";
import { single } from "rxjs";



@Component({
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  imports:[UpperCasePipe],
})
export class HeroPageComponent{

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(()=>{
    return `${this.name()} - ${this.age()}`
  })

  computalizedName = computed( ()=> this.name().toUpperCase() );

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  chageAge(){
    this.age.update((current)=>60);
  }

}
