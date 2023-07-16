import { Card } from "../../components/Card/Card.js";
import { useAppContext } from "../../store/AppContext"; // conferir
import { openModalSavePinAction } from "../../store/actions.js"; // conferir

export const CardContainer = (props) => {
    const { state, dispatch } = useAppContext();
    
    const handleClick = (pinId) => {
        console.log('clicou', pinId);
        dispatch(openModalSavePinAction(pinId))
    }
    return (
        <Card {...props} onClick={handleClick}/>
    )
}