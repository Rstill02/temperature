from flask import Flask

app = Flask(_name_)

@app.get("/")
def home():
    return "Hello from flask"

@app.get("testing")
def test():
    return "Hello from another page"

# Create 2 more API (about and blog)
@app.get("/about")
def test():
    return "About Us"

@app.get("/blog")
def test()
    return "Blog"


app.run(debug=True)