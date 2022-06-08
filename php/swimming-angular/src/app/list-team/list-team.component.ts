import { Component, OnInit } from '@angular/core';
import { Team, TeamsService } from '../teams.service';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {

  teams: Team[] = [];

  constructor(private _teamsService: TeamsService) { }

  ngOnInit(): void {
    console.log("Subscribing ALL");
    this._teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

}
