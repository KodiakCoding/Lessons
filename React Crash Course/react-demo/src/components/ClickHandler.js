export const ClickHandler = () => {
    const clickhandler = (event,count=1) => {
        console.log(count)
    }
    return(
        <div> 
            <button onClick={clickhandler}>Click</button>
            <button onClick={(event) => clickhandler(event,5)}>Click</button>
        </div>

    )
}