<br />
<div align="center">

  <h1 align="center">Excel Formula Parser</h3>
  
  </div>
<br/>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#Run the project using Docker images">Run the project using Docker images</a></li>
        <li><a href="#Run the project after cloning it from Github">Run the project after cloning it from Github</a>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
  
  </br>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a Node.js Microservice. It parses Excel formulas when given a 2D array in JSON format via a HTTP POST request.

### Built With

- Node.js, Express

<!-- GETTING STARTED -->

## Getting Started

You can run this application in two ways:

- Run the project image on Docker after pulling it from Docker Hub.
- Clone the project from Github and install the dependencies by yourself.

### 1. Run the project using Docker images

1. Download and install <a href="https://www.docker.com/products/docker-desktop/">Docker</a> and <a href="https://git-scm.com/downloads">Git</a>.
2. Pull the <a href="https://hub.docker.com/r/zupersaski/excel-formula-parser">project Docker image</a> from Docker Hub.
   To do so, open a Terminal and run the command below:
   ```sh
    docker pull zupersaski/excel-formula-parser
   ```
3. Run the microservice by typing the command below:
   ```sh
    docker run -dp 3030:3030 excel-formula-parser
   ```

### 2. Run the project by cloning it from Github

1. Open the <a href="https://github.com/Rampage95/SASOL_TTEST_OPTIONAL">project Github repository</a>.
2. Clone the project.
3. Open the project in an Integrated Development Environment (IDE) (like VSCode, Intellij...)
4. Open a Terminal and run the microservice by typing the commands below:
   ```sh
    npm install
   ```
   ```sh
    node main.js
   ```    

## Usage:

After running the microservice successfully, a message will be logged in the console saying `The server is listening on port 3030`.

### Test with POSTMAN


<!-- CONTACT -->

## Contact

Saifeddine Skini - [@LinkedIn](https://www.linkedin.com/in/skini-saifeddine-6018a9189/) - skini.channel@gmail.com

Project Link: [https://github.com/Rampage95/product_catalog](https://github.com/Rampage95/product_catalog)
