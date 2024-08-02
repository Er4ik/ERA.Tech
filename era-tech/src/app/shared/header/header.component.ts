import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  activeTab: string = '';
  isBurgerActive = false;

  tabs = [
    {
      tab: '',
      text: 'Хто ми',
    },
    {
      tab: 'about',
      text: 'Про нас',
    },
    {
      tab: 'vacancies',
      text: "Кар'єра та розвиток",
    },
  ]

  constructor(private readonly router: Router) {}


  ngOnInit(): void {
    console.log(this.activeTab);
  }

  toggleMenu() {
    this.isBurgerActive = !this.isBurgerActive;
  }

  handleTab(tab: string) {
    this.activeTab = tab;
    this.router.navigateByUrl(`/${tab}`);
  }

  handleEvent(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('menu-item')) {
      this.isBurgerActive = false;
    }
  }
}
