import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']
    model = new Hero(18, 'Dr. Jane', this.powers[0], 'Chameleone')
    submitted = false 

    onSubmit() { 
        this.submitted = true 
    }

}
