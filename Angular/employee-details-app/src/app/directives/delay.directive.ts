import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[delayRendering]"
})
export class DelayDirective {

    @Input() delayRendering: number = 0;

    constructor(private _containerRef: ViewContainerRef, private _template: TemplateRef<ElementRef>) { }

    ngOnInit() {
        setTimeout(() => {
            this._containerRef.createEmbeddedView(this._template)
        }, this.delayRendering)
    }
}