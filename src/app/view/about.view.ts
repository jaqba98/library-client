import { Component } from '@angular/core';
import {
  ParagraphBuilder,
  AugRegisterView,
  UiElement,
  Generator,
} from 'angular-ui-generator';

@Component({
  selector: 'about-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [Generator],
})
@AugRegisterView({
  name: 'about',
  children: [],
  route: {
    title: 'About',
    path: 'about',
  },
})
export class AboutView {
  uiElements: UiElement[] = [ParagraphBuilder.build('About works!')];
}
