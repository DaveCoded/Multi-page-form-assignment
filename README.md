# Multi-page form assignment

Hello there. Welcome to the project.

I decided to bootstrap it with create-react-app, so investigating it
should be fairly simple. Just clone the repository, run:

### `npm install`

and then you can run:

### `npm start`

to open the project locally on port:3000. Hopefully! Let me know if you
run into any issues.

## Styling

For larger projects, it might be better to use Styled Components or CSS
modules, which I like to use in conjunction with Sass. Rather than guessing
about a larger context this form would fit into, I thought I'd show you
that I can use Sass, BEM where appropriate and some folder architecture to
organise my styling.

## State Management

You'll notice that the only tool I've used to manage the app's global state
is React itself. I found that passing state between components remained
manageable - and hopefully readable - enough.

In the interest of making the project more extensible, introducing the use
of the Context API or Redux would be a good idea, depending on size and
how many components need to share state. I know you use the latter, but
unfortunately, I don't yet know Redux well enough to have introduced it in
good time. Otherwise I would have, just to show off.

## Testing

This is my first time trying to write tests and I didn't have time to learn
enough to use them effectively. Turns out it's an even larger topic than I'd
been aware of. As a result, the two unit tests included are just tokens of my
learning so far. I'll be diving into the subject further this week, looking at
Enzyme and react-test-renderer, and hopefully combining them with Jest to see
if I can write integration tests, end-to-end tests, and figure out what use
snapshot tests are.

If you have any advice on how to best go about picking up TDD, I'd appreciate
your sharing that with me.

Thank you for taking the time to look through my code. I hope it brings you
great pleasure. Failing that, I hope you can parse it easily enough.

Dave
