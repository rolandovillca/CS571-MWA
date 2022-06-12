import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    console.log("Subscribing All Teams");
    this._teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  deleteTeam(team:Team) {
    this._teamsService.deleteTeamById(team._id).subscribe((resp) => {
      console.log(resp);
    }, (err) => {
      console.log(err);
    });
  }

  edit() {
    
  }
}
