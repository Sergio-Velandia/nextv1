import Props from "./props"
import { useAppContext } from "../contexto/AppContext"


export default function Uno(){
    return (
        <div>

            <p>Este es Uno</p>
            <Props nombre="este es un props" />

        </div>
    );
}