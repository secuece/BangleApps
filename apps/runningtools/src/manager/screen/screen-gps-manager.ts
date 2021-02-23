import { AppContext } from '../../models/app-context';
import { SATELITE_IMAGE } from '../../resources/sat-image';
import { BangleJSManager } from '../banglejs-manager';


export class ScreenGPSManager {

     public static drawScreen() {

          BangleJSManager.g().setFontAlign(-1, -1);
          BangleJSManager.g().drawImage(SATELITE_IMAGE, 20, -12);
          BangleJSManager.g().setFont("6x8");
          BangleJSManager.g().setFontVector(22);
          BangleJSManager.g().drawString("GPS Info", 70, 0);

          BangleJSManager.g().setFontAlign(0, 1);
          BangleJSManager.g().setFont("6x8", 2);
          BangleJSManager.g().drawString("Waiting for GPS", 120, 80);

          const bullets = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          if ( bullets == 1 ) {
               BangleJSManager.g().drawString(".  ", 120, 120);
          } else if ( bullets == 2 ) {
               BangleJSManager.g().drawString(" . ", 120, 120);
          } else if ( bullets == 3 ) {
               BangleJSManager.g().drawString("  .", 120, 120);
          }

          // Show number of satellites:
          BangleJSManager.g().setFontAlign(0, 0);
          BangleJSManager.g().setFont("6x8");
          BangleJSManager.g().drawString(AppContext.getInstance().satellites + " satellites", 120, 100);

     }

}