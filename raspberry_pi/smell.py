import wiringpi as pi
import time
import mcp_adc

SPI_CE = 0
SPI_SPEED = 1000000
READ_CH = 0
VREF = 3.3

Vb1 = 17
Vb2 = 22

pi.wiringPiSetupSys()
pi.pinMode(Vb1, pi.GPIO.OUTPUT)
pi.pinMode(Vb2, pi.GPIO.OUTPUT)

adc = mcp_adc.mcp3002( SPI_CE, SPI_SPEED, VREF )


try:
    while 1:
        time.sleep(0.237)

        pi.digitalWrite(Vb2, pi.GPIO.HIGH)
        time.sleep(0.003)

        value = adc.get_value(READ_CH)
        volt = adc.get_volt(value)
        time.sleep(0.002)
        pi.digitalWrite(Vb2, pi.GPIO.LOW)
        
        pi.digitalWrite(Vb1, pi.GPIO.HIGH)
        time.sleep(0.008)
        pi.digitalWrite(Vb1, pi.GPIO.LOW)

        print ("Value:", value, " Volt:", volt )

except KeyboardInterrupt:
    pass
