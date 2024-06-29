import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import './style.css';

// Nel tuo file JavaScript, puoi usare import() per caricare dinamicamente moduli
// button.onclick = function() {
//     import('./path/to/module.js')
//       .then(module => {
//         module.loadFunction(); // Funzione esportata da module.js
//       })
//       .catch(err => {
//         console.log('Errore nel caricamento del modulo', err);
//       });
//   };

//   In questo esempio, il modulo specificato in import('./path/to/module.js') viene caricato solo quando l'utente clicca su un bottone. Webpack gestisce automaticamente la divisione del codice e crea un nuovo chunk che contiene solo il codice del modulo richiesto. Questo chunk viene poi caricato dinamicamente solo quando necessario.