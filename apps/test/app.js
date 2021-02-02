Bangle.setGPSPower(1);

const gpsState = false;

g.clear();
g.setColor(50712);
g.setFont("6x8", 2);
g.drawString("DIST (KM)", 5, 5);

g.setFont("6x8", 1);
g.setColor(gpsState ? 2016 : 63488);
g.drawString("GPS", 220, 5);




Bangle.on("GPS", function (gpsData) {
  g.drawString(gpsData.lat.toFixed(0), 220, 10);
  g.drawString(gpsData.lon.toFixed(0), 220, 15);
});
