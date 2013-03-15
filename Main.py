import SimpleHTTPServer
import commands
import threading

def screencap():
    commands.getoutput('sh ./ScreenShot.sh')
    t=threading.Timer(0.1,screencap)
    t.start()
    
t=threading.Timer(0.1,screencap)
t.start()

SimpleHTTPServer.test()

#p=Pool(1)
#p.map(SimpleHTTPServer.test(),[])

