import { ActivityStatus } from '../constants/activity-status';

class AppState {

     steps: number;
     heart: number;
     distance: number;
     duration: number;
     speed: number;
     min: number;
     activityStatus: ActivityStatus;
     forceResetActivity: boolean;
     stateGps: boolean;
     gpsFixNumber: number;

     constructor() {
          this.stateGps = false;
          this.resetActivity();
     }


     resetActivity() {
          this.steps = 0;
          this.heart = 0;
          this.distance = 0;
          this.duration = 0;
          this.speed = 0;
          this.min = 0;
          this.activityStatus = 0;
          this.forceResetActivity = false;
          this.stateGps = false;
          this.gpsFixNumber = 0;
     }


}


export { AppState };