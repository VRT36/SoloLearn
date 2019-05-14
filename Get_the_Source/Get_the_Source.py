"""
Get the source 
BY : V R T 
=================

=> Input 
eg. http://sololearn.com/

"""
from urllib.request import urlopen

def source():
 try:
    get = urlopen(a)
    source = get.read()
    print(source)
 except:
    print("An Error occurred :(")

a = input("URL\n")
source()
