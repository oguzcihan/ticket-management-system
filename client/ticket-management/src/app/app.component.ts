import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from "./core/sidebar/sidebar.component";
import {HttpClientModule} from "@angular/common/http";
import { NgIf } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Ripple } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, SidebarComponent, HttpClientModule,
    ToastModule,
        ToolbarModule,
        FileUploadModule,
        TableModule,
        DialogModule,
        RadioButtonModule,
        PaginatorModule,
        ConfirmDialogModule,
        Ripple,
        InputTextModule,
        NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ticket-management';
}
