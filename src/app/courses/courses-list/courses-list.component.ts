import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit{

  @Input() courses: Course[] = [];

  readonly displayedColumns = ['_id','name', 'category','actions'];

  constructor(private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAdd(){

    this.router.navigate(['new'], {relativeTo: this.route});

  }

}
