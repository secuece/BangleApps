import { AppContext } from '../../models/app-context';
import { BtnTypes } from '../../constants/btn-types';
import { ScreenType } from '../../constants/screen-type';
import { ScreenRunManager } from './screen-run-manager';
import { BangleJSManager } from '../banglejs-manager';

export class ScreenManager {


     public static manageBtnAction(btn: BtnTypes) {

          if ( !AppContext.getInstance().stateGps ) {
               if (btn == BtnTypes.BTN2) {
                    ScreenManager.nextScreen();
               } else if (AppContext.getInstance().screenType == ScreenType.Running) {
                    ScreenRunManager.manageBtnAction(btn);
               }
          }

     }

     public static nextScreen() {

          if (AppContext.getInstance().screenType == ScreenType.Running) {
               AppContext.getInstance().screenType = ScreenType.Heart;
          } else if (AppContext.getInstance().screenType == ScreenType.Heart) {
               AppContext.getInstance().screenType = ScreenType.Map;
          } else {
               AppContext.getInstance().screenType = ScreenType.Running;
          }

          ScreenManager.drawScreen();

     }


     public static drawScreen() {

          BangleJSManager.g().clear();
          BangleJSManager.Bangle().drawWidgets();

          /*
          if ( !AppContext.getInstance().stateGps ) {
               ScreenGPSManager.drawScreen();
          } else if (AppContext.getInstance().screenType == ScreenType.Running) {
               ScreenRunManager.drawScreen();
          }
          */

          ScreenRunManager.drawScreen();

          BangleJSManager.g().flip();

     }



}