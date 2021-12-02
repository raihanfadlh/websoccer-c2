import { Schedule } from "src/interface/schedule";
import { Team } from "src/interface/team";

export const SEASON_SCHEDULE:Schedule [] = [
    {id: 1, Playingdate: new Date(2021,8,10),HomeTeam: 'persija',
    AwayTeam: 'persib',HomeScore:3, AwayScore:4,
    RefName:'Joko',notes:'Pertandingan overtime'},
    {id: 2, Playingdate: new Date(2021,8,11),HomeTeam: 'persipon',
    AwayTeam: 'RRQ',HomeScore:3 , AwayScore:0,
    RefName: 'Sukasjo',notes:'Pertandingan melelahkan'},
    {id: 3, Playingdate: new Date(2021,8,12),HomeTeam: 'Evos',
    AwayTeam: 'Persis solo',HomeScore:2 , AwayScore:0,
    RefName: 'Sukasjo',notes:'Pertandingannya agak aneh'},
    {id: 4, Playingdate: new Date(2021,8,13),HomeTeam: 'persipon',
    AwayTeam: 'Persija',HomeScore:3 , AwayScore:0,
    RefName: 'Sukasjo',notes:'Pertandingan dimenangkan persipon'},
    {id: 5, Playingdate: new Date(2021,8,14),HomeTeam: 'MU',
    AwayTeam: 'Real Madrid',HomeScore:2 , AwayScore:4,
    RefName: 'Taufik',notes:'Pertandingan overtime'},
]

export const TEAMS: Team [] = [
    {id:1, name:'Evos', type: 'Over 30'},
    {id:2, name:'persib', type: 'Over 30'},
    {id:3, name:'persija', type: 'Over 30'},
    {id:4, name:'persipon', type: 'Over 30'},
    {id:5, name:'Bali United', type: 'Over 30'},
]
