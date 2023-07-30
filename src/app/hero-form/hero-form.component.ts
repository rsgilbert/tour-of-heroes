import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']
    model = new Hero(18, '', 'Super Hot', 'Chameleone')
    submitted = true 

    onSubmit() { 
        this.submitted = true 
    }

    newHero() {
        this.model = new Hero(42, '', '')
    }

}
