name = "Roneisha"
print(name)


def say_hello():
    print("Hello")
    print("I'm inside")
    

# calls
say_hello()


# data structures -> 114

#array js -> list python
prices = [2, 5, 12, 67, 14]
prices.append(9)

# sum all the prices
total = 0
for price in prices:
    total += price

print(total)


# dictionary
me = {
    "name": "Roneisha"
    "age": 42,
    "hobbies": []
    "address": {
        "street": "Tufts",
        "city": "Sanford"
    }
}

print(me)

# read
print(me["name"])

# warning: reading a key that does not exist
if "last" in me:
    print(me["last"])


# modify
me["age"] = 99

# add keys
me["last"] = "Inzunza"


print("THE END!!!")
