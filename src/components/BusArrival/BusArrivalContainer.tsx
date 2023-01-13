import React, {FC, useEffect, useState} from "react";
import {BusArrival} from "./BusArrival";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActionsBus} from "../../hooks/useActionsMap";
import {IBusStationInfo} from "../../types/busArrivals/types";

export const BusArrivalContainer: FC = () => {
    const {busArrivalInfo, isLoading, error} = useTypeSelector(state => state.busArrivalReducer);
    const {fetchBusInfo} = useActionsBus();
    const [lineNumber, setLineNumber] = useState<string>('');
    const [pageNum, setPageNum] = useState<number>(1);
    const [searchingValue, setSearchingValue] = useState<string>('');
    const [searchingArr, setSearchingArr] = useState<IBusStationInfo[]>([]);

    const pageSize = 5;
    const paginateArr = searchingArr.length ?
        searchingArr.slice((pageNum - 1) * pageSize, pageNum * pageSize)
        :
        busArrivalInfo.slice((pageNum - 1) * pageSize, pageNum * pageSize);

    useEffect(() => {
        if (lineNumber && !isLoading) {
            fetchBusInfo(lineNumber);
            setPageNum(1)
        }
    },[lineNumber]);

    if (!lineNumber) {
        paginateArr.length = 0;
    }

    const handleFilter = () => {
        setPageNum(1)
        setSearchingArr(busArrivalInfo.filter(item => item.towards.toLowerCase().includes(searchingValue.toLowerCase())))
    }

    const handleDelFilter = () => {
        setSearchingArr([])
        setSearchingValue('')
        setPageNum(1)
    }


    const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchingValue(e.target.value)
    }

    const handleOnChangeLineNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 3) {
            if (!isLoading) setLineNumber(e.target.value)
        }
    }

    const handleDecrement = () => {
        if (pageNum !== 1 && pageNum !== 0) setPageNum(num => num - 1)
    }

    const handleIncrement = () => {
        if (setSearchingArr.length)  {
           if (pageNum !== Math.ceil(searchingArr.length / pageSize)) setPageNum(num => num + 1)
        } else {
            if (pageNum !== Math.ceil(busArrivalInfo.length / pageSize)) setPageNum(num => num + 1)
        }
    }

    return <BusArrival busArrivalInfo={paginateArr} lineNumber={lineNumber}
                       handleOnChangeLineNumber={handleOnChangeLineNumber} pageNum={pageNum}
                       handleDecrement={handleDecrement} handleIncrement={handleIncrement}
                       isLoading={isLoading} handleOnChangeSearch={handleOnChangeSearch}
                       searchingValue={searchingValue} handleFilter={handleFilter}
                       handleDelFilter={handleDelFilter} error={error}
    />
}