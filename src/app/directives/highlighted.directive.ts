import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {
  @Input('highlighted')
  isHighlighted: boolean = false;

  constructor() { }

  @HostBinding('class.highlighted')
  get highlightedClass() {
    return this.isHighlighted;
  }
  @HostListener('mouseover')
  mouseover() {
    this.isHighlighted = true;
  }
  @HostListener('mouseleave')
  mouseleave() {
    this.isHighlighted = false;
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
  }
}
