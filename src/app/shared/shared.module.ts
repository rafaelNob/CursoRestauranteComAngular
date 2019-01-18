import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  declarations: [ InputComponent,RadioComponent,RatingComponent],
  exports:[CommonModule,FormsModule,ReactiveFormsModule
          ,InputComponent,RadioComponent,RatingComponent]
})
export class SharedModule { }
