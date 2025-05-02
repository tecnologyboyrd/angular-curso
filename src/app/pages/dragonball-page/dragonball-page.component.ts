import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";

interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  name = signal('Goham');
  power= signal(100);


addCharacter() {
  // console.log('Name: ', this.name(), 'Power: ', this.power());
  if(!this.name() || !this.power() || this.power() <=0){
    return;
  }

  const newCharacter:Character={
    id: this.character.length +1,
    name: this.name(),
    power: this.power(),
  }

  this.character.update((list)=> [...list, newCharacter]);
  this.resetFields();

}

resetFields(){
  this.name.set('');
  this.power.set(0);
}




  character = signal<Character[]>([
    {id:1, name:'Goku', power:9001},
    {id:2, name:'Pikoro', power:8000},
    {id:3, name:'Crilim', power:3000},
    {id:4, name:'Maestro Rochy', power:500}
  ]);
}
