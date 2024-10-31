const pokeBall=[{

    "nome":"Darkrai",

    "descricao":"Taque o terror nos sonhos de vitória dos seus oponentes! Darkrai está com tudo pronto para mostrar seus piores pesadelos no Pokémon UNITE.",

    "ataque":4.5,
    "resistencia":1.5,
    "mobilidade":3,
    "pontuacao":2,
    "apoio":2,
    "url":"../assets/stat-darkrai.png"
},

{

    "nome":"Mimikyu",

    "descricao":"Não é só fantasia, é feitiçaria das brabas com esse combatente Corpo a corpo Versátil forte e assustador. Mimikyu está pronto para jogar duro contra a competição no Pokémon UNITE.",

    "ataque":4,
    "resistencia":2.5,
    "mobilidade":3.5,
    "pontuacao":1,
    "apoio":1,
    "url":"../assets/stat-mimikyu.png"
},

{

    "nome":"Mew",

    "descricao":"Mande a competição à loucura com este Atacante de Longo alcance malandro na Ilha de Aeos. Mew está pronto para confundir a concorrência com uma infinidade de movimentos em Pokémon UNITE!",

    "ataque":4,
    "resistencia":2,
    "mobilidade":3,
    "pontuacao":2,
    "apoio":3,
    "url":"../assets/stat-mew.png"
}

]

{/* <div class="card" style="width: 18rem;">
<img src="/assets/stat-mimikyu.png" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Nome</h5>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}

const cards=document.querySelector("#cards");

console.log(cards)

for (var i=0; i<pokeBall.length;i++){

    cards.innerHTML+= `<div class="card" style="width: 18rem;">
    <img src= ${pokeBall[i].url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Nome</h5>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div> `
}