import { Component } from '@angular/core';
import {
  ParagraphBuilder,
  AugRegisterView,
  UiElement,
  Generator,
} from 'angular-ui-generator';

@Component({
  selector: 'page-not-found-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [Generator],
})
@AugRegisterView({
  name: 'page-not-found',
  children: [],
  route: {
    title: 'Page not found',
    path: '**',
  },
})
export class PageNotFoundView {
  uiElements: UiElement[] = [ParagraphBuilder.build('Page not found works!')];
}
