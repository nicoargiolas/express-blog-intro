// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

app.get('/bacheca/', (req, res) => {
    const bacheca = [
        {
            'titolo': 'Ciambellone',
            'contenuto': 'Il ciambellone è un dolce soffice a forma di anello, ideale per colazione o merenda',
            'immagine': 'http://localhost:3000/img/ciambellone.jpeg',
            'tags': ['ciambellone', 'dolce', 'soffice']
        },
        {
            'titolo': 'Cracker alla barbabietola',
            'contenuto': 'I cracker alla barbabietola sono snack croccanti e saporiti, con un colore vivace e un gusto leggermente dolce.',
            'immagine': 'http://localhost:3000/img/cracker_barbabietola.jpeg',
            'tags': ['cracker', 'barbabietola', 'croccanti']
        },
        {
            'titolo': 'Pane fritto dolce',
            'contenuto': 'Il pane fritto dolce è una golosa frittella dorata, croccante fuori e morbida dentro, spesso cosparsa di zucchero.',
            'immagine': 'http://localhost:3000/img/pane_fritto_dolce.jpeg',
            'tags': ['panefritto', 'dolce', 'frittella']
        },
        {
            'titolo': 'Pasta alla barbabietola',
            'contenuto': 'La pasta alla barbabietola è un primo piatto colorato e cremoso, dal sapore dolce e delicato.',
            'immagine': 'http://localhost:3000/img/pasta_barbabietola.jpeg',
            'tags': ['pasta', 'barbabietola', 'colorato', 'delicato']
        },
        {
            'titolo': 'Torta paesana',
            'contenuto': 'La torta paesana è un dolce soffice e profumato, con un gusto intenso e una nota fresca.',
            'immagine': 'http://localhost:3000/img/torta_paesana.jpeg',
            'tags': ['torta', 'dolce', 'soffice']
        },
    ];

    res.json(bacheca);
});

app.listen(port, () => {
    console.log("App listening");
});