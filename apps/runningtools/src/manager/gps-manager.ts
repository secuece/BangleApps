import { GpsResponse } from "../models/gps-response";
import { AppContext } from "../models/app-context";
import { ScreenManager } from "./screen/screen-manager";
import { ActivityState } from "../constants/activity-state";
import { BangleJSManager } from "./banglejs-manager";

export class GPSManager {

     public static processGPSResponse(gpsResponse: GpsResponse) {


          if (!AppContext.getInstance().stateGps && gpsResponse.fix) {
               BangleJSManager.Bangle().beep();
               BangleJSManager.Bangle().buzz()
               AppContext.getInstance().stateGps = true;
          }


          //Check only if state is active, for example: PLAYSTATE, STOPPED STATE
          if ( gpsResponse.fix && AppContext.getInstance().activityState == ActivityState.Run && AppContext.getInstance().previousGpsData ) {

               const currentTime = Date.now();
               const durationIncrement = (currentTime - AppContext.getInstance().lastUpdatedTime) / 1000;

               AppContext.getInstance().lastUpdatedTime = currentTime;


               AppContext.getInstance().previousGpsData = AppContext.getInstance().currentGpsData;
               AppContext.getInstance().currentGpsData = gpsResponse;

               AppContext.getInstance().speed = AppContext.getInstance().currentGpsData.speed;


               const distanceIncrement: number = GPSManager.distanceInKmBetweenEarthCoordinates(AppContext.getInstance().previousGpsData.lat, AppContext.getInstance().previousGpsData.lon, AppContext.getInstance().currentGpsData.lat, AppContext.getInstance().currentGpsData.lon);

               //Update total values
               AppContext.getInstance().totalIncrements++;
               AppContext.getInstance().totalDistance += distanceIncrement;
               AppContext.getInstance().totalSpeed += AppContext.getInstance().currentGpsData.speed;
               AppContext.getInstance().totalDuration += durationIncrement;

               //Update kilometer values
               AppContext.getInstance().kilometerIncrements++;
               AppContext.getInstance().kilometerDistance += distanceIncrement;
               AppContext.getInstance().kilometerSpeed += AppContext.getInstance().currentGpsData.speed;
               AppContext.getInstance().kilometerDuration += durationIncrement;

               if ( AppContext.getInstance().kilometerDistance > 1 ) {

                    AppContext.getInstance().partialKilometerSpeed = AppContext.getInstance().kilometerSpeed / AppContext.getInstance().kilometerIncrements;
                    AppContext.getInstance().partialKilometerDuration = AppContext.getInstance().kilometerDuration;

                    AppContext.getInstance().kilometerDuration = 0;
                    AppContext.getInstance().kilometerSpeed = 0;
                    AppContext.getInstance().kilometerDistance = 0;
                    AppContext.getInstance().kilometerIncrements = 0;

               }

          }

          ScreenManager.drawScreen();

     }



     public static convertDegreesToRadians(degrees: number): number {
          return degrees * Math.PI / 180;
     }

     public static distanceInKmBetweenEarthCoordinates(lat1: number, lon1: number, lat2: number, lon2: number) {
          const earthRadiusKm = 6371.0088;

          const dLat = GPSManager.convertDegreesToRadians(lat2 - lat1);
          const dLon = GPSManager.convertDegreesToRadians(lon2 - lon1);

          lat1 = GPSManager.convertDegreesToRadians(lat1);
          lat2 = GPSManager.convertDegreesToRadians(lat2);

          const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

          return earthRadiusKm * c;
     }

}