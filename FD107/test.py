print("Hello world!")
# let variable = 21;
name = "Roneisha"
last_name = "Still"
total = 12.99
age = 42
found = True
# if / else statement
# if(var==var2){
    # logic
    #}
if age > 100:
        print("don't worry you're not that old")
        print("this is only an example")
elif age == 1:
        print("congrats you're a century")
else:
        print("Sorry, seems that you're old!")

    #function
    # function say_hello(){}

def say_hello():
        print("Hello there")

def say_goodbye(name):
        print("Goodbye"+ name)

        #call a function
        say_hello()
        say_goodbye(" Roneisha")

        #concatenate
        print(" Hello my name is"+ name + " and i have"+ str(age) +" years old")

        #array
        #list
        color = ["white","red","black","blue"]
        print(color)
        #add
        color.append("pink")
        print(color)
        #travel the list
        for colors in color:
            print(colors)
        # for(i=0;color.len;i++)
            # let temp = color[i]
            # console.log(temp)
