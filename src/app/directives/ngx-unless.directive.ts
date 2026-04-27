import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
  exportAs: 'ngxUnless'
})
export class NgxUnlessDirective {
  visible = false;
  constructor(private element: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {}

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.element);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
