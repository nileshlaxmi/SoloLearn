# SoloLearn

## This repository contains all challenges I have completed and submitted on SoloLearn.

### Below are challenges name:

## Spaces-from-String:
In this challenge, user can remove space between a sentence.

Given a string as input, output it without spaces.

```
For example:
string = "ab c  d e fgh i  j kl mn  opqr  stuvwxyz"
result = "abcdefghijklmnopqrstuvwxyz"
```

## Sort-a-String:
Given a string as input, output its characters alphabetically sorted from A to Z.
```
For Example:
Input: challenge
Output: aceeghlln

Number should go first:
Input: happy42
Output: 24ahppy

Special characters, such as symbols, go before numbers and letters:
Input: $tar3
Output: $3art
```

Whitespaces should be ignored.

## Roman-Number-Converter:
In this challenge, user can enter decimal number which will convert to its respective Roman number.

```
Romans Numerals are based on the following symbols:
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
```

## Scrabble:

Give a variable number of words, create a program to output the word with the maximum score, based on the following scoring system:
The score of a word is calculated based on its character values, according to this table:

e, a, i, o, n, r, t, l, s, u are equal 1 point

d, g	2 points

b, c, m, p	3 points

f, h, v, w, y 4 points

k 5 points

j, x 8 points

q, z 10 points

The max length of a word is 10 letters.

```
For example: 
input { "This",  "is", "a", "cool" , "Challenge" }
output : Challenge
```

## design-pattern-one:
Triangle (right angle triangle) Design implemented.

```
Pattern #1
1
22
333
4444
55555
and so on.

Pattern #2
1
12
123
1234
12345
and so on.

Pattern #3
1
13
135
1357
13579
and so on.

Pattern #4
0
01
010
0101
01010
and so on.
```
****
### Bonus: 
Reverse the design.
****

## Ugly-number:
A number is considered to be ugly if its only prime factors are 2, 3 or 5. 

[1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …] is the sequence of ugly numbers.

```
Hint:
An ugly number U can be expressed as: U = 2^a * 3^b * 5^c, where a, b and c are non-negative integers.
```

## Deficient-number:
A number is considered deficient if the sum of its factors is less than twice that number.

```
For Example:
10 is a deficient number.
Factors of 10 are 1, 2, 5, 10
Sum is 1 + 2 + 5 + 10 = 18 < 2 * 10
```

## Caesar Cipher:
Caesar cipher is one of the earliest known and simplest ciphers. It is a type of substitution cipher in which each letter in the plaintext is shifted to a certain number of places down the alphabet. For example, with a shift of 1, A would be replaced by B, B would become C, and so on. The method is named after Julius Caesar, who allegedly used it to communicate with his generals.

Here is a quick example of the encryption and decryption steps involved with the Caesar cipher. The text we will encrypt is "defend the east wall of the castle," with a shift (key) of 1.

```
Plaintext: "defend the east wall of the castle"
Ciphertext: "efgfoe uif fbtu xbmm pg uif dbtumf"
```

It is easy to see how each character in the plaintext is shifted up the alphabet. Decryption is just as easy, by using an offset of -1.

```
Another example:
Plaintext: "abcdefghijklmnopqrstuvwxyz"
Ciphertext: "bcdefghijklmnopqrstuvwxyza"
The text above is shifted by 1 offset.
```

## Emrip-number:
An emirp is a prime number that results in a different prime when its decimal digits are reversed. For example, 13 is an emirp number because both 13 and 31 are prime numbers.

```
For example:
Input: 17

Output: true (17 and 71 are prime numbers)

Input: 113

Output: true (113 and 311 are prime numbers)

Input: 23

Output: false (23 is a prime number, but 32 is not)
```
## Disarium Number:

A number is called a Disarium number if the sum of the powers of its digits equals the number itself. The digits are powered to their positions in the number.

```
For example:
Input: 135
Output: true
135 is a Disarium number because it equals to 1^1 + 3^2 + 5^3 (each digit powered to the position in the number).
```

## Trimorphic Number
A trimorphic number is a number whose cube ends in the number itself. 

```
For example:
Input: 4
Output: true (4^3 is 64, which ends in 4)

Input: 24
Output: true (24^3 = 13824)

Input: 249
Output: true (249^3 = 15438249)
```

## Howling-prime
A howling prime is a prime number if the sum of its digits is also a prime number.

```
For Example:
Input:113
Output: true (113 is a prime number, 1+1+3=5 is also a prime number)

Input: 89
Output: true (89 is a prime number, 8+9=17 is also a prime number)

Input: 19 
Output: false (19 is a prime number, but 1+9=10 is not a prime number)
```

## Spy Number
A number is called a Spy number, if the sum and product of its digits are equal.
For example, 123 is a Spy number, as the sum of its digits is 6 (1+2+3) which is equal to the product of its digits: 6 (1x2x3).

```
For example:
Input: 1412
Output: true

Input: 247
Output: false
```

## Armstrong Number
An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

For instance, a 3 digit number will be considered an Armstrong number if the sum of the cubes of its digits is equal to the number itself. 

```
For example, 153 is an Armstrong number, as 1**3 + 5**3 + 3**3 = 153
```

## Abundant Number 
If the sum of factors of a number is greater than twice that number, it is considered to be abundant.

```
For example:
12 is an abundant number.
Factors of 12 are 1, 2, 3, 4, 6, 12
Sum is 1 + 2 + 3 + 4 + 6 + 12 = 28 > 2 * 12
```
## Lab Number
A lab number is a number such that the square of any of its prime divisors is still one of its divisors.

```
For example:
Input: 8
Output: true (2 is a prime divisor of 8, and 2x2=4 is also a divisor of 8)

Input: 50
Output: true (5 is a prime divisor of 50, and 5x5=25 is also a divisor of 50)
```

## remove-special-characters
Remove all the special characters from a given string

Write a program to remove all the special characters from a given string and print the result.

Some examples of special characters: "@#₹_ƒ&-+`()/*{}€¥$¢~"

```
For example:

Input:
1. "H@e#&l+l/*o"
2. "$¥W¢πO}R|%L&@D"

Output:
1. Hello
2. WORLD
```

## password-validator
Password validator is a program that validates passwords to match specific rules. For example, the minimum length of the password must be eight characters long and it should have at least one uppercase letter in it. 

A valid password is the one that conforms to the following rules:

    * Minimum length is 5;
    * Maximum length is 10;
    * Should contain at least one number;
    * Should contain at least one special character (such as &, +, @, $, #, %, etc.);
    * Should not contain spaces.

```
Examples:
Input: "Sololearn"
Output: false

Input: "John Doe"
Output: false

Input: "$ololearn7"
Output: true
```

## happy-number
If the repeated sum of squares of the digits of a number is equal to 1, it is considered to be happy.

```
For Example:

23 is a happy number, as:

2 ^ 2 + 3 ^ 2 = 13
1 ^ 2 + 3 ^ 2 = 10
1 ^ 2 + 0 ^ 2 = 1


Sequence of happy numbers: 1, 7, 10, 13, 19, 23, ...
``` 

If the sum of squares of digits reaches 4, 1 can never be reached thus making the number unhappy or sad.

