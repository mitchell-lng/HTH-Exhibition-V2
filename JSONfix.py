import json

groups = 22

f = open("original.json", "r")
x = json.loads(f.read())
y = []

for i in range(groups):
    name = "Group " + str(i + 1)
    y.append({"name": name, "students": [], "link": ""})

for i in range(groups):
    s = []
    for z in x:
        if z["groupNumber"] == "Group " + str(i + 1):
            s.append(z["student"])

    y[i]["students"] = s

r = open("groups.json", "w")
r.write(json.dumps(y, indent=4, sort_keys=True))