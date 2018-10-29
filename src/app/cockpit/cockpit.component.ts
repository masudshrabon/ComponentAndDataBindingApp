import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    newServerName = '';
    newServerContent = '';
    /**
     * Make this event (event property) LISTENABLE from outside.
     * Pass event (+ event data by $event) from CHILD to PARENT Component.
    */
    @Output()
    serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
    @Output()
    blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();

    constructor() { }

    ngOnInit() {
    }

    onAddServer() {
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
        this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    }

    onAddBlueprint() {
        this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    }
}
