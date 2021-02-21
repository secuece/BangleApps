/*
import { AppContext } from './models/app-context';
import { BtnTypes } from './constants/btn-types';
import { ScreenManager } from './manager/screen/screen-manager';
import { GpsResponse } from './models/gps-response';
import { GPSManager } from './manager/gps-manager';
import { BangleJSManager } from './manager/banglejs-manager';



const appContext = new AppContext();


//Listeners
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(appContext, BtnTypes.BTN1), BangleJSManager.BTN1(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(appContext, BtnTypes.BTN2), BangleJSManager.BTN2(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(appContext, BtnTypes.BTN3), BangleJSManager.BTN3(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(appContext, BtnTypes.BTN4), BangleJSManager.BTN4(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(appContext, BtnTypes.BTN5), BangleJSManager.BTN5(), { repeat: true, edge: 'falling' });
BangleJSManager.Bangle().on('GPS', (gpsResponse: GpsResponse) => GPSManager.processGPSResponse(appContext, gpsResponse));


//Init GPS
BangleJSManager.Bangle().setGPSPower(1);


//Init screen
BangleJSManager.Bangle().setLCDMode();
ScreenManager.drawScreen(appContext);
*/

import { BangleJSManager } from "./manager/banglejs-manager";


BangleJSManager.Bangle().setGPSPower(1);
BangleJSManager.Bangle().setLCDMode("doublebuffered");
BangleJSManager.E().showMessage("Loading..."); // avoid showing rubbish on screen

var lastFix = {
  fix: 0,
  alt: 0,
  lat: 0,
  lon: 0,
  speed: 0,
  time: 0,
  satellites: 0
};

var nofix = 0;

function onGPS(fix: any) {
  lastFix = fix;
  BangleJSManager.g().clear();
  BangleJSManager.g().setFontAlign(-1, -1);
  BangleJSManager.g().setFont("6x8");
  BangleJSManager.g().setFontVector(22);
  BangleJSManager.g().drawString("GPS Info", 70, 0);
  if (fix.fix) {
    nofix = 0;
    var alt = fix.alt;
    var lat = fix.lat;
    var lon = fix.lon;
    var speed = fix.speed;
    var satellites = fix.satellites;
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
    nofix = (nofix+1) % 4;
    BangleJSManager.g().drawString(".".repeat(nofix) + " ".repeat(4-nofix), 120, 120);
    // Show number of satellites:
    BangleJSManager.g().setFontAlign(0,0);
    BangleJSManager.g().setFont("6x8");
    BangleJSManager.g().drawString(fix.satellites+" satellites", 120, 100);
  }
  BangleJSManager.g().flip();
}

BangleJSManager.Bangle().on('GPS', onGPS);
