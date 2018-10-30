import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  /** Accesss LocalRef #serverContentInput via @ViewChild decorator.
   * @ViewChild can be used to accesss a component, like - XyzComponent (initial level).
  */
  @ViewChild('serverContentInput')
  serverContentInput: ElementRef;
  /**
   * Make this event (event property) LISTENABLE from outside.
   * Pass event (+ event data by $event) from CHILD to PARENT Component.
   */
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output()
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    /**
     * Emit this serverCreated (custome) event, i.e., the event has been occured
     * just like the click (built-in) event.
     * When the event (serverCreated) occured (or emitted),
     * onServerAdded($event) will be executed as well as got the event data by $event.
     * Example: app.component.html
     * <app-cockpit (serverCreated) = "onServerAdded($event)"
     * (blueprintCreated) = "onBlueprintAdded($event)"
     * ></app-cockpit>
     */
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
