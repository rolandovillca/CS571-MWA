import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamsService } from '../teams.service';
import { Team } from '../teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  title = "Teams Dashboard";
  teamsDetails: Team[] = [];

  constructor(private _teamsService: TeamsService) {
    this.getTeamsDetails();
  }

  ngOnInit(): void {
  }

  addTeam(addTeamForm: NgForm) {
    return this._teamsService.addTeam(addTeamForm.value).subscribe(
      (resp) => {
        console.log(resp);
        addTeamForm.reset();
        this.getTeamsDetails();
      }, (err) => {
        console.log(err);
      }
    );
  }

  getTeamsDetails() {
    this._teamsService.getTeams().subscribe((data) => {
      console.log(data);
      this.teamsDetails = data;
    },
      (err) => {
        console.log(err);
      });
  }
}
