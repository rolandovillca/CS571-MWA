import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';
import { Team, Member } from '../models/team-module';

@Component({
  selector: 'app-get-team',
  templateUrl: './get-team.component.html',
  styleUrls: ['./get-team.component.css']
})
export class GetTeamComponent implements OnInit {

  team: Team = {} as Team;
  // members: Member[] = [];

  constructor(private _teamsService: TeamsService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const teamId = this._route.snapshot.params["teamId"];
    this._teamsService
      .getTeamById(teamId)
      .subscribe((result) => {
        this.team = result;
        // this.members = result.members;
      });
  }

  onSubmit(form: NgForm) { 
    console.log("...");
  }
}
