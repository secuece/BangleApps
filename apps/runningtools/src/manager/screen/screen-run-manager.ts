import { BtnTypes } from '../../constants/btn-types';
import { BangleJSManager } from '../banglejs-manager';
import { AppContext } from '../../models/app-context';
import { Configuration } from '../../constants/configuration';
import { RunningDataType } from '../../constants/running-data-type';
import { DataUtils } from '../../utils/data-utils';
import { ActivityState } from '../../constants/activity-state';
import { ActivityStateColors } from '../../constants/activity-state-colors';

export class ScreenRunManager {


     public static btn1Action() {

          BangleJSManager.Bangle().beep();
          AppContext.getInstance().forceResetActivity = false;

          if (AppContext.getInstance().activityState == ActivityState.Stop) {
               AppContext.getInstance().activityState = ActivityState.Run;
          } else if (AppContext.getInstance().activityState == ActivityState.Pause) {
               AppContext.getInstance().activityState = ActivityState.Run;
          } else if (AppContext.getInstance().activityState == ActivityState.Run) {
               AppContext.getInstance().activityState = ActivityState.Pause;
          }

     }


     public static btn3Action() {

          BangleJSManager.Bangle().beep();

          if (AppContext.getInstance().activityState == ActivityState.Stop) {
               if (AppContext.getInstance().forceResetActivity) {
                    AppContext.getInstance().resetRunnigActivity();
               } else {
                    AppContext.getInstance().forceResetActivity = true;
               }
          }

     }


     public static btn4Action() {

          if (AppContext.getInstance().runningScreenData == RunningDataType.Totals) {
               AppContext.getInstance().runningScreenData = RunningDataType.Health;
          } else if (AppContext.getInstance().runningScreenData == RunningDataType.Health) {
               AppContext.getInstance().runningScreenData = RunningDataType.Current;
          } else if (AppContext.getInstance().runningScreenData == RunningDataType.Current) {
               AppContext.getInstance().runningScreenData = RunningDataType.Partial;
          } else {
               AppContext.getInstance().runningScreenData = RunningDataType.Totals;
          }

     }

     public static btn5Action() {

          if (AppContext.getInstance().runningScreenData == RunningDataType.Totals) {
               AppContext.getInstance().runningScreenData = RunningDataType.Partial;
          } else if (AppContext.getInstance().runningScreenData == RunningDataType.Partial) {
               AppContext.getInstance().runningScreenData = RunningDataType.Current;
          } else if (AppContext.getInstance().runningScreenData == RunningDataType.Current) {
               AppContext.getInstance().runningScreenData = RunningDataType.Health;
          } else {
               AppContext.getInstance().runningScreenData = RunningDataType.Totals;
          }

     }


     public static drawScreen() {

          BangleJSManager.g().setColor(50712);
          BangleJSManager.g().setFont("6x8", 2);
          BangleJSManager.g().setFontAlign(0, -1, 0);
          BangleJSManager.g().drawString("DIST (KM)", 60, 32);
          BangleJSManager.g().drawString("TIME", 180, 32);




          BangleJSManager.g().setFontVector(30);
          BangleJSManager.g().setColor(65535);
          BangleJSManager.g().drawString(AppContext.getInstance().totalDistance.toFixed(2), 60, 55);
          BangleJSManager.g().drawString(DataUtils.getDurationFormatted(AppContext.getInstance().totalDuration), 180, 55);


          if (AppContext.getInstance().runningScreenData == RunningDataType.Totals) {

               BangleJSManager.g().drawString("KM/H(gs)", 55, 152);
               BangleJSManager.g().drawString("MIN/KM(gs)", 175, 152);
               BangleJSManager.g().drawString("KM/H(gs)", 55, 152);
               BangleJSManager.g().drawString("MIN/KM(gs)", 175, 152);

               const totalSpeedAverage = AppContext.getInstance().totalSpeed / AppContext.getInstance().totalIncrements;
               BangleJSManager.g().drawString(totalSpeedAverage.toFixed(1), 60, 115);
               BangleJSManager.g().drawString((60 / totalSpeedAverage).toFixed(1), 180, 115);

               BangleJSManager.g().drawString(DataUtils.getSpeedInKmH(AppContext.getInstance().totalDuration, AppContext.getInstance().totalDistance), 60, 175);
               BangleJSManager.g().drawString(DataUtils.getSpeedInMinKm(AppContext.getInstance().totalDuration, AppContext.getInstance().totalDistance), 180, 175);

          } else if (AppContext.getInstance().runningScreenData == RunningDataType.Partial) {

               BangleJSManager.g().drawString("KM/H(ps)", 55, 152);
               BangleJSManager.g().drawString("MIN/KM(ps)", 175, 152);
               BangleJSManager.g().drawString("KM/H(ps)", 55, 152);
               BangleJSManager.g().drawString("MIN/KM(ps)", 175, 152);


               BangleJSManager.g().drawString(AppContext.getInstance().partialKilometerSpeed.toFixed(1), 60, 115);
               BangleJSManager.g().drawString((60 / AppContext.getInstance().partialKilometerSpeed).toFixed(1), 180, 115);

               BangleJSManager.g().drawString(DataUtils.getSpeedInKmH(AppContext.getInstance().partialKilometerDuration, 1), 60, 175);
               BangleJSManager.g().drawString(DataUtils.getSpeedInMinKm(AppContext.getInstance().partialKilometerDuration, 1), 180, 175);

          } else if (AppContext.getInstance().runningScreenData == RunningDataType.Current) {

               BangleJSManager.g().drawString("KM/H(cs)", 55, 152);
               BangleJSManager.g().drawString("MIN/KM(cs)", 175, 152);
               BangleJSManager.g().drawString("KM/H(cs)", 55, 152);
               BangleJSManager.g().drawString("MIN/KM(cs)", 175, 152);

               const totalSpeedAverage = AppContext.getInstance().kilometerSpeed / AppContext.getInstance().kilometerIncrements;
               BangleJSManager.g().drawString(totalSpeedAverage.toFixed(1), 60, 115);
               BangleJSManager.g().drawString((60 / totalSpeedAverage).toFixed(1), 180, 115);

               BangleJSManager.g().drawString(DataUtils.getSpeedInKmH(AppContext.getInstance().kilometerDuration, AppContext.getInstance().kilometerDistance), 60, 175);
               BangleJSManager.g().drawString(DataUtils.getSpeedInMinKm(AppContext.getInstance().kilometerDuration, AppContext.getInstance().kilometerDistance), 180, 175);

          } else if (AppContext.getInstance().runningScreenData == RunningDataType.Health) {

               BangleJSManager.g().drawString("STEPS (KM)", 60, 92);
               BangleJSManager.g().drawString("SPEED", 180, 92);
               BangleJSManager.g().drawString("HEART", 55, 152);
               BangleJSManager.g().drawString("CAL", 175, 152);

               BangleJSManager.g().drawString((Configuration.STEP_LENGTH_KM * AppContext.getInstance().steps).toFixed(2), 60, 115);
               BangleJSManager.g().drawString(AppContext.getInstance().speed.toFixed(1), 180, 115);

               BangleJSManager.g().drawString((0).toFixed(0), 60, 175);
               BangleJSManager.g().drawString(DataUtils.getBurnedCalories(Configuration.CALORIES_CALCULATOR_MET_RUNNING, Configuration.WEIGHT_KG, AppContext.getInstance().totalDuration), 180, 175);

          }




          BangleJSManager.g().setFont('6x8', 2);
          BangleJSManager.g().setColor(AppContext.getInstance().stateGps ? 0x07E0 : 0xF800);
          BangleJSManager.g().fillRect(0, 216, 80, 240);
          BangleJSManager.g().setColor(0x0000);
          BangleJSManager.g().drawString('GPS', 33, 220);
          BangleJSManager.g().setFont('6x8', 1);
          BangleJSManager.g().drawString('(' + AppContext.getInstance().satellites.toFixed(0) + ')', 63, 225);

          BangleJSManager.g().setFont('6x8', 2);
          BangleJSManager.g().setColor(0xFFFF);
          BangleJSManager.g().fillRect(80, 216, 160, 240);
          BangleJSManager.g().setColor(0x0000);
          BangleJSManager.g().drawString(DataUtils.getDateFormatted(new Date()), 120, 220);

          BangleJSManager.g().setColor(ScreenRunManager.getColorFromActivityState());
          BangleJSManager.g().fillRect(160, 216, 240, 240);
          BangleJSManager.g().setColor(0x0000);
          BangleJSManager.g().drawString(ScreenRunManager.getLabelFromActivityState(), 200, 220);



     }

     public static manageBtnAction(btn: BtnTypes) {
          if (btn == BtnTypes.BTN1) {
               ScreenRunManager.btn1Action();
          } else if (btn == BtnTypes.BTN3) {
               ScreenRunManager.btn3Action();
          } else if (btn == BtnTypes.BTN4) {
               ScreenRunManager.btn4Action();
          } else if (btn == BtnTypes.BTN5) {
               ScreenRunManager.btn5Action();
          }
     }



     public static getColorFromActivityState(): ActivityStateColors {
          if (AppContext.getInstance().activityState == ActivityState.Run) {
               return ActivityStateColors.Run;
          } else if (AppContext.getInstance().activityState == ActivityState.Pause) {
               return ActivityStateColors.Pause;
          } else {
               return ActivityStateColors.Stop;
          }
     }


     public static getLabelFromActivityState(): string {
          if (AppContext.getInstance().activityState == ActivityState.Run) {
               return "RUN";
          } else if (AppContext.getInstance().activityState == ActivityState.Pause) {
               return "PAUSE";
          } else {
               return "STOP";
          }
     }



}