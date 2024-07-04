def minimum_bars(A):
    barStandar=200
    minimumbars=0
    # Ordenar por tamaño de barras necesario de manera descendente
    A.sort(reverse=True, key=lambda x: x[0])
    print(A)
    barsUsed = [0] * len(A)
    for i in range (len(A)):
        while A[i][1]>0:
            print(barsUsed)
            rest=barStandar - A[i][0]
            barsUsed[i] += 1
            minimumbars += 1
            A[i][1] -= 1
            for j in range (i,len(A)):
                if A[j][0]<=rest and A[j][1]>0:
                    # print(f"rest: {rest}")
                    # print(f"barra: {A[j][0]}")
                    rest = round(rest - A[j][0],1)
                    barsUsed[j] += 1
                    A[j][1] -= 1
                    # units_needed = round(rest / A[j][0])
                    # units_to_take = min(A[j][1], units_needed)
                    # rest = round(rest - (units_to_take * A[j][0]),1)
                    # barsUsed[j] += units_to_take
                    # A[j][1] -= units_to_take
    return minimumbars
# Ejemplo de uso con tu matriz A
A = [
    [150, 189],
    [107.6, 33],
    [106, 36],
    [102, 41],
    [100.4, 35],
    [64.4, 37],
    [61.6, 44],
    [59.6, 49],
    [40.2, 37],
    [32.4, 36],
    [29, 42],
    [22, 33],
    [17.2, 47],
    [16.4, 35],
    [13.2, 49], #3 barras de 200 me alcanzan para 45 ,   en la 4ta barra tomo 52.8 solamente y me sobra 147.2
    [10.2, 42] #la 4ta barra me da para 14, 28
]
# [
#     [150, 189], 
#     [107.6, 33], 
#     [106, 36], 
#     [102, 41], 
#     [100.4, 35], 
#     [64.4, 37], 
#     [61.6, 44], 
#     [59.6, 49], 
#     [40.2, 37], 
#     [32.4, 36], 
#     [29, 42], 
#     [22, 33], 
#     [17.2, 47], 
#     [16.4, 35], 
#     [13.2, 49], 
#     [10.2, 42]
# ]
# [38, 0, 0, 0, 0, 0, 0, 0, 37, 1, 0, 0, 1, 0, 0, 0]
min_bars = minimum_bars(A)
print(f"Mínima cantidad de barras de 200 necesarias: {min_bars}")
