import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import {NgbModule} from '../node_modules/bootstrap/bootstrap';*/
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FileExplorerModule } from './file-explorer/file-explorer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FileService } from './service/file.service';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileExplorerModule, FlexLayoutModule, MatCardModule,
    AppRoutingModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
