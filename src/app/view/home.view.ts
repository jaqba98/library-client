import { Component } from '@angular/core';
import {
  ParagraphBuilder,
  RegisterView,
  UiElement,
  ViewGenerator,
} from 'angular-ui-generator';

@Component({
  selector: 'home-view',
  template:
    '<lib-generator-api-view-generator [uiElements]="uiElements"></lib-generator-api-view-generator>',
  imports: [ViewGenerator],
})
@RegisterView({
  name: 'home',
  children: [],
})
export class HomeView {
  uiElements: UiElement[] = [ParagraphBuilder.build('Hello World!')];
}
