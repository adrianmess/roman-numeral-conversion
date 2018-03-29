# Roman Numeral Converter

#### A program that allows users to input a number and convert it to a Roman numeral, 3/29/2018

#### By **Ami Cooper & Adrian Messado**

## Description

A website created using HTML and JavaScript that will allow the user to convert regular numbers into Roman numerals.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program does not allow non-numbers** | User input: "word" | Output: "This is not a number. Please enter a number." |
| **Program does not allow input larger than 3999**| User Input: "4000" | Output: "This number is too large. Please enter another number." |
| **Program converts 1 to I**| User Input: "1" | Output: "I" |
| **Program converts 5 to V**| User Input: "5" | Output: "V" |
| **Program converts 10 to X**| User Input: "10" | Output: "X" |
| **Program converts 50 to L**| User Input: "50" | Output: "L" |
| **Program converts 100 to C**| User Input: "100" | Output: "C" |
| **Program converts 500 to D**| User Input: "500" | Output: "D" |
| **Program converts 1000 to M**| User Input: "1000" | Output: "M" |
<!-- | **Program converts 4 to IV**| User Input: "4" | Output: "IV" |
| **Program converts 9 to IX**| User Input: "9" | Output: "IX" |
| **Program converts 40 to XL**| User Input: "40" | Output: "XL" |
| **Program converts 90 to XC**| User Input: "90" | Output: "XC" |
| **Program converts 400 to CD**| User Input: "400" | Output: "CD" |
| **Program converts 900 to CM**| User Input: "900" | Output: "CM" | -->
| **Program converts a 4 in the ones column to IV**| User Input: "14" | Output: "XIV" |
| **Program converts a 9 to in the ones column to IX**| User Input: "19" | Output: "XIX" |
| **Program converts a 4 in the tens column to XL**| User Input: "140" | Output: "CXL" |
| **Program converts a 9 in the tens column to XC**| User Input: "190" | Output: "CXC" |
| **Program converts a 4 in the hundreds column to CD**| User Input: "1400" | Output: "MCD" |
| **Program converts a 9 in the hundreds column to CM**| User Input: "1900" | Output: "MCM" |

## Setup/Installation Requirements

1. To run this program, you must have a C# compiler. I use [Mono](http://www.mono-project.com).
2. Install the [Nancy](http://nancyfx.org/) framework to use the view engine. Follow the link for installation instructions.
3. Clone this repository.
4. Open the command line--I use PowerShell--and navigate into the repository. Use the command "dnx kestrel" to start the server.
5. On your browser, navigate to "localhost:5004" and enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* C#
  * Nancy framework
  * Razor View Engine
  * ASP.NET Kestrel HTTP server
  * xUnit

* HTML

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Marilyn Carlin, David Wilson}_**
