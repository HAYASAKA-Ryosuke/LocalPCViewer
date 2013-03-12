import SimpleHTTPServer
from multiprocessing import Pool
import commands
import threading
import time
def screencap:
    commands.getoutput('sh ./ScreenShot.sh')
    t=threading.Timer(0.5,screencap)
    t.start()

t=threading.Timer(0.5,screencap)
t.start()

SimpleHTTPServer.test()

#p=Pool(1)
#p.map(SimpleHTTPServer.test(),[])

