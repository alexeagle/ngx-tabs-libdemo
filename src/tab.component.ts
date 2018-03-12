import { Component, Input } from '@angular/core';

export type GoodTitle = 'one' | 'two';
@Component({
  selector: 'ngx-tab',
  styles: [
    `
    .pane{
      padding: 1em;
    }
  `
  ],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() tabTitle: GoodTitle;
  @Input() active = false;
}
