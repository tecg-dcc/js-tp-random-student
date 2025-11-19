const students = [
    'Alyssa',
    'Chiara',
    'Isabella',
    'Jennifer',
    'Wassila',
    'Assia'
];
let currentIDX = 0;

function shuffleStudents() {
    for (let i = 0; i < students.length; i++) {
        const randomIDX = Math.floor(Math.random() * students.length);

        [
            students[randomIDX],
            students[i]
        ] = [
            students[i],
            students[randomIDX]
        ];
    }
}

shuffleStudents();

const pElement = document.createElement('p');

document.body.insertAdjacentElement('beforeend', pElement);

document.querySelector('form').addEventListener('submit', (evt) => {

    evt.preventDefault();
    if (currentIDX === students.length) {
        shuffleStudents();
        currentIDX = 0;
    }
    pElement.textContent = students[currentIDX];
    currentIDX++;
});
