!(function () {
    "use strict";
    const t = { STOP: 63488, PAUSE: 65504, RUN: 2016 };
    function n(t, n, r) {
        g.setColor(0), g.fillRect(n - 60, r, n + 60, r + 30), g.setColor(65535), g.drawString(t, n, r);
    }
    function r(r) {
        var e;
        g.setFontVector(30),
            g.setFontAlign(0, -1, 0),
            n((r.distance / 1e3).toFixed(2), 60, 55),
            n(
                (function (t) {
                    const n = Math.round(t),
                        r = Math.floor(n / 3600),
                        e = Math.floor(n / 60) % 60,
                        o = n % 60;
                    return (r ? r + ":" : "") + ("0" + e).substr(-2) + ":" + ("0" + o).substr(-2);
                })(r.duration),
                180,
                55
            ),
            n(
                (function (t) {
                    if (t < 0.1667) return "__'__\"";
                    const n = Math.round(1e3 / t),
                        r = Math.floor(n / 60),
                        e = n % 60;
                    return ("0" + r).substr(-2) + "'" + ("0" + e).substr(-2) + '"';
                })(r.speed),
                60,
                115
            ),
            n(r.hr.toFixed(0), 180, 115),
            n(r.steps.toFixed(0), 60, 175),
            n(r.cadence.toFixed(0), 180, 175),
            g.setFont("6x8", 2),
            g.setColor(r.gpsValid ? 2016 : 63488),
            g.fillRect(0, 216, 80, 240),
            g.setColor(0),
            g.drawString("GPS", 40, 220),
            g.setColor(65535),
            g.fillRect(80, 216, 160, 240),
            g.setColor(0),
            g.drawString(("0" + (e = new Date()).getHours()).substr(-2) + ":" + ("0" + e.getMinutes()).substr(-2), 120, 220),
            g.setColor(t[r.status]),
            g.fillRect(160, 216, 240, 240),
            g.setColor(0),
            g.drawString(r.status, 200, 220);
    }
    function e(t) {
        g.clear(),
            g.setColor(50712),
            g.setFont("6x8", 2),
            g.setFontAlign(0, -1, 0),
            g.drawString("DIST (KM)", 60, 32),
            g.drawString("TIME", 180, 32),
            g.drawString("PACE", 60, 92),
            g.drawString("HEART", 180, 92),
            g.drawString("STEPS", 60, 152),
            g.drawString("CADENCE", 180, 152),
            r(t),
            Bangle.drawWidgets();
    }
    var o;
    function a(t) {
        t.status === o.Stopped &&
            (function (t) {
                const n = new Date().toISOString().replace(/[-:]/g, ""),
                    r = `banglerun_${n.substr(2, 6)}_${n.substr(9, 6)}`;
                (t.file = require("Storage").open(r, "w")), t.file.write(["timestamp", "latitude", "longitude", "altitude", "duration", "distance", "heartrate", "steps"].join(",") + "\n");
            })(t),
            t.status === o.Running ? (t.status = o.Paused) : (t.status = o.Running),
            r(t);
    }
    !(function (t) {
        (t.Stopped = "STOP"), (t.Paused = "PAUSE"), (t.Running = "RUN");
    })(o || (o = {}));
    const s = {
        fix: NaN,
        lat: NaN,
        lon: NaN,
        alt: NaN,
        vel: NaN,
        dop: NaN,
        gpsValid: !1,
        x: NaN,
        y: NaN,
        z: NaN,
        v: NaN,
        t: NaN,
        dt: NaN,
        pError: NaN,
        vError: NaN,
        hr: 60,
        hrError: 100,
        file: null,
        drawing: !1,
        status: o.Stopped,
        duration: 0,
        distance: 0,
        speed: 0,
        steps: 0,
        cadence: 0,
    };
    var i;
    (i = s),
        Bangle.on("GPS", (t) =>
            (function (t, n) {
                (t.lat = n.lat),
                    (t.lon = n.lon),
                    (t.alt = n.alt),
                    (t.vel = n.speed / 3.6),
                    (t.fix = n.fix),
                    (t.dop = n.hdop),
                    (t.gpsValid = t.fix > 0 && t.dop <= 5),
                    (function (t) {
                        const n = Date.now(),
                            r = (n - t.t) / 1e3;
                        if (((t.t = n), (t.dt += r), t.status === o.Running && (t.duration += r), !t.gpsValid)) return;
                        const e = 6371008.8 + t.alt,
                            a = e * Math.cos(t.lat) * Math.cos(t.lon),
                            s = e * Math.cos(t.lat) * Math.sin(t.lon),
                            i = e * Math.sin(t.lat),
                            d = t.vel;
                        if (!t.x) return (t.x = a), (t.y = s), (t.z = i), (t.v = d), (t.pError = 2.5 * t.dop), void (t.vError = 0.05 * t.dop);
                        const u = a - t.x,
                            g = s - t.y,
                            l = i - t.z,
                            c = d - t.v,
                            p = Math.sqrt(u * u + g * g + l * l),
                            f = Math.abs(c);
                        (t.pError += t.v * t.dt), (t.dt = 0);
                        const N = p + 2.5 * t.dop,
                            h = f + 0.05 * t.dop,
                            S = t.pError / (t.pError + N) || 0,
                            x = t.vError / (t.vError + h) || 0;
                        (t.x += u * S), (t.y += g * S), (t.z += l * S), (t.v += c * x), (t.pError += (N - t.pError) * S), (t.vError += (h - t.vError) * x);
                        const E = Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z);
                        (t.lat = (180 * Math.asin(t.z / E)) / Math.PI || 0),
                            (t.lon = (180 * Math.atan2(t.y, t.x)) / Math.PI || 0),
                            (t.alt = E - 6371008.8),
                            t.status === o.Running && ((t.distance += p * S), (t.speed = t.distance / t.duration || 0), (t.cadence = (60 * t.steps) / t.duration || 0));
                    })(t),
                    r(t),
                    t.gpsValid &&
                        t.status === o.Running &&
                        (function (t) {
                            t.file.write([Date.now().toFixed(0), t.lat.toFixed(6), t.lon.toFixed(6), t.alt.toFixed(2), t.duration.toFixed(0), t.distance.toFixed(2), t.hr.toFixed(0), t.steps.toFixed(0)].join(",") + "\n");
                        })(t);
            })(i, t)
        ),
        Bangle.setGPSPower(1),
        (function (t) {
            Bangle.on("HRM", (n) =>
                (function (t, n) {
                    if (0 === n.confidence) return;
                    const r = n.bpm - t.hr,
                        e = Math.abs(r) + 101 - n.confidence,
                        o = t.hrError / (t.hrError + e) || 0;
                    (t.hr += r * o), (t.hrError += (e - t.hrError) * o);
                })(t, n)
            ),
                Bangle.setHRMPower(1);
        })(s),
        (function (t) {
            Bangle.on("step", () =>
                (function (t) {
                    t.status === o.Running && (t.steps += 1);
                })(t)
            );
        })(s),
        (function (t) {
            Bangle.loadWidgets(),
                Bangle.on("lcdPower", (n) => {
                    (t.drawing = n), n && e(t);
                }),
                e(t);
        })(s),
        setWatch(() => a(s), BTN1, { repeat: !0, edge: "falling" }),
        setWatch(
            () =>
                (function (t) {
                    t.status === o.Paused &&
                        (function (t) {
                            (t.duration = 0), (t.distance = 0), (t.speed = 0), (t.steps = 0), (t.cadence = 0);
                        })(t),
                        t.status === o.Running ? (t.status = o.Paused) : (t.status = o.Stopped),
                        r(t);
                })(s),
            BTN3,
            { repeat: !0, edge: "falling" }
        );
})();
