### Data models

```javascript
interface PokeMonSpeciesData {
  id: number;
  name: string;
  flavor_text_entries: Array<FlavorText>;
}

interface FlavorText {
  flavor_text: string;
  language: Language;
}

interface Language {
  name: string;
  url: string;
}

interface PokeMon{
  id: number;
  name: string;
  desc:string
  shakespeareanDes:string;
  isFavourite:boolean
}
```

Add img url to PokeMon Model if time permits
