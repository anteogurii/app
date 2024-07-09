export interface Continents {
    name:string,
    code:string,
}

export interface Continent{
 countries:BaseCountry[]
}

export interface Country extends BaseCountry{
    currencies:string[]
    capital:string
    languages:[{name:string}]
}

interface BaseCountry{
    name:string
    emoji:string
    code:string
}
