# `02` Rendering von Objekten
[![Statusübersicht Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)


Verwenden wir nun eine komplexere Variable, um unser HTML zu rendern. Nehmen wir an, wir haben das folgende JS-Objekt, das eine Kundeninformation enthält:

```js
const customer = {
    first_name: 'Bob',
    last_name: 'Dylan'
};
```

Um eine beliebige Eigenschaft des Objekts "Customer" abzurufen, müssen wir den Punkt-Operator wie folgt verwenden:

```js
console.log(customer.first_name); // will print "Bob" on the console.
```

# :speech_balloon: Anweisungen

Öffne die Datei `index.js` und erstelle den nötigen Code, damit deine Datei die folgende Ausgabe in das DOM überträgt:

```jsx
<div>
    <h1>My name is Bob</h1>
    <h2>My last name is Dylan</h2>
</div>
```

[//]: # (autograding info start)
## Ergebnisse


### 1.App

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Oberste App-Komponente sollte mit Kundenrequisiten gerendert werden |



[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/SPA-boilerplate-rendering-dynamic-data/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-boilerplate-rendering-dynamic-data&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FSPA-boilerplate-rendering-dynamic-data)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/SPA-boilerplate-rendering-dynamic-data/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
