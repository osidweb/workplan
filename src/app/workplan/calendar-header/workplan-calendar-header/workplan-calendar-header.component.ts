import { Component, OnInit, Input } from '@angular/core';
import { DayOfWeek } from 'src/app/common/interfaces/day-of-week';

@Component({
  selector: 'app-workplan-calendar-header',
  templateUrl: './workplan-calendar-header.component.html',
  styleUrls: ['./workplan-calendar-header.component.scss']
})
export class WorkplanCalendarHeaderComponent implements OnInit {
  @Input() daysInMonth: DayOfWeek[];

  constructor() { }

  ngOnInit() {
  }

  // проверка на выходной день
  dayOff(day: number): boolean {
    return (day === 0 || day === 6);
  }

  // проверка на воскресенье
  sunday(day: number): boolean {
    return day === 0;
  }

}
