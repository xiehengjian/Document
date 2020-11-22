from flask import Flask 
from git import Repo
import os
app=Flask(__name__)

@app.route('/update/blog',methods=["POST"])
def update():
    r = Repo("/Document/")
    r.remote().pull()
    os.system("cd /Document/ && npm run build")
if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=1200)