export interface Schedule{
    id          :number,
    Playingdate : Date,
    HomeTeam    : string,
    AwayTeam    : string,
    HomeScore   : number,
    AwayScore   : number,
    RefName     : string,
    notes?      : string
}
