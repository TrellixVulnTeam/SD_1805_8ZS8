import time
import datetime
import picamera
import shutil
import os
import wiringpi as wp

#wp.wiringPiSetup()
#pin = 23
#wp.pinMode(pin, wp.GPIO.OUTPUT)

cwd = os.getcwd()
camera = picamera.PiCamera()
camera.resolution = (3280, 2464)
t = 50
while(t > 0):
    now = datetime.datetime.now()
    nowf = now.strftime('%Y-%m-%d-%H-%M-%S')
    camera.capture(nowf + '.jpeg')
    img_dir = os.path.join("/media/pi/DD54-3F6C/images")
    shutil.move(nowf+'.jpeg', img_dir)
    #wp.digitalWrite(pin,1)
    print("I took picture at %s" % nowf)
    if t % 2 == 0:
        print("-"*150)
    else:
        print("#"*150)
    t -= 1
    time.sleep(4)
    #wp.digitalWrite(pin,0)
    #time.sleep(3)
    
    
