# AutoReadOTP-ReactNative

From the year 2019, Read CALL LOGS and  SMS are comes under Critical permission .If These Permissions are used in app and uploaded to play store ,it will suspend app from Playstore.
To overcome this issue and give user a better experience of auto fill of OTP, SMSRETRIVER API comes to effect.
Here SMSRETRIVER API will be used to detect otp for autofill.Here we will use a library for this.

## Steps for Add Auto Read OTP in to APP :

*  Install react-native-otp-verify library by using "npm install --save react-native-otp-verify".
* Then generate Hash code(code is attached in App.js ).
* Send the sms including <#> and the hash which is generated and the  SMS format will be like "<#> Hello, Please enter 503960 as your One Time Password (OTP) to continue your login with XYZ. Please do not share with anyone. l2xPcDHuQTj"
* End string of message is the hash.
* The play services will check the the hash and will retrive the sms.

