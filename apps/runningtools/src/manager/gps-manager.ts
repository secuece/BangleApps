import { GpsResponse } from "../models/gps-response";
import { AppContext } from "../models/app-context";
import { ScreenManager } from "./screen/screen-manager";
import { BangleJSManager } from "./banglejs-manager";

export class GPSManager {

     public static processGPSResponse(appContext: AppContext, gpsResponse: GpsResponse) {


          /*
          if ( gpsResponse.fix ) {
               appContext.stateGps = true;
          }

          appContext.speed = gpsResponse.speed;
          appContext.lat = gpsResponse.lat;
          appContext.lon = gpsResponse.lon;
          appContext.alt = gpsResponse.alt;
          appContext.satellites = gpsResponse.satellites;

          ScreenManager.drawScreen(appContext);
          */


          BangleJSManager.g().clear();
          BangleJSManager.g().setFontAlign(-1, -1);
          BangleJSManager.g().setFont("6x8");
          BangleJSManager.g().setFontVector(22);
          BangleJSManager.g().drawString("GPS Info", 70, 0);
          if (gpsResponse.fix) {
            var alt = gpsResponse.alt;
            var lat = gpsResponse.lat;
            var lon = gpsResponse.lon;
            var speed = gpsResponse.speed;
            var satellites = gpsResponse.satellites;
            var s = 15;
            BangleJSManager.g().setFontVector(s);
            BangleJSManager.g().drawString("Altitude: "+alt+" m",10,36);
            BangleJSManager.g().drawString("Lat: "+lat,10,54);
            BangleJSManager.g().drawString("Lon: "+lon,10,72);
            BangleJSManager.g().drawString("Speed: "+speed.toFixed(1)+" km/h",10,90);
            BangleJSManager.g().drawString("Satellites: "+satellites,10,126);
          } else {
            BangleJSManager.g().setFontAlign(0, 1);
            BangleJSManager.g().setFont("6x8", 2);
            BangleJSManager.g().drawString("Waiting for GPS", 120, 80);
            const nofix = Math.floor(Math.random() * (4 - 1 + 1) + 1);
            BangleJSManager.g().drawString(".".repeat(nofix) + " ".repeat(4-nofix), 120, 120);
            // Show number of satellites:
            BangleJSManager.g().setFontAlign(0,0);
            BangleJSManager.g().setFont("6x8");
            BangleJSManager.g().drawString(gpsResponse.satellites+" satellites", 120, 100);
          }
          BangleJSManager.g().flip();


     }

}