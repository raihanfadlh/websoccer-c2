import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// INTERFACE
import { Team } from 'src/interface/team';
import { Ranking } from 'src/interface/rangkings';
import { Schedule } from 'src/interface/schedule';
import { SoccerService } from '../service/SoccerService';


@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  public LeagueName:string;
  public UsingAsync:boolean = false;
  public Myteam: Team[];
  public MySchedule : Schedule[];
  public Standings: Ranking[];

  constructor(private _titleService :Title,private _soccerService:SoccerService) {
    this._titleService.setTitle('c2 Sports')
    this.LeagueName = "wow League";
    this.Myteam=[];
    this.Standings=[];
    this.MySchedule=[];
    this.getTeams();
    this.getSchedule();
    this.computerRankings();
  }
  ngOnInit(): void {
  }
  getTeams(){
    if(this.UsingAsync){
      let xx = this._soccerService.getAllTeamsAsync();
        xx.then((Teams:Team[])=>this.Myteam = Teams)
    }
    else{
      this.Myteam = this._soccerService.getAllTeams();
    }
  }
private getSchedule(){
  if (this.UsingAsync){
    let xx = this._soccerService.getSchedulueAsync();
      xx.then((Schedules:Schedule[])=> this.MySchedule = Schedules);
  }else{
    this.MySchedule = this._soccerService.getSchedule();
  }
}
public computerRankings(){
  var curDate : Date= new Date();
  var TeamAT : number;
  this.Standings= [];
  this.MySchedule.forEach(element => {
    //jika game telah dimainkan
    if(element.Playingdate< curDate && element.HomeScore>=0){
      TeamAT= this.FindTeam(element.HomeTeam);
      if(TeamAT <0){
        this.Standings.push({
          TeamName:element.HomeTeam,
          GamesPLayed:0,Wins:0,Ties:0,
          Goalsfor:0,GoalsAgaints:0
        })
        TeamAT = this.Standings.length-1;
      }
      this.UpdCurrentArrow(element,TeamAT,'H');

    }
  });;
}

private UpdCurrentArrow(element:Schedule,TeamAT:number,HomeAway:string){
  this.Standings[TeamAT].GamesPLayed++;
  if(HomeAway=='H'){
    this.Standings[TeamAT].Goalsfor+= element.HomeScore;
    this.Standings[TeamAT].GoalsAgaints+= element.AwayScore;
    if(element.HomeScore>element.AwayScore){
      this.Standings[TeamAT].Wins++;
    }
  }
  if (HomeAway=='A'){
    this.Standings[TeamAT].Goalsfor += element.AwayScore;
    this.Standings[TeamAT].GoalsAgaints += element.HomeScore;
    if(element.HomeScore==element.HomeScore){
      this.Standings[TeamAT].Ties++;
    }
  }
  if(element.HomeScore==element.AwayScore){
    this.Standings[TeamAT].Ties++;
  }
}
private FindTeam(TeamName:string):number{
  var FoundAT: number = -1;
  for(var _x=0; _x<this.Standings.length; _x++){
    if(this.Standings[_x].TeamName==TeamName){
      return _x;
    }
  }
    return FoundAT;
  }
}
