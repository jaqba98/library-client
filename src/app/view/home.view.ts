import { Component } from '@angular/core';
import {
  ParagraphBuilder,
  AugRegisterView,
  UiElement,
  Generator,
} from 'angular-ui-generator';

@Component({
  selector: 'home-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [Generator],
})
@AugRegisterView({
  name: 'home',
  children: [],
  route: {
    title: 'Home',
    path: 'home',
  },
})
export class HomeView {
  uiElements: UiElement[] = [ParagraphBuilder.build('Home works!')];
}
