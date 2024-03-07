# BRL Currency Exchange

## Description

Built with Nextjs, the project is a simple page that fetches data from a currency API. The user can input a value in BRL (brazilian real), select another currency and then click the convert button to convert the value to the chosen currency.

You can access the project by clicking [here](https://brl-currency-exchange-app.vercel.app)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vicovaporub/brl-currency-exchange-app
   cd timezone-app

   ```

2. Install dependecies:

   ```bash
   npm install

   ```

3. Start:
   ```bash
   npm run dev
   (Open the browser and access the application at `http://localhost:3000`)
   ```

## Warning

If you want to run the project, it uses a .env variable that holds the api key. If you don't have a key for the api, there's a function that fetches data from a mock api, but remember that the mock api is not up to date with the values from all currencies.

## Usage

- Input a value in BRL.
- Select the currency for the conversion
- Click the convert button so the conversion happen
