import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {WebService} from './shared/WebService';
import {ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [
    WebService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
