import { Component } from '@angular/core';
import {
  ParagraphBuilder,
  RegisterView,
  UiElement,
  Generator,
} from 'angular-ui-generator';

@Component({
  selector: 'home-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [Generator],
})
@RegisterView({
  name: 'home',
  children: [],
})
export class HomeView {
  uiElements: UiElement[] = [ParagraphBuilder.build('Hello World!')];
}
