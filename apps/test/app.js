Bangle.setGPSPower(1);

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


Bangle.on("GPS", onGPS);
