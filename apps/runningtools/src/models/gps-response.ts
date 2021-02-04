export class GpsResponse {

     private _lat: number;
     private _lon: number;
     private _alt: number;
     private _speed: number;
     private _course: number;
     private _time: number;
     private _satellites: number;
     private _fix: number;


     constructor(lat: number, lon: number, alt: number, speed: number, course: number, time: number, satellites: number, fix: number) {
          this._lat = lat;
          this._lon = lon;
          this._alt = alt;
          this._speed = speed;
          this._course = course;
          this._time = time;
          this._satellites = satellites;
          this._fix = fix;
     }

     get lat(): number {
          return this._lat;
     }

     get lon(): number {
          return this._lon;
     }

     get alt(): number {
          return this._alt;
     }

     get speed(): number {
          return this._speed;
     }

     get course(): number {
          return this._course;
     }

     get time(): number {
          return this._time;
     }

     get satellites(): number {
          return this._satellites;
     }

     get fix(): number {
          return this._fix;
     }

}