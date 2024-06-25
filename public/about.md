#### Available APIs

The OpenLibrary at https://openlibrary.org/ has the following available APIs:

* Book Search - Search results for books, authors, and more.
* Work & Edition - Retrieve a specific work or edition by identifier.
* My Books - Retrieve books on a patron's public reading log.
* Authors - Retrieve an author and their works by author identifier.
* Subjects - Fetch books by subject name.
* Search inside - Search for matching text within millions of books.
* Partner - Formerly the "Read" API, fetch one or more books by library identifiers (ISBNs, OCLC, LCCNs).
* Covers - Fetch book covers by ISBN or Open Library identifier.
* Recent Changes - Programmatic access to changes across Open Library.
* Lists - Reading, modifying, or creating user lists.


#### Feature List

For the first iteration of this app, we will not support specific users logging in or maintaining their own lists. Based on the above API, we can produce an initial list of features as follows:

###### Titles
* Search for books based on title.
* Display result grid of books (represented by book covers).
* Clicking on a book shows detailed book information.
* Clicking on a books author shows detailed author information.

###### Subjects
* Search for books based on subject.
* Display result grid of books (represented by book covers).
* Allow clicking on a book for more information
* Clicking on a books author shows detailed author information.

###### Authors
* Search for authors based on name.
* Display result list of authors (each item contains general info).
* Clicking on an author shows detailed author information.
* Clicking on an authors book shows detailed book information.

###### Content
* Search for books based on content text they have.
* Display result grid of books (represented by book covers).
* Allow clicking on a book for more information
* Clicking on a books author shows detailed author information.

#### To Do
* Investigate and implement version 6 of react-router and lazy load routes.
* Add a color scheme picker that will provide light/dark modes.
* Investigate and utilise basic Redux Sagas.
* Use validation library to generate TS types from schema and validate data returned from API.
* Chunk features into separate files with lazy loading.
* Encode/escape strings to prevent XSS flaws.
* Implement an infinite scroll component to display book covers.
* Include the Abort Controller in api handling.
* Add Jest unit tests and full Cypress feature tests.

#### Routing
- Client-side routing is required for a simple page app. **React Router** is one of the most convenient and popular. It also accommodates parameters in routes which allows us to route to a page to edit a single movie (based on the unique id).

- The latest version of react-router (V6) attempts to separate the route configuration from the rendering. It also moves to using react hooks. It provides functionality for fetching data before rendering, lazy loading content, and specifying custom loaders per route. Alongside configuring routes using `Route` components, routes may also be configured using plain objects via the `createBrowserRouter` function.

- The entire app is still wrapped by the browser router, but now it is created via the `RouterProvider` component. 
In v5, we also wrapped the entire app with the `BrowserRouter`, but we could place our routes anywhere in our component tree (allowing us to maintain a header in the same place between routing). To achieve the same functionality in v6, we specify a base layout component for the base route (/) and then use react-routers `Outlet` component to indicate where the route content should be rendered.

- The information located at https://reactrouter.com/en/main/upgrading/v6-data is probably the best read for understanding the new V6 changes.

#### State Management

- State management could be handled using built-in React Contexts. However, as the app grows, the state becomes more complex. Updating this with a single reducer may cause unnecessary rendering. **React Redux** will ensure only the required sections are re-rendered.
- Also, **Redux Toolkit** uses the concept of state slices which greatly reduces the amount of boilerplate code we need to write.
- We have used **Redux Thunk** before. This offers simple middleware that allows us to write action creators. These return action functions (instead of the typical action objects). An action function can dispatch async actions, like API calls, and wait for results.
- We will use this project to investigate the use of **Redux Saga**. While these allow for more complex async handling, this app is still only performing basic search API functionality.

##### Redux
- In Redux Thunk, action creators can dispatch multiple actions, handle conditional logic, and perform asynchronous api calls before dispatching an action to the reducer.
- In Redux Saga, sagas listen for dispatched actions and then run generator functions to perform tasks responding to those actions.

Making API Calls with Redux Thunk
Redux Thunk is often used for making api calls within action creators. Within the thunk, you can then dispatch actions in response to the api call's response.

Redux saga handles api calls by pausing generator functions until the api response is received. The saga can then process the response or dispatch actions.

unlike Redux-Thunk, which utilizes callback functions, a Redux-Saga thread can be started, paused and cancelled from the main application with normal Redux actions.

#### Page layout

- The Search page should include a search field and display a grid view of the matching movies.
- The Recommendation page should be dedicated for recommendations features only. Again due to API limitations, any recommendations must be generated from the locally-stored viewing history.
- The Movie page should show detailed information about a movie. It should also provide controls to add / update / delete a user review.
- As there is only a comment and rating per review, a dedicated Review page is unnecessary. The Review input form can be incorporated into the Movie page.
- The About page will contain information about the construction of the application.

#### Components

- Each page (Search/ History / Recommendations / About) will have a common header. These can use common PageHeader and PosterImage components.
- The details of a movie are shown in both the Search page and the Movie page -  using a common MovieDetails component.
- The user star review is used in both the Movie page and the History page. Therefore this can be a common RatingStars component. 
- Any component populated by an async fetch will require loading and error components. These can be also be represented as common compensates.

#### Technical Considerations

- We configure the routes in a utility file. The route data is maintained in a map, that is referenced by enum keys. This allows us to avoid using the same route path string in multiple locations in the code.
- Bootstrap is an excellent library for responsiveness. Therefore we will use the React-bootstrap library, which is built specifically for react. It also provides useful navbar and form components.
- After searching for a movie, the response contains an IMDb ID. This ID is unique and we will use this when for referencing movies / reviews.
- The original idea was to group components into common, controls, pages etc. - based on their type. But as the project progressed, it was more useful to group them by their features. 
- Given that we are using typescript, Typedoc (rather than jsdoc) can be used for documentation. 
- There is no language localization - but the i18n library is used to prevent hard-coding strings throughout the app.


#### Local Storage

- To accommodate modifying and persisting the view history, we can use the local storage for this demo. We could directly access the local storage, but a more integrated solution would be to include the viewing history in the redux state. This allows us to perform redux actions on the slice as usual. We can subscribe to events on the store and persist it to local storage whenever it changes. Note to ensure this doesn't happen too quickly, we will throttle the storage function.
- The original thought was to use a Map to maintain the viewing history in local storage. However Maps are not serializable and not recommended for storing in redux either. Therefore we will use a simple JavaScript object which contains the unique IMDb ID as keys.
- Originally the Movie and Review models were classes and instantiated as such. However after research, redux it not able to serialize class instances. Therefore I switched to using typescript types, and created factory functions to build the objects when required.
- To make testing easier, I have included film information in a json. This will be loaded into the store as initial state and used for the viewing history.

#### Styling

- Sass is useful CSS pre-compiler. Also Bootstrap provides it's own styling via scss files. The Bootstrap scss file provides default values that we are overriding in the _bootstrap.scss partial.
- For convenience, the theme colors are separated in to the _colors.scss partial. Common app-specific styling is left in the main.scss file. This file is then imported into the app.


#### Testing

- Create React App comes already packaged with Jest. We will use this in combination with React Testing Library to unit test out components.
- 