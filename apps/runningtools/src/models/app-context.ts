import { ActivityState } from '../constants/activity-state';
import { ScreenType } from '../constants/screen-type';

export class AppContext {

     private _steps: number;
     private _heart: number;
     private _distance: number;
     private _duration: number;
     private _speed: number;
     private _minutes: number;
     private _calories: number;

     private _stateGps: boolean;
     private _lat: number;
     private _lon: number;
     private _alt: number;
     private _satellites: number;

     private _screenType: ScreenType;

     private _activityState: ActivityState;
     private _forceResetActivity: boolean;



     constructor() {
          this._steps = 0;
          this._heart = 0;
          this._distance = 0;
          this._duration = 0;
          this._speed = 0;
          this._minutes = 0;

          this._screenType = ScreenType.Running;

          this._stateGps = false;
          this._lat = 0;
          this._lon = 0;
          this._alt = 0;
          this._satellites = 0;

          this._activityState = 0;
          this._forceResetActivity = false;
     }


     get steps(): number {
          return this._steps;
     }

     set steps(steps: number) {
          this._steps = steps;
     }

     get heart(): number {
          return this._heart;
     }

     set heart(heart: number) {
          this._heart = heart;
     }

     get distance(): number {
          return this._distance;
     }

     set distance(distance: number) {
          this._distance = distance;
     }

     get duration(): number {
          return this._duration;
     }

     set duration(duration: number) {
          this._duration = duration;
     }

     get speed(): number {
          return this._speed;
     }

     set speed(speed: number) {
          this._speed = speed;
     }

     get minutes(): number {
          return this._minutes;
     }

     set minutes(minutes: number) {
          this._minutes = minutes;
     }

     get calories(): number {
          return this._calories;
     }

     set calories(calories: number) {
          this._calories = calories;
     }

     get screenType(): ScreenType {
          return this._screenType;
     }

     set screenType(screenType: ScreenType) {
          this._screenType = screenType;
     }

     get stateGps(): boolean {
          return this._stateGps;
     }

     set stateGps(stateGps: boolean) {
          this._stateGps = stateGps;
     }

     get activityState(): ActivityState {
          return this._activityState;
     }

     set activityState(activityState: ActivityState) {
          this._activityState = activityState;
     }

     get forceResetActivity(): boolean {
          return this._forceResetActivity;
     }

     set forceResetActivity(forceResetActivity: boolean) {
          this._forceResetActivity = forceResetActivity;
     }

     get lat(): number {
          return this._lat;
     }

     set lat(lat: number) {
          this._lat = lat;
     }

     get lon(): number {
          return this._lon;
     }

     set lon(lon: number) {
          this._lon = lon;
     }

     get alt(): number {
          return this._alt;
     }

     set alt(alt: number) {
          this._alt = alt;
     }

     get satellites(): number {
          return this._satellites;
     }

     set satellites(satellites: number) {
          this._satellites = satellites;
     }


}