!function(){"use strict";class t{static require(t){return require(t)}static g(){return g}static E(){return E}static setWatch(t,e,s){return setWatch(t,e,s)}static BTN1(){return BTN1}static BTN2(){return BTN2}static BTN3(){return BTN3}static BTN4(){return BTN4}static BTN5(){return BTN5}static Bangle(){return Bangle}}var e;!function(t){t[t.Running=1]="Running",t[t.Heart=2]="Heart",t[t.Map=3]="Map",t[t.Gps=4]="Gps"}(e||(e={}));const s=new class{constructor(){this._steps=0,this._heart=0,this._distance=0,this._duration=0,this._speed=0,this._minutes=0,this._screenType=e.Running,this._stateGps=!1,this._lat=0,this._lon=0,this._alt=0,this._satellites=0,this._activityState=0,this._forceResetActivity=!1}get steps(){return this._steps}set steps(t){this._steps=t}get heart(){return this._heart}set heart(t){this._heart=t}get distance(){return this._distance}set distance(t){this._distance=t}get duration(){return this._duration}set duration(t){this._duration=t}get speed(){return this._speed}set speed(t){this._speed=t}get minutes(){return this._minutes}set minutes(t){this._minutes=t}get calories(){return this._calories}set calories(t){this._calories=t}get screenType(){return this._screenType}set screenType(t){this._screenType=t}get stateGps(){return this._stateGps}set stateGps(t){this._stateGps=t}get activityState(){return this._activityState}set activityState(t){this._activityState=t}get forceResetActivity(){return this._forceResetActivity}set forceResetActivity(t){this._forceResetActivity=t}get lat(){return this._lat}set lat(t){this._lat=t}get lon(){return this._lon}set lon(t){this._lon=t}get alt(){return this._alt}set alt(t){this._alt=t}get satellites(){return this._satellites}set satellites(t){this._satellites=t}};t.Bangle().setGPSPower(1),t.Bangle().setLCDMode("doublebuffered"),t.E().showMessage("Loading..."),t.Bangle().on("GPS",e=>class{static processGPSResponse(e,s){if(t.g().clear(),t.g().setFontAlign(-1,-1),t.g().setFont("6x8"),t.g().setFontVector(22),t.g().drawString("GPS TEST",70,0),s.fix){var i=s.alt,r=s.lat,a=s.lon,n=s.speed,g=s.satellites;t.g().setFontVector(15),t.g().drawString("Altitude: "+i+" m",10,36),t.g().drawString("Lat: "+r,10,54),t.g().drawString("Lon: "+a,10,72),t.g().drawString("Speed: "+n.toFixed(1)+" km/h",10,90),t.g().drawString("Satellites: "+g,10,126)}else{t.g().setFontAlign(0,1),t.g().setFont("6x8",2),t.g().drawString("Waiti22 for GPS",120,80);const e=Math.floor(4*Math.random()+1);t.g().drawString(".".repeat(e)+" ".repeat(4-e),120,120),t.g().setFontAlign(0,0),t.g().setFont("6x8"),t.g().drawString(s.satellites+" satellites",120,100)}t.g().flip()}}.processGPSResponse(s,e))}();
