import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this._router.navigate(['teams/list']);
  }
}
