/* 
Aufgabenstellung


Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.

Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
Verwende map() und greife auf alle name zu.
Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
Verwende map() und greife auf alle preiseGramEuro zu.
Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
Verwende map() und greife auf alle veraenderung zu.
Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu
Gib alles als Tabelle in deinem HTML-Dokument aus.
*/

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];
