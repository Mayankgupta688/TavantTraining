import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: "[applyColor]"
})
export class ColorDirective {

    @Input() applyColor: string = "";

   constructor(private _element: ElementRef) {
       debugger;
       this._element.nativeElement.style.color = "green";
       this._element.nativeElement.style.border = "1px solid red";
       this._element.nativeElement.style.padding = "5px";
   }
}