import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [SidebarComponent, NavbarComponent, RouterOutlet]
})
export class LayoutComponent {

}
