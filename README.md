# Firebase onAuthStateChanged Unsubscribe Bug

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.  Failure to unsubscribe can result in memory leaks and unexpected behavior in your application.

The `authBug.js` file shows the problematic code. The `authBugSolution.js` file provides the correct implementation with proper unsubscription.

## How to reproduce

1. Clone this repository.
2. Install dependencies (if applicable).
3. Run the application.  Observe potential memory issues or unexpected behavior in `authBug.js`.
4. Compare the behavior with the corrected code in `authBugSolution.js`.

## Solution

Always remember to call the `unsubscribe()` function returned by `onAuthStateChanged` when you no longer need the listener.  This is typically done in a component's `componentWillUnmount` lifecycle method (React) or equivalent cleanup function in other frameworks.