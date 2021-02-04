import { AppContext } from '../../models/app-context';
import { BtnTypes } from '../../constants/btn-types';
import { ScreenType } from '../../constants/screen-type';
import { ScreenRunManager } from './screen-run-manager';
import { ScreenGPSManager } from './screen-gps-manager';
import { BangleJSManager } from '../banglejs-manager';

export class ScreenManager {


     public static manageBtnAction(appContext: AppContext, btn: BtnTypes) {

          if ( !appContext.stateGps ) {
               if (btn == BtnTypes.BTN2) {
                    ScreenManager.nextScreen(appContext);
               } else if (appContext.screenType == ScreenType.Running) {
                    ScreenRunManager.manageBtnAction(appContext, btn);
               }
          }

          ScreenManager.drawScreen(appContext);

     }

     public static nextScreen(appContext: AppContext) {

          if (appContext.screenType == ScreenType.Running) {
               appContext.screenType = ScreenType.Heart;
          } else if (appContext.screenType == ScreenType.Heart) {
               appContext.screenType = ScreenType.Map;
          } else {
               appContext.screenType = ScreenType.Running;
          }

     }


     public static drawScreen(appContext: AppContext) {

          //BangleJSManager.g().clear();

          if ( !appContext.stateGps ) {
               ScreenGPSManager.drawScreen(appContext);
          } else if (appContext.screenType == ScreenType.Running) {
               ScreenRunManager.drawScreen(appContext);
          }

          BangleJSManager.g().flip();
     }


}