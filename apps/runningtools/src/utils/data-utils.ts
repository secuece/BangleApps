export class DataUtils {

     public static getDurationFormatted(duration: number): string {
          const seconds = Math.round(duration);
          const hrs = Math.floor(seconds / 3600);
          const min = Math.floor(seconds / 60) % 60;
          const sec = seconds % 60;

          return (hrs ? hrs + ':' : '') + ('0' + min).substr(-2) + `:` + ('0' + sec).substr(-2);

     }

     public static getDateFormatted(date: Date): string {
          return ('0' + date.getHours()).substr(-2) + ':' + ('0' + date.getMinutes()).substr(-2);
     }


     public static getSpeedInKmH(seconds: number, distance: number): string {
          return (distance/seconds/3600).toFixed(1);
     }


     public static getSpeedInMinKm(seconds: number, distance: number): string {
          return (seconds/60/distance).toFixed(1);
     }


     public static getBurnedCalories(met: number, weight: number, seconds: number): string {
          return (seconds * ( 60 * met * 3.5 * weight / 200 / 3600 )).toFixed(1);
     }



}