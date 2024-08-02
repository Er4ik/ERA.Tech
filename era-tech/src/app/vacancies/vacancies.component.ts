import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent {
  @Input()
  activeTab: string = '';
  isBurgerActive = false;
  showReadMore: boolean = false;
  isCollapsed: boolean = true;
  vacancies = [
    {
      title: 'Fullstack Web Developer',
      location: 'Remote',
      time: 'Fulltime',
      department: 'Development',
    },
    {
      title: 'Fullstack Web Developer',
      location: 'Remote',
      time: 'Fulltime',
      department: 'Development',
    },
    {
      title: 'Fullstack Web Developer',
      location: 'Remote',
      time: 'Part-time',
      department: 'Development',
    }
  ]

  openDescription(): void {
    this.showReadMore = true;
  }

  closeDescription(): void {

  }
}
