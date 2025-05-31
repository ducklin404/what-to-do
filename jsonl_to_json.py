import json 


with open('activities.jsonl', 'r') as f:
    data = [json.loads(line) for line in f]

with open('activities.json', 'w') as f:
    json.dump(data, f)