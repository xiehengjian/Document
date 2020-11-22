import requests
import json
url="http://hub.marginnote.cn:1200/"
res=requests.post(url,data=json.dumps({'a':"a"}))
print(res.text)