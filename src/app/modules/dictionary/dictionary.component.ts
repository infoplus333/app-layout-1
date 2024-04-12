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


@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [CheckboxModule, ButtonModule, TableModule, IconFieldModule, InputIconModule, AngularSvgIconModule, ChipsModule, FormsModule, DropdownModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {
  values: string[] | undefined;
  checked: boolean = false;

}
