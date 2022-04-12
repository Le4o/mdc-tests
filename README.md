# mdc-tests

## Requirements
 - NodeJS >= 16.x
 - Jest >= 27.5.1

Each commit represents the stage of the mdc function based with the described mdc properties:

1. If _b > 0_ is a divisor of _a_, then _mdc(a, b) = b_
2. Any number that is a common divisor of _a_ and _b_ is also a divisor _mdc(a, b)_
3. Considering that all numbers are factors of _0_ then _mdc(a, 0) = |a|_
4. if _m_ is a non-negative integer then _mdc(m\*a, m*b) = m\*mdc(a, b)_
5. if _mdc(a, b) = 1_ then _mdc(a*b, c) = mdc(a, c) * mdc(b, c)_
6. _mdc(a, b) = mdc(b, a)_
7. _mdc(-a, b) = mdc(a, -b) = mdc(-a, -b) = mdc(a, b)_
8. If _a_ is a positive integer then _mdc(a, a) = a_
9. Calculating the greatest common divisor is an associative operation _mdc(a, mdc(b, c)) = mdc(mdc(a, b), c) = mdc(a, b, c)_
