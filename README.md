# sudoku-app

Sudoku-App is a web application for generating  sudoku boards.

## Installation

Sudoku-App is containerized using [Docker](https://www.docker.com/).

Run in project root:
```bash
docker build . --tag sudoku:pre &&
docker run -p 80:8080 --name sudoku sudoku:pre
```
The application will be available at http://localhost.

## Usage

* Obtain a randomized sudoku board by clicking the REFRESH button or loading the page
* Click a cell to lock it and click REFRESH to obtain a new board with that cell's value maintained

## Authors

Stephanie Teltz (teltzs@gmail.com)

## Support

Contact the author directly for support.
