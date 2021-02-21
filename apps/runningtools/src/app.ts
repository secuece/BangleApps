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
import { GpsResponse } from "./models/gps-response";
import { AppContext } from "./models/app-context";
import { GPSManager } from "./manager/gps-manager";


const appContext = new AppContext();

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


//BangleJSManager.Bangle().on('GPS', onGPS);
BangleJSManager.Bangle().on('GPS', (gpsResponse: GpsResponse) => GPSManager.processGPSResponse(appContext, gpsResponse));





