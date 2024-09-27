# Tjekvik Frontend Dev Recruitment Task
Welcome, dear candidate, to the Frontend Developer position at Tjekvik. We’re very happy you found our position interesting and want to work with us.

The task is to implement a "language selection" feature for our product interface. It’s an actual task taken directly from our Sprint, so this is the kind of work you can expect to handle in your daily job.

## Objective
In this repository, you'll find the `Multi-Language Feature.fig` file. Your objective is to implement this feature. This means adding the missing elements to the top bar, and then showing the language selection screen after clicking on the flag in the top right corner. In addition, the root page elements need to be updated to match the new design found in the design files.

In the language selection screen, the selected language should become persisted between browser sessions after clicking on a language flag, and the user should be redirected to the root page.

You don't need to worry about the actual logic for text translations, so internationalization libraries are not allowed. The goal is to change the language setting and save it - it's enough to reflect the selected language in e.g., the app header.

## Sharing the solution
Please open a PR to this repository with your solution.

### Tips
- We'll look at how things look in the browser using 1280x1024 screen
  resolution (just like in the provided mockup). We'll also look how it looks at 1024x768px (it's up to you how the UI changes for this resolution).
- We'll look at the code, how it's structured, how easy it is to get familiar
  with it and change something.
- We'll definitely appreciate any glowing-shiny-bonusy stuff that shows your
  approach :-)
- We'd like to see tests in the solution. Unit,
integration, E2E... Doesn't matter. Any kind of tests counts!
- And last but not least, we'll look at the TypeScript code itself.

## What’s in the repo?
So, this repository is a bootstraped React application created with
`Nx`. Most interesting files for you are:

- `src/App.tsx` and `src/App.css` - just to start things off we added an initial
  component and CSS for you. Please feel free to refactor and make changes as you see fit. This is just a starting point. If you prefer to delete everything and start from scratch, that's also perfectly fine.

- `ui-screens/Multi-Language Feature.fig` - this is a Figma project exported by our designer that
  we’d like you to code. It's provided exactly how our developers get designs from our UI/UX designer. If you didn't work with Figma before, you can access it from: https://www.figma.com/

- If you would rather not create an account in Figma for this, you can also find all the screens exported to `.png` files in the `ui-screens` directory.

## Running the app
- At first you'll need to install all the dependencies with `npm install`
- Then start local development with `npm run dev`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode. The page will reload if you make edits.

### `npm run test`

Launches the test runner in the interactive watch mode.

## Learn More
You're always welcome to add, play and do whatever you think is reasonable with
the repo.

And in case of any problems or issues, feel free to reach me at
jakub.kozak@tjekvik.com.

## Timeframe
We estimate that this excercise would take approximately 4 hours. It is OK if you don't finish everything above, you're welcome to add comments explaining how you would approach or do things differently if you had more time available.

# Good luck & have fun :-)

