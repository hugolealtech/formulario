import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { trigger, transition, style, animate } from '@angular/animations';
import { DateComponent } from "../date/date.component"; // Importações necessárias para animação

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [MatInputModule, MatButtonModule, MatCardModule, DateComponent],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), // Começar invisível
        animate('500ms', style({ opacity: 1 })), // Animar até opacidade 1
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })), // Desaparecer com animação
      ]),
    ]),
  ],
})
export class FormComponent {}
