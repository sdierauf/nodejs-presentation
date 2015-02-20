import sys
import math

def get_primes(n):
    numbers = set(range(n, 1, -1))
    primes = []
    while numbers:
        p = numbers.pop()
        primes.append(p)
        numbers.difference_update(set(range(p*2, n+1, p)))
    return primes

def main(argv):

  if (len(sys.argv) != 2):
    sys.exit('Usage: prime_numbers4.py <nth_prime>')

  print get_primes(287108)

if __name__ == "__main__":
  main(sys.argv[1:])


