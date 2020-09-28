# sudoku

Sudoku is a web application for generating complete sudoku boards.

Features:

* Obtain a randomized, solved sudoku board
* "Lock" a single cell on the board, maintaining that cell's value when a new board is obtained

## Installation

Sudoku is containerized using [Docker](https://www.docker.com/). A launch script is available for convenience, which will build and deploy the source code to localhost without installing project files locally (this requires an internet connection). You can also install manually.

Launch Script
<sudoku.sh>

Manual Installation
```bash
git clone git@github.com:StephTeltz/sudoku.git && cd sudoku
docker build . --tag sudoku
docker run -d -p 80:8080 sudoku
curl -i localhost
```
You can now navigate to the app at localhost via your browser.

## Usage

tbd

## Changelog

See CHANGELOG.md

## Authors

Stephanie Teltz (teltzs@gmail.com) [GitHub](https://github.com/StephTeltz/)

## Support

Contact the author directly for support.
