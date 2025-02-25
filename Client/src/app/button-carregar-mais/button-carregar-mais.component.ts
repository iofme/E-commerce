import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-carregar-mais',
  imports: [NgIf],
  templateUrl: './button-carregar-mais.component.html',
  styleUrl: './button-carregar-mais.component.css'
})
export class ButtonCarregarMaisComponent {
@Input() maisItems: boolean = false
}
