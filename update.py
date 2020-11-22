from flask import Flask 
import os
app=Flask(__name__)

@app.route('/update/blog',methods=["POST"])
def update():
    os.system("cd /Document && git fetch --all && git reset --hard origin/master && git pull")
    return "更新完成"
if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=1200)