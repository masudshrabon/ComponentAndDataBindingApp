import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
    /** Book concept: @Input() decorator exposes the property 'element' to its parent. 
    * My obsrvation: @Input() propertyName: behaves like 'parameter' of a function.
    * Parent component passes data to this child component as like parameter through
    * this propertyName (element).
    * Example: app.component.html (Parent):
    * <app-server-element 
    *      *ngFor="let serverElement of serverElements"
    *      [element]="serverElement">
    * </app-server-element>
    */
    @Input()
    element: {name: string, type: string, content: string};

    constructor() { }

    ngOnInit() {
    }

}
