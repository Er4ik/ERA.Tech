import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  activeTab: string = '';

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  setTab(tab: string) {
    const baseRoute = 'home';
    this.activeTab = tab !== baseRoute ? tab : '';
  }

  prepareRoute(outlet: RouterOutlet) {
    this.setTab(outlet.activatedRouteData['animationState']);

    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }
}