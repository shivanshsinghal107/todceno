# What is this?

An npm package just for testing if its created or not.

# Installation

`npm i todceno --save`

Now, to use this into any project...

```
import { todceno } from 'todceno';

todceno({
    shadow: 'hard',
    padding: true
});
```

## Options

Todceno supports 2 options, both are optional:

- *shadow* - _hard / soft_ (Default is soft)
- *padding* - _boolean_ (Default is false)