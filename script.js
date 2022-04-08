//BONUS: Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

const team = [
    {
        Nome: 'Wayne Barnett',
        Ruolo: 'Founder & CEO',
        Foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        Nome: 'Angela Caroll',
        Ruolo: 'Chief Editor',
        Foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        Nome: 'Walter Gordon',
        Ruolo: 'Office Manager',
        Foto: 'walter-gordon-office-manager.jpg'
    },
    {
        Nome: 'Angela Lopez',
        Ruolo: 'Social Media Manager',
        Foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        Nome: 'Scott Estrada',
        Ruolo: 'Developer',
        Foto: 'scott-estrada-developer.jpg'
    },
    {
        Nome: 'Barbara Ramos',
        Ruolo: 'Graphic Designer',
        Foto: 'barbara-ramos-graphic-designer.jpg'
    },
];

function printTeam() {
    let containerCard = document.getElementsByClassName('team-container');
    for (let i = 0; i < team.length; i++) {
        containerCard[0].innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="img/${team[i].Foto}" alt="${team[i].Nome}"/>
            </div>
            <div class="card-text">
                <h3>${team[i].Nome}</h3>
                <p>${team[i].Ruolo}</p>
            </div>
        </div>`
    }
}
printTeam();

// BONUS
function addMember() {
    const btn = document.getElementById('addMemberButton');
    btn.style.cursor = 'Pointer';
    const nome = document.getElementById('name');
    const ruolo = document.getElementById('role');
    const img = document.getElementById('image');
    
    btn.addEventListener('click', getValue);

    const image = [
        'new-team-member-01.jpg',
        'new-team-member-02.jpg',
        'new-team-member-03.jpg',
        'new-team-member-04.jpg' 
    ]
    console.log(image);

    function getValue() {
        const nuovoUtente = {
            Nome: `${nome.value}`,
            Ruolo: `${ruolo.value}`,
            Foto: `${img.value}`
        }
        team.push(nuovoUtente);
        printTeam();
    }
}

addMember();
