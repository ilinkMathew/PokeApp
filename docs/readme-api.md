APIs Notes

Pokemon Species API

`https://pokeapi.co/api/v2/pokemon-species/{id or name}/`

### Sample Response

```json
{
   "id":413,
   "name":"wormadam",
   ....
   "flavor_text_entries":[
      {
         "flavor_text":"It keeps its tail\nraised to monitor\nits surroundings.\fIf you yank its\ntail, it will try\nto bite you.",
         "language":{
            "name":"en",
            "url":"https://pokeapi.co/api/v2/language/9/"
         },
         "version":{
            "name":"yellow",
            "url":"https://pokeapi.co/api/v2/version/3/"
         }
      }
   ]
   ...
}
```

The `flavor_text_entries` is an arrray of flavor_text. So for the requirement we need to filter the array by browser language and choose the first entry from the filtered array

### Shakespeare Translator API

```
https://api.funtranslations.com/translate/shakespeare.json?text="text_to_be_translated"

```

### Sample Response

```json
{
  "success": {
    "total": 1
  },
  "contents": {
    "translated": "\"'t keeps its tail\\nraised to monitor\\nits surroundings.\\fif thee yank its\\ntail,  'twill tryeth\\nto bite thee.\"",
    "text": "\"It keeps its tail\\nraised to monitor\\nits surroundings.\\fIf you yank its\\ntail, it will try\\nto bite you.\"",
    "translation": "shakespeare"
  }
}
```
