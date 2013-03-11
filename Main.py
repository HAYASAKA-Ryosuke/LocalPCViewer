import SimpleHTTPServer
from multiprocessing import Pool
import commands
import time
while(True):
    commands.getoutput('sh ./ScreenShot.sh')
    time.sleep(0.2) 
#p=Pool(1)
#p.map(SimpleHTTPServer.test(),[])

