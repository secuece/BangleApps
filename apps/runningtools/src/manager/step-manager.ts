import { AppContext } from "../models/app-context";
import { ScreenManager } from "./screen/screen-manager";
import { ActivityState } from "../constants/activity-state";

export class StepManager {

     public static processStepResponse() {

          if (AppContext.getInstance().activityState == ActivityState.Run) {
               AppContext.getInstance().steps++;
          }

          ScreenManager.drawScreen();

     }

}