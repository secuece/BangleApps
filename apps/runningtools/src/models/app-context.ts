import { ActivityState } from '../constants/activity-state';
import { ScreenType } from '../constants/screen-type';
import { GpsResponse } from './gps-response';
import { RunningDataType } from '../constants/running-data-type';

export class AppContext {

     private _lastUpdatedTime: number;

     //Running screen
     private _runningScreenData: RunningDataType;

     private _steps: number;
     private _heart: number;
     private _speed: number;
     private _calories: number;

     private _totalDistance: number;
     private _totalSpeed: number;
     private _totalIncrements: number;
     private _totalDuration: number;

     private _kilometerSpeed: number;
     private _kilometerDistance: number;
     private _kilometerIncrements: number;
     private _kilometerDuration: number;

     private _partialKilometerSpeed: number;
     private _partialKilometerDuration: number;
     // END Running screen


     private _stateGps: boolean;
     private _satellites: number;

     private _currentGpsData: GpsResponse;
     private _previousGpsData: GpsResponse;

     private _screenType: ScreenType;

     private _activityState: ActivityState;
     private _forceResetActivity: boolean;

     private static _instance: AppContext;

     private constructor() {

          this._runningScreenData = RunningDataType.Totals;

          this._steps = 0;
          this._heart = 0;
          this._speed = 0;

          this._totalDistance = 0;
          this._totalSpeed = 0;
          this._totalIncrements = 0;
          this._totalDuration = 0;

          this._kilometerSpeed = 0;
          this._kilometerDistance = 0;
          this._kilometerIncrements = 0;
          this._kilometerDuration = 0;

          this._partialKilometerSpeed = 0;
          this._partialKilometerDuration = 0;

          this._screenType = ScreenType.Running;

          this._currentGpsData = null;
          this._previousGpsData = null;

          this._stateGps = false;
          this._satellites = 0;

          this._activityState = 0;
          this._forceResetActivity = false;
     }



     public resetRunnigActivity() {

          this.runningScreenData = RunningDataType.Totals;

          this.steps = 0;
          this.heart = 0;
          this.speed = 0;

          this.totalDistance = 0;
          this.totalSpeed = 0;
          this.totalIncrements = 0;
          this.totalDuration = 0;

          this.kilometerSpeed = 0;
          this.kilometerDistance = 0;
          this.kilometerIncrements = 0;
          this.kilometerDuration = 0;

          this.partialKilometerSpeed = 0;
          this.partialKilometerDuration = 0;

          this.activityState = ActivityState.Stop;
          this.forceResetActivity = false;
     }


     public static getInstance(): AppContext {
          if (!AppContext._instance) {
               AppContext._instance = new AppContext();
          }

          return AppContext._instance;
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

     get speed(): number {
          return this._speed;
     }

     set speed(speed: number) {
          this._speed = speed;
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

     get currentGpsData(): GpsResponse {
          return this._currentGpsData;
     }

     set currentGpsData(currentGpsData: GpsResponse) {
          this._currentGpsData = currentGpsData;
     }

     get previousGpsData(): GpsResponse {
          return this._previousGpsData;
     }

     set previousGpsData(previousGpsData: GpsResponse) {
          this._previousGpsData = previousGpsData;
     }

     get satellites(): number {
          return this._satellites;
     }

     set satellites(satellites: number) {
          this._satellites = satellites;
     }

     get totalIncrements(): number {
          return this._totalIncrements;
     }

     set totalIncrements(totalIncrements: number) {
          this._totalIncrements = totalIncrements;
     }

     get kilometerIncrements(): number {
          return this._kilometerIncrements;
     }

     set kilometerIncrements(kilometerIncrements: number) {
          this._kilometerIncrements = kilometerIncrements;
     }

     get kilometerSpeed(): number {
          return this._kilometerSpeed;
     }

     set kilometerSpeed(kilometerSpeed: number) {
          this._kilometerSpeed = kilometerSpeed;
     }

     get kilometerDistance(): number {
          return this._kilometerDistance;
     }

     set kilometerDistance(kilometerDistance: number) {
          this._kilometerDistance = kilometerDistance;
     }

     get totalDistance(): number {
          return this._totalDistance;
     }

     set totalDistance(totalDistance: number) {
          this._totalDistance = totalDistance;
     }

     get totalSpeed(): number {
          return this._totalSpeed;
     }

     set totalSpeed(totalSpeed: number) {
          this._totalSpeed = totalSpeed;
     }

     get lastUpdatedTime(): number {
          return this._lastUpdatedTime;
     }

     set lastUpdatedTime(lastUpdatedTime: number) {
          this._lastUpdatedTime = lastUpdatedTime;
     }

     get partialKilometerSpeed(): number {
          return this._partialKilometerSpeed;
     }

     set partialKilometerSpeed(partialKilometerSpeed: number) {
          this._partialKilometerSpeed = partialKilometerSpeed;
     }

     get totalDuration(): number {
          return this._totalDuration;
     }

     set totalDuration(totalDuration: number) {
          this._totalDuration = totalDuration;
     }

     get kilometerDuration(): number {
          return this._kilometerDuration;
     }

     set kilometerDuration(kilometerDuration: number) {
          this._kilometerDuration = kilometerDuration;
     }

     get partialKilometerDuration(): number {
          return this._partialKilometerDuration;
     }

     set partialKilometerDuration(partialKilometerDuration: number) {
          this._partialKilometerDuration = partialKilometerDuration;
     }

     get runningScreenData(): RunningDataType {
          return this._runningScreenData;
     }

     set runningScreenData(runningScreenData: RunningDataType) {
          this._runningScreenData = runningScreenData;
     }


}