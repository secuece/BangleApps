Bangle.setGPSPower(1);


g.clear();


let steps = 0;
let hr = 0;
let distance = 10;
let duration = "00:00";
let speed = 0.4;
let min = 10.2;


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


function onGPS(gpsData) {
  g.clear();
  g.setColor(50712);
  g.setFont("6x8", 2);
  g.drawString("DIST (KM)", 5, 5);

  g.setFont("6x8", 1);
  g.setColor(gpsData ? 2016 : 63488);
  g.drawString("GPS", 220, 5);
  
  if ( gpsData.fix ) {
    g.drawString(gpsData.lat.toFixed(0), 220, 10);
    g.drawString(gpsData.lon.toFixed(0), 220, 15);
  } else {
    g.setFontAlign(0, 1);
    g.setFont("6x8", 2);
    g.drawString("Waiting for GPS", 120, 80);
    nofix = (nofix+1) % 4;
    g.drawString(".".repeat(nofix) + " ".repeat(4-nofix), 120, 120);
    // Show number of satellites:
    g.setFontAlign(0,0);
    g.setFont("6x8");
    g.drawString(fix.satellites+" satellites", 120, 100);
  }
  
  g.flip();
  
}


//Bangle.on("GPS", onGPS);
