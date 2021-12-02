import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE,TEAMS } from "./ScheduleData";

@Injectable(
  {providedIn: 'root'}
)
export class SoccerService{

    getSchedulueAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }
    getSchedule(){
        return SEASON_SCHEDULE;
    }
    getAllTeamsAsync(){
        return Promise.resolve(TEAMS)
    }
    getAllTeams(){
        return TEAMS;
    }
}
