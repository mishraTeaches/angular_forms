import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveFormProjectComponent } from './reactive-form-project/reactive-form-project.component';
import { ReactiveFormProject2Component } from './reactive-form-project2/reactive-form-project2.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedrivenComponent,
    ReactiveFormProjectComponent,
    ReactiveFormProject2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
