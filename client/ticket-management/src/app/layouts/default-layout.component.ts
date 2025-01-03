import { Component } from '@angular/core';
import {SidebarComponent} from "../core/sidebar/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  template: `
    <div class="wrapper">
      <app-sidebar></app-sidebar>
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class DefaultLayoutComponent {

}
