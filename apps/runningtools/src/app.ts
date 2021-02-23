import { BtnTypes } from './constants/btn-types';
import { ScreenManager } from './manager/screen/screen-manager';
import { GpsResponse } from './models/gps-response';
import { GPSManager } from './manager/gps-manager';
import { BangleJSManager } from './manager/banglejs-manager';
import { StepManager } from './manager/step-manager';


//Init screen
BangleJSManager.Bangle().setLCDMode("doublebuffered");
BangleJSManager.E().showMessage("Loading...");
ScreenManager.drawScreen();


//Listeners
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(BtnTypes.BTN1), BangleJSManager.BTN1(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(BtnTypes.BTN2), BangleJSManager.BTN2(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(BtnTypes.BTN3), BangleJSManager.BTN3(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(BtnTypes.BTN4), BangleJSManager.BTN4(), { repeat: true, edge: 'falling' });
BangleJSManager.setWatch(() => ScreenManager.manageBtnAction(BtnTypes.BTN5), BangleJSManager.BTN5(), { repeat: true, edge: 'falling' });
BangleJSManager.Bangle().on('GPS', (gpsResponse: GpsResponse) => GPSManager.processGPSResponse(gpsResponse));
BangleJSManager.Bangle().on('Step', (_up: number) => StepManager.processStepResponse());




//Init GPS
BangleJSManager.Bangle().setGPSPower(1);












