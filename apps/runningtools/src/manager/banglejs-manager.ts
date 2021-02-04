declare const Bangle: any;
declare const BTN1: any;
declare const BTN2: any;
declare const BTN3: any;
declare const BTN4: any;
declare const BTN5: any;
declare const E: any;
declare const require: any;
declare const setWatch: any;
declare const g: any;

export class BangleJSManager {

     public static require(libName: string): any {
          return require(libName);
     }

     public static g(): any {
          return g;
     }

     public static E(): any {
          return E;
     }

     public static setWatch(param1: any, param2: any, param3: any): any {
          return setWatch(param1, param2, param3);
     }

     public static BTN1(): any {
          return BTN1;
     }

     public static BTN2(): any {
          return BTN2;
     }

     public static BTN3(): any {
          return BTN3;
     }

     public static BTN4(): any {
          return BTN4;
     }

     public static BTN5(): any {
          return BTN5;
     }

     public static Bangle(): any {
          return Bangle;
     }


}