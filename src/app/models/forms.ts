export class forms
{
    id?:number;
    name?:String;
    type?:String;
    multidata?:Multidata[] = [];
    multirow?:Multidata[] = [];
    multicolumn?:Multidata[] = [];
    choices?:[] = [];
    columns?:[] = [];
    rows?:[] = [];
}
export class Multidata
{
    multiTitle?: any;
    multiColumn?: any;
    multiRow?: any;
}