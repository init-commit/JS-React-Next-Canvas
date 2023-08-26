// iterating through lists

const app = document.getElementById("app");

function Header2({title}){
    return (
        <h1>{title}</h1>
    );
}

// STATE and HOOKS

// Start learning state: handleLikeClick only

/**
 * React has a set of functions called hooks.
 * Hooks allow you to add additional logic such as state to your components.
 * You can think of state as any information in your UI that changes over time,
 * usually triggered by user interaction.
 * 
 * You can use state to store and increment the number of times
 * a user has clicked the like button.
 * In fact, this is what the React hook to manage state is called: useState()
 * 
 * 
 * useState() returns an array, and you can access and
 * use those array values inside your component using array destructuring:
 * 
 * The first item in the array is the state value
 * The second item in the array is a function to update the value.
 * Prefix it with set followed by the name of the variable you're updating
 * 
 * Clicking the button will now call the handleClick function, which calls
 * the setLikes state updater function with a single
 * argument of the current number of likes + 1
 */
function Homepage2(){
    const [likes, setLikes] = React.useState(0);
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    function handleLikeClick(){
        setLikes(likes + 1);
    }

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
            <button onClick={handleLikeClick}>Likes {likes}</button>
        </div>
    )
}

ReactDOM.render(<Homepage2 />, app);