import React, {FC, useEffect, useState} from "react";
import {BusArrival} from "./BusArrival";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActionsBus} from "../../hooks/useActionsMap";

export const BusArrivalContainer: FC = () => {
    const {busArrivalInfo} = useTypeSelector(state => state.busArrivalReducer);
    const {fetchBusInfo} = useActionsBus();
    const [lineNumber, setLineNumber] = useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLineNumber(e.target.value)
    }

    useEffect(() => {
            fetchBusInfo(lineNumber)
    }, [lineNumber])

    return <BusArrival busArrivalInfo={busArrivalInfo} lineNumber={lineNumber} handleOnChange={handleOnChange}/>
}