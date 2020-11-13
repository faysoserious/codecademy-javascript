# CSS

## Transition

CSS Transitions have 4 components:

1. A property that will transition.
1. The duration which describes how long the transition takes.
1. The delay to pause before the transition will take place.
1. The timing function that describes the transition’s acceleration.

```css
.button span,
.button div,
.button i {
  transition: /*width 750ms ease-in 200ms, left 500ms ease-out 450ms,
  font-size 950ms linear*/
  all 1.2s ease-out 0.2s;
}
```

## Animation

```css
.hello {
  margin: 100 75;
  font-family: 'calibri';
  font-weight: bold;
  font-size: 48px;
  color: #2BAE66;
  animation: rightLeft 1s;
}

@keyframes rightLeft {
  /* Add stages below */
  30% {
    transform: translate(50px, 0px);
  }
  70% {
    transform: translate(-50px, 0px);
  }
}

body {
  background-color: #FCF6F5;
}
```