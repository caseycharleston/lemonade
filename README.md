# Lemonade 🍋

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-mongoNode).
This project was created for the All in Hackathon, December 2023.

## Inspiration
As a college student with a limited amount of spending money, and as someone who wants to get into the startup world through investing, it can be difficult to find the startups that fit right with me. The popular startups that I hear about are already shooting for the moon and not looking for my spare change, and the ones that are just getting off the ground don't have the marketing budget to reach my ears. This is why I created **Lemonade**. A way for new investors to quickly learn about an up-and-coming startup, invest (a low-stakes amount!), and continue to keep tabs on how the company is doing.

## What it does

**For Investors**:
Browse through companies that have joined Lemonade. View their profile to get insight into their product, culture, and mission statement.

**For Companies**:
Advertise your new startup and get funding from people around the world. 

## How I built it
A MERN Stack:
Frontend: Reactjs
Backend: Nodejs + Expressjs server connecting to MongoDB database
Wallet system is done with Circle


## Challenges I ran into
I haven't done a solo hackathon nor have I implemented MongoDB or Circle before. It took quite a while for me to get the website in a modifiable state. I also had some trouble making a few design choices, especially when it come to how different I wanted the website to look for investors and for companies.

## Accomplishments that I'm proud of
- Built a working login/register system for the first time, hooked into MongoDB
- Built a web app using a MERN stack for the first time
- Made lemons appear and disappear on the profile page (maybe my proudest accomplishment)
- Separated the website out into an investor version and a company version

## What I learned
- How to integrate MongoDB with Reactjs
- How to use Circle wallet and a little more about Web3
- How to manage time at a solo hackathon
- How to use WebStorm from Jetbrains (an IDE I wanted to try out by doing this hackathon)

## What's next for Lemonade
As it exists now, only crypto transactions are possible. I also want to integrate Paypal's API and a card system to allow more payment options from investors. For companies, having an update system to investors, a monthly subscription option, and a rewards program (swag for investing, similar to Kickstarter) would give startups new and innovative ways to market themselves.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the mongoNode in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-mongoNode/docs/running-tests) for more information.

### `npm run build`

Builds the mongoNode for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your mongoNode is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-mongoNode/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
