import { GpsResponse } from "../models/gps-response";
import { AppContext } from "../models/app-context";

export class GPSManager {

     public static processGPSResponse(appContext: AppContext, gpsResponse: GpsResponse) {

          if ( gpsResponse.fix ) {
               appContext.stateGps = true;
          }

          appContext.speed = gpsResponse.speed;
          appContext.lat = gpsResponse.lat;
          appContext.lon = gpsResponse.lon;
          appContext.alt = gpsResponse.alt;
          appContext.satellites = gpsResponse.satellites;


     }

}