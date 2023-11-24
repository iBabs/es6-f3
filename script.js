//getElementsByTagName
//getElementsByClassName
//getElementById
//querySelector


// const see = document.querySelector('.see')
// const txt = document.querySelector('#txt')
// const submit = document.querySelector('#submit')


// submit.addEventListener('click', () => {

//     if (txt.value == '') {
//         alert('Input ca not be empty')
//     } else {
//         const p = document.createElement('p')
//         p.innerText = txt.value
//         p.classList.add('list')
//         const buton = document.createElement('button')
//         buton.innerText = 'x'
//         buton.classList.add('btn')
//         p.appendChild(buton)
//         see.appendChild(p)

//         buton.addEventListener('click', () => {
//             see.removeChild(p)
//         })
//     }
//     txt.value = ''
// })
// //Date and time
// const hour = document.querySelector('.hour')
// const minute = document.querySelector('.minute')
// const sec = document.querySelector('.sec')
// const mili = document.querySelector('.mili')



// function callDate() { }

// setInterval(() => {
//     const date = new Date()
//     hour.innerHTML = date.getHours()
//     minute.innerText = date.getMinutes()
//     sec.innerText = date.getSeconds()
//     mili.innerHTML = date.getUTCMilliseconds().toString().padStart(2, '0');
// }, 100);


// let pip = "John"
// let mim = 'Doe'

// // const proposal = confirm('Will you marry me?')

// // let message = proposal?"Plan a wedding":"Look for a better woman"

// // console.log(message)

// const arr = ['Blessing', 'Amaka', 'Chioma', 'Tolani', 'Aisha']
// const arrr = [23, 34, 19, 20, 29,45,62]
// const add = [...arr,...arrr]

// console.log(add)

// const joy ={
//     name: 'JoyX',
//     age: 20,
//     relation: "married",
//     children: 7,
//     occupation: 'Sugar Baby',
//     hobby: "Drift"
// }

// const {name, age, children, ...etc} = joy
// console.log(age)

// const addNum=(kuli)=> kuli*2




// for (let i in joy){
//     console.log(i +' : '+joy[i])
// }


// const even =arrr.filter(i=> i%2==0)
// console.log(even)
// const double = arrr.map(item => item * 2)
// console.log(double)

// const sum = arrr.reduce((a, c)=> a+c, 0)

// console.log(sum)


let students = [
    { name: 'Alice', mathScore: 85 },
    { name: 'Bob', mathScore: 72 },
    { name: 'Charlie', mathScore: 90 },
    { name: 'David', mathScore: 78 },
    { name: 'Ella', mathScore: 95 },
    { name: 'Frank', mathScore: 68 },
    { name: 'Grace', mathScore: 88 },
    { name: 'Hannah', mathScore: 82 },
    { name: 'Isaac', mathScore: 91 },
    { name: 'Jack', mathScore: 75 }
];

const choosen = students.filter(student => student.mathScore>=80).map(i=> i.name)



 console.log(choosen)
