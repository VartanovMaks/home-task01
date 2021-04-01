import './App.css';
import React, {useState} from 'react';

// 3 задача з зірочкою) кожна карточка з завдання вище має мати кнопку,
// по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, щоб
// вернути все назад (ця кнопка одна дня всіх карточок, клікнули
// по ній і всі каркти вернулись назазд) (згадування функції фільтр в лекції
// було не просто так)

let posters = [
    {id: 1, img: 'img/213px-Looper_xlg.jpg', name: 'Петля времени', year: 2012},
    {id: 2, img: 'img/225px-Die_Hard.gif', name: 'Крепкий орешек', year: 1988},
    {id: 3, img: 'img/Девять_ярдов_(постер).jpg', name: 'Девять ярдов', year: 2000},
    {id: 4, img: "img/216px-Armageddon-poster.jpg", name: 'Армагеддон', year: 1998},
]

const Poster = ({poster: {name, year, img, id}, clickPosterButton}) => (
    <div className='poster-card'>
        <h3>{name}.</h3>
        <p>{year} год.</p>
        <img src={img} alt={name} id={id}/>
        <PosterButton d={id} clickPosterButton={clickPosterButton}/>
    </div>
)

const PosterButton = ({d, clickPosterButton}) => (
    // кнопка отримує id таке саме як і постер id
    <button onClick={()=>{clickPosterButton(d)}} > Видалити постер </button>
)

function App() {
    // У стейті зберігаємо весь масив, та змінну напрямку видалення
    const [state, setState] = useState([...posters])

    // const clickPosterButton = (id) => {
    //     let newPstrs = state.filter(p => p.id !== id)
    //     setState([...newPstrs])
    // }

    // second variant
    const clickPosterButton = (id) => {
        setState(prevState=>{
            return [...prevState.filter(p => p.id !== id)]
        })
    }

    const clickReset = () => {
        // заганяємо у стейт масив заново
        setState([...posters])
    }

    return (
        <div className="App">
            <button onClick={clickReset}> Reset</button>
            <div className="cards">
                {
                    state.map(poster =>
                        <Poster key={poster.id} poster={poster} clickPosterButton={clickPosterButton}/>)
                }
            </div>
        </div>
    );
}

export default App;
