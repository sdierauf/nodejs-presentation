g++ primes.cc -o primes
echo "c++:\n"
time ./primes
echo "\nv8:\n"
time v8 primes.js