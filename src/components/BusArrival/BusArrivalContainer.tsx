import React, {FC, useEffect, useState} from "react";
import {BusArrival} from "./BusArrival";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActionsBus} from "../../hooks/useActionsMap";

export const BusArrivalContainer: FC = () => {
    const {busArrivalInfo, isLoading} = useTypeSelector(state => state.busArrivalReducer);
    const {fetchBusInfo} = useActionsBus();
    const [lineNumber, setLineNumber] = useState<string>('');
    const [pageNum, setPageNum] = useState<number>(1);
    const pageSize = 5;

    const paginateArr = busArrivalInfo.slice((pageNum - 1) * pageSize, pageNum * pageSize);

    useEffect(() => {
        if (lineNumber && !isLoading) {
            fetchBusInfo(lineNumber);
            setPageNum(1)
        }
    },[lineNumber]);


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLineNumber(e.target.value)
    }

    const handleDecrement = () => {
        if (pageNum !== 1 && pageNum !== 0) setPageNum(num => num - 1)
    }

    const handleIncrement = () => {
        if (pageNum !== Math.ceil(busArrivalInfo.length / pageSize)) setPageNum(num => num + 1)
    }

    return <BusArrival busArrivalInfo={paginateArr} lineNumber={lineNumber}
                       handleOnChange={handleOnChange} pageNum={pageNum}
                       handleDecrement={handleDecrement} handleIncrement={handleIncrement}
                       isLoading={isLoading}
    />
}