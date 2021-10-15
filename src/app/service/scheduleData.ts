import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";


export const SEASON_SCHEDULE:Schedule[] = [
    {id:1,playingDate:new Date(2021,08,10),HomeTeam: 'Alter Ego',AwayTeam: 'Evos',HomeScore:2,AwayScore:0,RefName: 'Nur Faisal',notes: 'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,08,11),HomeTeam: 'RRQ',AwayTeam: 'Aura',HomeScore:2,AwayScore:1,RefName: 'Ranger Emas',notes: 'Aura tereliminasi'},
    {id:3,playingDate:new Date(2021,08,11),HomeTeam: 'Onic',AwayTeam: 'BTR',HomeScore:1,AwayScore:2,RefName: 'REXVISN',notes: 'Rippo Taunting ke Kamera'},
    ]

export const TEAM:Team [] = [
        {id:1,name: 'Alter Ego',type: 'Over 30'},
        {id:2,name: 'Evos',type: 'Over 30'},
        {id:3,name: 'Aura',type: 'Over 30'},
        {id:4,name: 'RRQ',type: 'Over 30'},
        {id:5,name: 'BTR',type: 'Over 30'},
        {id:6,name: 'Onic',type: 'Over 30'},
        }
]