# if
Conditional branching for Javascript

### Installation
```
npm install if
```

### Usage
If the condition is truthy, the handler function passed to `Then` will be called.
```js
If(condition).Then(handler);
```

A handler can be passed to the `Else` method, which will be called if the condition is not truthy.
```js
If(condition).Then(handler)
  .Else(handler);
```

To evaluate more conditions, call `If` after `Else`.
```js
If(condition).Then(handler)
  .Else().If(condition).Then(handler)
  .Else().If(condition).Then(handler);
```

### Example
```js
If(isRobot()).Then(function(){
    console.log('beep');
  }).Else().If(isHuman()).Then(function(){
    console.log('boop');
  }).Else(function(){
    console.log('?')
  });
```
