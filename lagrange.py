import sympy as sp

points = [(0, 0), (2000, 400), (10000, 1200)]

# Define the variable
x = sp.symbols('x')

# init polynomial
P = 0

# calculate lagrange polynomial
for i, (xi, yi) in enumerate(points):
    li = 1
    for j, (xj, yj) in enumerate(points):
        if i != j:
            li *= (x - xj) / (xi - xj)
    P += yi * li

# simplify and print
P = sp.simplify(P)
print(P)
