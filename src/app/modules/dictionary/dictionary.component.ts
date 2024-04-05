import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss'
})
export class DictionaryComponent {

}
