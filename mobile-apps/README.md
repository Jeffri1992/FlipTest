
## Requirement
- Node v18 (it's recomended to use NVM)
- NPM
- Appium
- appium-doctor
- Android Studio (for SDK and AVD)


## Installation
### Install node via NVM to install Node globally ###
There two methods to install NVM. Use Curl or Wget.
Curl command:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

Or, you can  use wget command:

    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

Then install Node v14.16.1 and set it to default. We recommend this version because there some error in v12.xx which block automation test to run

    source ~/.bashrc
    nvm install 18
    nvm use 18
    node -v
add path for your node to your shell (~/.bashrc, ~/.profile, ~/.zshrc)

    sudo nano ~/.bashrc
    PATH=/usr/bin/node:$PATH

press `ctrl+o` to save, and press `enter`
press `ctrl+x` to exit nano


## Install Android Studio ##
Android studio bundled with OpenJDK, Android SDK and Android Virtual Devices (AVD). So you don't need to download them separately.

1.  Download Android studio [here](https://developer.android.com/studio#downloads) then unpack the  `.zip`  file you downloaded to an appropriate location for your applications, such as within  `/usr/local/`  for your user profile, or  `/opt/`  for shared users.

    If you're using a 64-bit version of Linux, make sure you first install the  [required libraries for 64-bit machines](https://developer.android.com/studio/install#64bit-libs).

2.  To launch Android Studio, open a terminal, navigate to the  `android-studio/bin/`  directory, and execute  `studio.sh`.
3.  Select whether you want to import previous Android Studio settings or not, then click  **OK**.
4.  The Android Studio Setup Wizard guides you through the rest of the setup, which includes downloading Android SDK components that are required for development.

After Android Studio succesfully installed, please check your java version. Make sure it above 1.8 in terminal

    java -version
Add Android SDK and Java path to shell, just like node.

    # ANDROID_HOME
    export ANDROID_HOME=/home/username/android-sdk
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    
    # JAVA_HOME
    export JAVA_HOME=/snap/android-studio/81/android-studio/jre
    export PATH=$PATH:$JAVA_HOME/bin
Then you may set for desired Android emulator device for testing.

## Install Appium ##
Make sure you have not installed Node or Appium with `sudo`, otherwise you'll run into problems)

    npm install -g appium --save-dev

And also install Appium doctor to check is Appium is able to run

    npm install -g appium-doctor --save-dev
then run `appium-doctor`, make sure there is no error.

    info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
    info AppiumDoctor  ✔ The Node.js binary was found at: /home/ridwan/.nvm/versions/node/v10.17.0/bin/node
    info AppiumDoctor  ✔ Node version is 10.17.0
    info AppiumDoctor  ✔ ANDROID_HOME is set to: /home/ridwan/android-sdk
    info AppiumDoctor  ✔ JAVA_HOME is set to: /snap/android-studio/81/android-studio/jre
    info AppiumDoctor  ✔ adb exists at: /home/ridwan/android-sdk/platform-tools/adb
    info AppiumDoctor  ✔ android exists at: /home/ridwan/android-sdk/tools/android
    info AppiumDoctor  ✔ emulator exists at: /home/ridwan/android-sdk/tools/emulator
    info AppiumDoctor  ✔ Bin directory of $JAVA_HOME is set

If there is no error like above, then appium is ready to tun.

## Add your user to KVM ##
You need to insert your username to KVM to enable emulator to run

Install Qemu KVM
```sh
  $sudo apt install qemu-kvm
```

check the ownership of /dev/kvm
```sh
  $ls -al /dev/kvm
```

The user was `root`, the group `kvm`. To check which users are in the kvm group, use
```sh
  grep kvm /etc/group
```

This returned
```sh
kvm:x:some_number:
```

Add your user to the kvm group
```sh
sudo adduser $USER kvm
```


# How to Use #

    #Capabilites
    PLATFORM_VERSION=android version
    DEVICE_NAME=your device name
    #AVD=you can get it from AVD Manager
    UDID=you can get it from `adb devices` 
    #BROWSER_NAME=
    APP_PACKAGE=com.indodana.app.staging
    APP=/your/app/directory.apk
    BASE_URL=stg1.indodana.com
    

note: You can use only one between `AVD_NAME` or `UDID`. If you can't use command `adb devices`, then you can use AVD_NAME from AVD Manager on android studio, then see device details and you can see the AVD Name. Just copy it to your `AVD_NAME` env. Then unuse the UDID by add hash like this `#UDID`


You can run automatic test scenario by cucumber tag. This cucumber tag provdes login scenario until OTP page displayed.

    npm test -- --cucumberOpts.tagExpression="@apptest"

**Before you run the test, make sure:**
- There is no error in appium-doctor
- The cucumber tag is existed
- Your device (both real device or emulator) is registered in `capabilites`
