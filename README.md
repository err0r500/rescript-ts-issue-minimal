run the `./src/main.res`

```
node ./lib/js/src/main.bs.js
```

```
i don't work
{ TAG: 0, _0: 12 }
I am supposed to be unreachable
---
i work
{ tag: 'Ok', value: 13 }
ok
```

Basically, it looks like the `Belt.Result.t` is modified when passed to typescript (but it's ok if it's consumed directly (using @genType) from typescript)
