import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as BikesPosActionCreators from "../store/actions/map"
import * as BusArrivalActionCreators from "../store/actions/busArrival";


//We use this hook to combine actions into one object
export const useActionsMap = () => {
    const dispatch = useDispatch();

    return bindActionCreators(BikesPosActionCreators, dispatch);
}

export const useActionsBus = () => {
    const dispatch = useDispatch();

    return bindActionCreators(BusArrivalActionCreators, dispatch);
}