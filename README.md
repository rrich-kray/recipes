# Recipes Search Engine

This serves as the repository for the Recipes project.

## Table of Contents

[Description](#description)  
[Installation](#installation)  
[How it works](#how-it-works)  
[Usage](#usage)  
[Utilizes](#utilizes)  
[Contact](#contact)  
[License](#license)

## Description

![main screenshot](./public/screen1.png)

Recipes utilizes the Spoonacular Recipes API to allow users to search for recipes using over 75 search criteria. All things considered, this project took much longer to get to the MVP stage than I had anticipated for a simple recipe search app, as I wanted to use it as an opportunity to gain familiarity with several new technologies, including TypeScript, Python and AWS Lambda, as well as learn a few new frontend tricks. In the future, I hope to extend this with its own server that provides user authentication capabilities, and also route those requests thorugh AWS Lambda.

## Installation

No installation required. Simply follow the link below to use the app.

[link]

## How it works

The project utilizes Axios to make requests to an AWS lambda function via a Next.js frontend. The AWS lambda function then forwards the request to the Spoonacular API and returns the results.

The AWS lambda function features a Python runtime environment, and all functionality therein is made available over the web via the FastAPI library. As it stands, the only functionality included is that which forwards the request to Spoonacular, but if I implement authentication in the future, I plan to forward associated requests using AWS lambda as well.

## Usage

In its current form, users can search for recipes using a single keyword, or use additional search criteria by hitting the button labeled with "advanced search". The section below will then be populated with results. Clicking on a individual recipe will open a page containing addiitional information, including preparation steps.

## Utilizes

- Next.js
- React.js
- HTML
- CSS
- JavaScript
- Spoonacular Recipes API
- Axios
- AWS Lambda
- Python
- FastAPI

## Contact

Email: rrich.kray.93@gmail.com

GitHub: https://github.com/rrich-kray/

Portfolio: https://react-portfolio-v2-rrich.herokuapp.com/

## License

Copyright (c) 2022, Ryan Kray
All rights reserved.

This source code is licensed under the BSD-style license found in the LICENSE file in the root directory of this source tree and reproduced below.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
3. All advertising materials mentioning features or use of this software must display the following acknowledgement: This product includes software developed by Ryan Kray.
4. Neither the name of this application's developer nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER ''AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
