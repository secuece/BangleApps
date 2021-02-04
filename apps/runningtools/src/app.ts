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
ScreenManager.drawScreen(appContext);

