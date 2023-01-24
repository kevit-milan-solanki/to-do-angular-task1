import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector:'[hover-class]'
})

export class HoverList {

  constructor(public element : ElementRef) {}

  // @ts-ignore
  @Input('hover-class') hoverclass:any;

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.children[0].classList.add(this.hoverclass);
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.children[0].classList.remove(this.hoverclass);
  }
}
