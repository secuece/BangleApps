const ACTIVITY_STATE_COLORS = {
  Stop: 0xF800,
  Pause: 0xFFE0,
  Run: 0x07E0
};

const ACTIVITY_STATE = {
  Stop: 1,
  Pause: 2,
  Run: 3
};


let steps = 0;
let hr = 0;
let distance = 10;
let duration = "10:00";
let speed = 0.4;
let min = 10.2;
let stateGps = false;
let activityState = ACTIVITY_STATE.Stop;
let forceResetActivity = false;




function resetActivity() {
  steps = 0;
  hr = 0;
  distance = 0;
  duration = "00:00";
  speed = 0;
  min = 0;
  stateGps = false;
  activityState = ACTIVITY_STATE.Stop;
  forceResetActivity = false;
}


function formatClock(date) {
  return ('0' + date.getHours()).substr(-2) + ':' + ('0' + date.getMinutes()).substr(-2);
}


function getColorFromActivityState() {
  if ( activityState == ACTIVITY_STATE.Run ) {
    return ACTIVITY_STATE_COLORS.Run;
  } else if ( activityState == ACTIVITY_STATE.Pause ) {
    return ACTIVITY_STATE_COLORS.Pause;
  } else {
    return ACTIVITY_STATE_COLORS.Stop;
  }
}


function getLabelFromActivityState() {
  if ( activityState == ACTIVITY_STATE.Run ) {
    return "RUN";
  } else if ( activityState == ACTIVITY_STATE.Pause ) {
    return "PAUSE";
  } else {
    return "STOP";
  }
}



function drawScreen() {
  
  g.clear();

  g.setColor(50712);
  g.setFont("6x8", 2);
  g.setFontAlign(0, -1, 0);
  g.drawString("DIST (KM)", 60, 32);
  g.drawString("TIME", 180, 32);
  g.drawString("STEPS", 60, 92);
  g.drawString("HEART", 180, 92);
  g.drawString("KM/H", 60, 152);
  g.drawString("MIN/KM", 180, 152);




  g.setFontVector(30);
  g.setColor(65535);
  g.drawString(distance.toFixed(2), 60, 55);
  g.drawString(duration, 180, 55);
  g.drawString(steps.toFixed(0), 60, 115);
  g.drawString(hr.toFixed(0), 180, 115);
  g.drawString(speed.toFixed(1), 60, 175);
  g.drawString(min.toFixed(1), 180, 175);


  g.setFont('6x8', 2);
  g.setColor( stateGps ? 0x07E0 : 0xF800);
  g.fillRect(0, 216, 80, 240);
  g.setColor(0x0000);
  g.drawString('GPS', 40, 220);

  g.setColor(0xFFFF);
  g.fillRect(80, 216, 160, 240);
  g.setColor(0x0000);
  g.drawString(formatClock(new Date()), 120, 220);

  g.setColor(getColorFromActivityState(activityState));
  g.fillRect(160, 216, 240, 240);
  g.setColor(0x0000);
  g.drawString(getLabelFromActivityState(activityState), 200, 220);
  
  g.flip();
  
}



function startActivity() {
    Bangle.beep(); 
    forceResetActivity = false;
    if ( activityState == ACTIVITY_STATE.Stop ) {
      Bangle.setGPSPower(1);
      VIBRATE.write(1);
      activityState = ACTIVITY_STATE.Run;
    } else if ( activityState == ACTIVITY_STATE.Pause ) {
      activityState = ACTIVITY_STATE.Run;
    } else if ( activityState == ACTIVITY_STATE.Run ) {
      activityState = ACTIVITY_STATE.Pause;
    }
    
    drawScreen();
}
  
  
  
function stopActivity() {
    Bangle.beep(); 
    if ( activityState == ACTIVITY_STATE.Stop ) {
      activityState = ACTIVITY_STATE.Stop;
      if ( forceResetActivity ) {
        resetActivity();
      } else {
        forceResetActivity = true;
      }
    } else if ( activityState == ACTIVITY_STATE.Pause ) {
      Bangle.setGPSPower(0);
      VIBRATE.write(0);
      activityState = ACTIVITY_STATE.Stop;
    } else if ( activityState == ACTIVITY_STATE.Run ) {
      activityState = ACTIVITY_STATE.Pause;
    }
    
    drawScreen();
}



//analogWrite(D18,0.5,{freq:2000});setTimeout(()=>D18.reset(),200);


Bangle.beep(); 

setWatch(() => startActivity(), BTN1, { repeat: true, edge: 'falling' });
setWatch(() => stopActivity(), BTN3, { repeat: true, edge: 'falling' });
drawScreen();
