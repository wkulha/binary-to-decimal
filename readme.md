# _Different Base Number Converter_

#### _A webpage that converts, binary, ternary, and hexadecimal numbers into decimal numbers , 10-6-2018_

#### By _**William Kulha**_

## Description

_This is a webpage that I made to practice BDD with learnhowtoprogram.com. It takes user input in the form of a string, and then returns that string as a number in decimal base._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
**Program Gathers User Input** | User input: '1101' | Output: '1101' |
**Program Makes an Array from Input** | User input: '1101' | Output: [1, 1, 0, 1] |
**Program Runs each Index of Array through a Loop to Tconvert** | Input: [1, 1, 0, 1] | Output: [(1x2^3), (1x2^2), (0x2^1), (1x2^0)] |
**Program Adds the Array and Displays the Result** | Input: [(1x2^3), (1x2^2), (0x2^1), (1x2^0)] | Output: 'The binarynumber 1101 is 13 as a decimal based number' |



## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/wkulha/binary-to-decimal.git</code>_
* _Navigate to the folder where you saved the directory._
* _Open with the browser of your choice and enjoy_


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you have any questions or advice, please email me at kulha.william@gmail.com_

## Technologies Used

_javascript_\
_jQuery_\
_Bootstrap 3_

### License

*This Base Number Converter Application is licensed under the MIT License*

Copyright (c) 2018 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
