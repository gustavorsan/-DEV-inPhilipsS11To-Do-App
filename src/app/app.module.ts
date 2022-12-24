import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoAppComponent } from './pages/to-do-app/to-do-app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './pages/to-do-app/components/input/input.component';
import { NavComponent } from './pages/to-do-app/components/nav/nav.component';
import { TaskComponent } from './pages/to-do-app/components/task/task.component';
import { ToDoListComponent } from './pages/to-do-app/components/to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoAppComponent,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    NavComponent,
    TaskComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
