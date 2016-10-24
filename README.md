# Movied — React Standalone

You have to implement a tool for the Movied app that lets the user check movies as seen.

![](screenshot.png)

It will help you understand bare React having no other dependencies and focusing on core concepts.

## Dependencies

- Use JavaScript's [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for api consuming.
- We're using [Material UI](http://www.material-ui.com/) for UI components

## Requirements

- It should render the list of movies provided at `https://movied.herokuapp.com/discover`
- Every movie should have an associated button that will mark it as seen.
- When a movie is seen, the associated button should disappear and its opacity has to go down to `0.5`
- The logic of this behavior shouldn't be on the movie render component neither in the movie list component.

## Extra Credits

- Add a fade to the opacity change.
- Persist the changes on the browser.