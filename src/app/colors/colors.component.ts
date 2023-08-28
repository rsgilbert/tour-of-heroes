import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
    favoriteColorControl= new FormControl('')
    favoriteColor = ''

    constructor(){
        this.favoriteColorControl.setValue('abc')
        this.favoriteColor = 'xyz'
    }
}
