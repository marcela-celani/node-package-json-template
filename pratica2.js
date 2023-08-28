import { countries } from './countries.js'

const findCountries = (input) => {
    const result = countries.find((country) => country.name.toLowerCase() === input.toLowerCase())
    return result
}

// console.table(countries)

console.table(findCountries(process.argv[2]))