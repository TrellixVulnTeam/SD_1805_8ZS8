import json
import requests

def post_bord(messy, dust, total_score, user_id):
    
    payload = {'messblue':str(messy),
               'smell':str(dust),
               'total_score':total_score,
               'user_id':user_id}
    url = 'https://morning-ravine-52217.herokuapp.com/messies'
    post = requests.post(url, params=payload)
    print("Sent post succesfully")
