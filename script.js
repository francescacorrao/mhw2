//mostra trama 
function dettagli(event){
    const t = event.currentTarget;
    const div= t.parentNode;
    const d= div.querySelector('.trama');
    d.classList.remove('hidden');
    t.removeEventListener("click", dettagli);
    t.textContent="mostra meno";
    t.addEventListener("click", meno);
}

//nascondi trama
function meno(event){
    const t = event.currentTarget;
    const div= t.parentNode;
    const d= div.querySelector('.trama');
    d.classList.add('hidden');
    t.removeEventListener("click", meno);
    t.textContent="mostra trama";
    t.addEventListener("click", dettagli);
}

//aggiungi ai preferiti
function preferiti(event){
    const p= document.querySelector('#pref');
    if(p.classList= 'hidden'){
        p.classList.remove('hidden');
        p.classList.add('fb');
    }
    const t=event.currentTarget;
    t.classList.add('hidden');
    const r= t.parentNode;
    const s=r.parentNode;
    const d= document.createElement('div');
    d.classList.add('main');
    const head= document.createElement('div');
    head.classList.add('fb');
    const titolo= document.createElement('h3');
    titolo.textContent = s.querySelector('h3').textContent;
    const stella= document.createElement('img');
    stella.classList.add('stella');
    stella.src= "preferiti.png";
    stella.addEventListener("click", rimuovi);
    head.appendChild(titolo);
    head.appendChild(stella);
    const immagine=document.createElement('img');
    immagine.src = s.querySelector('.copertina').src;
    d.appendChild(head);
    d.appendChild(immagine);
    const preferiti= document.querySelector("#preferiti");
    preferiti.appendChild(d);
}

//rimuovi dai preferiti
function rimuovi(event){
    const t = event.currentTarget;
    const p= t.parentNode;
    const r= p.parentNode;
    const titolo= p.querySelector('h3').textContent;
    let serie = document.querySelectorAll('.serie div .fb');
    for(d of serie){
        console.log(d);
        if(d.querySelector('h3').textContent===titolo){
            const s= d.querySelector('img');
            s.classList.remove('hidden');
            s.addEventListener("click", preferiti);
            break;
        }
    }
    r.remove();
    scompari();
}

//scompare la sezione preferiti se è vuota
function scompari(){
    if(document.querySelector("#preferiti div") === null){
        document.querySelector("#pref").classList.add('hidden');
    }

}

//ricerca
function ricerca(event){
    const target= event.currentTarget;    
    const serie = document.querySelectorAll('.serie div .fb');
        for(d of serie){
            if(!(d.querySelector('h3').textContent.toUpperCase().includes(target.value.toUpperCase())) && target.value!== ''){
            d.parentNode.classList.remove('main');
            d.parentNode.classList.add('hidden');
            }
            else{
            d.parentNode.classList.remove('hidden');
            d.parentNode.classList.add('main');
            }
            
        }
}

//inserimento dinamico
const div= document.querySelector( '.serie');
let i= 0;
while(i<title.length){
    const serie= document.createElement('div');
    serie.classList.add('main');
    const head= document.createElement('div');
    head.classList.add('fb');
    const titolo= document.createElement('h3');
    titolo.textContent = title[i];
    const stella= document.createElement('img');
    stella.classList.add('stella');
    stella.src= "stella.png";
    stella.addEventListener("click", preferiti);
    head.appendChild(titolo);
    head.appendChild(stella);
    const immagine=document.createElement('img');
    immagine.classList.add('copertina');
    immagine.src = image[i];
    const descrizione= document.createElement('p');
    descrizione.textContent=denscription[i];
    descrizione.classList.add('hidden');
    descrizione.classList.add('trama');
    const genere = document.createElement('div');
    genere.textContent= generi[i];
    const tasto= document.createElement('div');
    tasto.textContent="mostra trama";
    tasto.addEventListener("click", dettagli);
    serie.appendChild(head);
    serie.appendChild(immagine);
    serie.appendChild(descrizione);
    serie.appendChild(genere);
    serie.appendChild(tasto);-
    div.appendChild(serie);
    i++;
}


const input= document.querySelector('input');
input.addEventListener('keyup', ricerca);

