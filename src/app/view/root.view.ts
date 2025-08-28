import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugViewGenerator,
  AugViewMetadata,
} from 'angular-ui-generator';

@Component({
  selector: 'root-view',
  template: '',
})
@AugRegisterView({
  name: 'root',
  children: [],
})
@AugRegisterRoute({
  path: '',
  redirectTo: 'home',
})
export class RootView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [];
  }
}
