const app = document.getElementById('app');

function Article() {
    return (
        <div>
            <h4> Debugging  C Code </h4>
            <p>
                In this code: <br></br>

                The delete_dnodeint_at_index function is defined to delete a node at a given index.
                If the list is empty (*h == NULL), it returns -1 to indicate failure.
                If idx is 0, the head node needs to be deleted. The head is updated to the next node, and connections are adjusted. The old head is freed, and the function returns 1 to indicate success.
                If idx is not 0, the function iterates to the node at the specified index.
                It then adjusts the connections (next and prev) to skip the node to be deleted and connect the previous node to the next node.
                Finally, it frees the memory of the node to be deleted and returns 1 to indicate success.
            </p>
        </div>
    )
}

function Header({title, textAfterTitle, thirdProp}) {
    // console.log(props)
    return (<h1>{title ? title : 'Default Title'} {textAfterTitle} {thirdProp}</h1>);
}

function HomePage() {
    return (
        <div>
            <Header title="React 💙" textAfterTitle=" is the best!" />
            <p>
                Sample paragraph
            </p>
            <Article />
            <Header title="Develop. Preview. Ship. 🚀"  textAfterTitle="Anywhere!"/>
            <Header thirdProp="Do not show title and text after title"/>
        </div>
    );
}

ReactDOM.render(<HomePage />, app);
