// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'lernkarten-angular-firebase',
    appId: '1:1833224008:web:b5e2520e231a53a2c4557d',
    databaseURL: 'https://lernkarten-angular-firebase-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'lernkarten-angular-firebase.appspot.com',
    apiKey: 'AIzaSyDP_dhgXJtgJtdhf_bEn35GJvg3zSUiXgk',
    authDomain: 'lernkarten-angular-firebase.firebaseapp.com',
    messagingSenderId: '1833224008',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
