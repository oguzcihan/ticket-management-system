import {NgIf} from '@angular/common';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {RadioButtonModule} from 'primeng/radiobutton';
import {Ripple} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';
import {DockModule} from "primeng/dock";
import {EditorModule} from "primeng/editor";


export const sharedImports = [
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
  NgIf,
  DropdownModule,
  DockModule,
  EditorModule
];
