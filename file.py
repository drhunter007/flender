def addieren(a,b):
    print(a, "+", b)    
    return a + b
def subtrahieren(a,b):
    print(a, "-", b)
    return a - b
def multiplizieren(a,b):
    print ( a,"*", b)
    return a * b
def dividieren(a,b):
    print(a, "/", b)
    if b == 0:
        print("Division durch Null ist nicht erlaubt.")
        return None
    return a / b

frage= input("Wird es addiert, subtrahiert, multipliziert oder dividiert? ")
if frage == "+":
    a = int(input("Geben Sie die erste Zahl ein: "))
    b = int(input("Geben Sie die zweite Zahl ein: "))
    print("Ergebnis:", addieren(a, b))
elif frage == "-":
    a = int(input("Geben Sie die erste Zahl ein: "))
    b = int(input("Geben Sie die zweite Zahl ein: "))
    print("Ergebnis:", subtrahieren(a, b))
elif frage == "*":
    a = int(input("Geben Sie die erste Zahl ein: "))
    b = int(input("Geben Sie die zweite Zahl ein: "))
    print("Ergebnis:", multiplizieren(a, b))
elif frage == "/":
    a = int(input("Geben Sie die erste Zahl ein: "))
    b = int(input("Geben Sie die zweite Zahl ein: "))
    ergebnis = dividieren(a, b)
    if ergebnis is not None:
        print("Ergebnis:", ergebnis)
