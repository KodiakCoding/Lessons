import { ChildComponent } from "./ChildComponent"

export const ParentComponent = ({childName}) => {
    const greetParent = () => {alert(childName)

        
    }
    return <ChildComponent greetHandler={greetParent}/>
}