# sort_airports.py
# Wair

f = open('../json/airports', 'r')
fi = f.read()

lines = fi.split('\n')
airports = []
for i in lines:
    words = i.split(' ')
    entry = []
    for word in words:
        word = word.replace('\t', '')
        if word != ' ':
            entry.append(word)
    airports.append(entry)

d = {}
for entry in airports:
    d[entry[0]] = {"code": entry[0], "name": entry[1], "country": entry[2]}

string = str(d)
string = string.replace("'", '"')
string = string.replace("United", "United Kingdom")

f = open('../json/airports.json', 'w')
f.write(string)
f.close()

