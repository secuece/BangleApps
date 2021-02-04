import { AppContext } from '../../models/app-context';
import { BtnTypes } from '../../constants/btn-types';

export class ScreenRunManager {


     public static btn1Action(appContext: AppContext) {

     }


     public static btn3Action(appContext: AppContext) {

     }


     public static drawScreen(appContext: AppContext) {

     }

     public static manageBtnAction(appContext: AppContext, btn: BtnTypes) {
          if (btn == BtnTypes.BTN1) {
               ScreenRunManager.btn1Action(appContext);
          } else if (btn == BtnTypes.BTN3) {
               ScreenRunManager.btn3Action(appContext);
          }
     }



}