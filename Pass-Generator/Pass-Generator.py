

"""

====Password generator====
BY    :Vasanth R
Date  :15/1/2019
Time  :9:10 PM(IST)

"""

import random

characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

def password(arr, passlen=12):
    random = arr[randoms(0, len(arr))]
    count = passlen
    password = ""
    
    for i in range(count):
        password = password + random
        random = arr[randoms(0, len(arr))]
        
    return password

def randoms(min, max):
    return random.randint(min, max)

print(password(characters))
