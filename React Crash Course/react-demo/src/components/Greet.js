export const Greet = (props) =>{
    return (
    <div>
        <h1 className="text-3xl font-bold mb-4">
            Hello {props.name} aka {props.heroName} 
        </h1> 
        {props.children}
    </div>)
}

