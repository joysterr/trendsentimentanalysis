import re
import numpy
import os

store = []
with open('requirements.txt') as f:
    for line in f:
        store.append(line)
f.close()

store_new = []
for item in store:
    item = re.sub(r"\s+", '>=', item)
    if item.endswith('>='):
        item = item[:len(item)-2]
    store_new.append(item)
    store_new.append('\n')
    

file = open('requirements.txt', 'w+')
file.writelines(store_new)
file.close()