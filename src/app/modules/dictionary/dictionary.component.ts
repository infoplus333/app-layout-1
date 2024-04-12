import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChipsModule } from 'primeng/chips';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [CheckboxModule, ButtonModule, TableModule, IconFieldModule, InputIconModule, AngularSvgIconModule, ChipsModule, FormsModule, DropdownModule, MultiSelectModule, FormsModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {
  values: string[] | undefined;
  checked: boolean = false;
  cities!: City[];

  selectedCities!: City[];

  ngOnInit() {
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }
}
