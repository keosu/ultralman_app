
# add capacitor to existing project  

```sh
npm i @capacitor/core
npm i -D @capacitor/cli

#Initialize your Capacitor config​
#Then, initialize Capacitor using the CLI questionnaire:

npx cap init 

# Create your Android and iOS projects​
# After the Capacitor core runtime is installed, you can install the Android and iOS platforms.

npm i @capacitor/android @capacitor/ios 

npx cap add android
npx cap add ios

# Sync your web code to your native project​ 

npx cap sync
```
