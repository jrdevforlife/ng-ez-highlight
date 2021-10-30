import { NgModule } from '@angular/core';
import { EzHighlightComponent } from './ez-highlight.component';
import { EzHighlightDirective } from './ez-highlight.directive';

@NgModule({
  declarations: [EzHighlightComponent, EzHighlightDirective],
  imports: [],
  exports: [EzHighlightComponent],
})
export class EzHighlightModule {}
