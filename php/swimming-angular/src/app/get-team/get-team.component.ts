import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team, TeamsService } from '../teams.service';

@Component({
  selector: 'app-get-team',
  templateUrl: './get-team.component.html',
  styleUrls: ['./get-team.component.css']
})
export class GetTeamComponent implements OnInit {

  team:Team = {} as Team;

  constructor(private _teamsService:TeamsService,
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
    const teamId = this._route.snapshot.params["teamId"];
    this._teamsService
      .getTeamById(teamId)
      .subscribe((result) => {
        this.team = result;
      });
  }
}
