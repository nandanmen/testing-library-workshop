# Testing Library Workshop

Hello! This repository contains several exercises to help you get accustomed to testing your React components using `@testing-library/react`. The goal of each exercise is to **implement all of the pending tests using React Testing Library's APIs**.

## Getting Started

1. Clone this repository:

```
git clone https://github.com/narendrasss/testing-library-workshop.git
cd testing-library-workshop
```

2. Install dependencies:

```sh
# inside the testing-library-workshop folder
yarn install
```

3. Run the test:

```sh
yarn test <exercise-number>

# e.g. running exercise 1
yarn test 01
```

I'd recommend running the test in watch mode so they automatically rerun when you save the test file:

```sh
yarn test <exercise-number> --watch

# e.g. exercise 1
yarn test 01 --watch
```

## Exercise Structure

Each exercise lives in its own folder in the `src` directory. Inside each folder, you'll find three files:

1. A `<Component>.js` file that contains the implementation of the component you're testing;
2. A `<Component>.test.js` file that contains the tests you're implementing;
3. A `README.md` that contains any information you might need to know about that exercise.

## Resources

- Documentation: https://testing-library.com/docs/react-testing-library/intro/
