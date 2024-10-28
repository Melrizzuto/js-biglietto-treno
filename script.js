

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 - il prezzo del biglietto è definito in base ai km (0.21 € al km)
 - va applicato uno sconto del 20% per i minorenni
 - va applicato uno sconto del 40% per gli over 65.
 - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
 Questo richiederà un minimo di ricerca. */

/*  obiettivo esercizio:
- Il prezzo finale con max 2 decimali.

i dati da definire:
- il prezzo del biglietto 
- lo sconto che bisogna applicare in base all'età
- prezzo totale del viaggio senza sconto

raccolta dati:
- età passeggero
- quanti km l'utente vuole percorrere

dati noti:
- prezzo per km: 0.21€
- la percentuale di sconto applicata in base la fascia d'età:
   - Young (>18 anni): 20%
   - Senior (<65 anni): 40%
*/

"use strict"
console.clear();

const priceKm = 0.21;
const youngDiscount = 20;
const seniorDiscount = 40;

console.log(priceKm);
console.log(youngDiscount);
console.log(seniorDiscount);

const km = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));
const age = parseInt(prompt("Inserisci l'età del passeggero:"));


let totalPrice = priceKm * km;
let result;
let discountApplied = ""; 

console.log(totalPrice);

// Condizioni per applicare gli sconti

if (age < 18) {
    result = totalPrice - (totalPrice * youngDiscount / 100); 
    discountApplied = "young (20%)";
    console.log("Lo sconto utilizzato è quello " + discountApplied + ", il prezzo totale è: €" + result.toFixed(2));
} else if (age > 65) {
    result = totalPrice - (totalPrice * seniorDiscount / 100);
    discountApplied = "senior (40%)";
    console.log("Lo sconto utilizzato è quello " + discountApplied + ", il prezzo totale è: €" + result.toFixed(2));
} else {
    result = totalPrice;
    discountApplied = "nessuno sconto applicato";
    console.log("Non è previsto nessuno sconto. Il prezzo totale è: €" + totalPrice.toFixed(2));
}

