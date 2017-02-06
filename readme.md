# Primtals faktorisator inator
Dette er et program som udregner primtalsfaktore til et nummer 

# Installation
1. Sørg for at du har [NodeJS](https://nodejs.org/en/) installeret. Dette program er lavet i version 6.2.2, men der burde ikke være problemer i nyere versioner
2. Klon eller download dette "repository" til en mappe
3. Åbn mappen med terminalen på Mac/Linux eller CMD på Windows
4. Kør commandoen "node bin/www" uden citattegn
5. Åbn din browser og gå til "localhost:3000"
6. Udregn primtal

# Bemærk!
Dette er lavet i Javascript. I Javascript er der en "maks" størrelse på heltal. Det vil sige at alle tal over det tal vil være uforudsigelige. 
Tallet er 2^53 - 1. I decimaltal er det 9007199254740991. Et eksempel på denne type uforudsigelighed vil kunne ses hvis man tester udtrykket 

```javascript
Math.pow(2, 53) === Math.pow(2, 53) + 1
```

vil javascript returnere "true" 