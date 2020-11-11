
// 1. Varför loggas ingenting ut när man kör det här skriptet? 
// Det finns två fel. SVAR: för det är inge string,för att vi inte anropade den

// 2. Ändra scriptet så att "Hello, how are you today?" verkligen loggas ut.

function hello(name = 'Ilona') {
    console.log('Hello '+ name + ' how are you today?')
}
hello()

// 3. Uppdatera funktionen hello så att den tar ett namn som argument
// Gör så att den hälsar med namn, t.ex. "Hello Fredrik, how are you today?"
