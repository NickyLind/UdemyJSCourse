# WHAT ARE PROMISES?

## Promises

_**Promise:**_ An object that is used as a placeholder for the future result of an asynchronous operation (EX: AJAX call)

_**Advantages to Promises**_

1. We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results

2. Instead of nesting callbacks (**Callback Hell**), we can **chain promises** for a sequence of asynchronous operations (**escaping Callback Hell**)

## The Promise LifeCycle

1. _**PENDING**_ (Promise is doing it's asynchronous task - **Before future value is available**)
2. _**SETTLED**_ (Asynchronous Promise has finished, either <span style="color:red">Rejected</span>(an **error** has occured) or <span style="color:green">Fulfilled</span>(Value is **available**))

Certain methods and functions **Build** promises which return us a promise to **consume**

<span style="color:orange">EX)</span> `fetch()` returns a promise from our API call for us the consume
