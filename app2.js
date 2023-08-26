// iterating through lists

const app = document.getElementById("app");

function Header2({title}){
    return (
        <h1>{title}</h1>
    );
}

function Homepage2(){
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    return(
        <div>
            <Header2 title="Develop. Preview. Ship. 🚀" />
            <p>Check me out!</p>
            <Header2 title="About to loop through an array using map function" />
            <ul>
                {names.map((name)=> (
                    <li key={name} >{name}</li>
                ))}
            </ul>
        </div>
    )
}

ReactDOM.render(<Homepage2 />, app);