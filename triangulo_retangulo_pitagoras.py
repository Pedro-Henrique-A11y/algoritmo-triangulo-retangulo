# Fazer um algoritmo para verificar se um triângulo é retângulo (Teorema de 
#Pitágoras). Considerar os lados reais.#

lado_1 = float(input("Digite o valor do primeiro lado:"))
lado_2 = float(input("Digite o valor do segundo lado:"))
lado_3 = float(input("Digite o valor do terceiro lado:"))
if (lado_1**2) + (lado_2**2) == (lado_3**2):
    print("O triângulo é retângulo")
elif (lado_1**2) + (lado_3**2) == (lado_2**2):
    print("O triângulo é retângulo")
else:
    print("O triângulo não é retângulo")
    