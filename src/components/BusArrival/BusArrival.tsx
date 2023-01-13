import React, {FC} from "react";
import {IBusStationInfo} from "../../types/busArrivals/types";
import style from "./style.module.scss"
import {Button, TextField} from "@mui/material";

interface BusArrivalProps {
    handleOnChangeLineNumber: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleOnChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void,
    busArrivalInfo: IBusStationInfo[],
    handleIncrement: () => void,
    handleDecrement: () => void,
    handleFilter: () => void,
    handleDelFilter: () => void,
    lineNumber: string,
    searchingValue: string,
    pageNum: number,
    isLoading: boolean
}

export const BusArrival:FC<BusArrivalProps> = ({busArrivalInfo, lineNumber,
                                                   handleOnChangeLineNumber, pageNum, handleIncrement,
                                                   handleDecrement, isLoading, handleOnChangeSearch,
                                                   searchingValue, handleFilter, handleDelFilter}) => {

    return (
        <div className={style.wrapper}>
            <div className={style.textFields}>
                <TextField
                    id="outlined-number"
                    label="Enter bus line name (number)"
                    type="number"
                    style={{width: '20%', marginBottom: '20px'}}
                    maxRows='5'
                    value={lineNumber}
                    onChange={handleOnChangeLineNumber}
                />

                {
                    busArrivalInfo.length
                        ?
                        <>
                            <TextField
                                id="outlined-number"
                                label="Search by towards"
                                type="text"
                                style={{width: '15%', margin: '0 5px 20px 10px'}}
                                maxRows='5'
                                onChange={handleOnChangeSearch}
                                value={searchingValue}
                            />

                            <Button variant="contained" onClick={handleFilter}>{"Search"}</Button>

                            <Button onClick={handleDelFilter}
                                    style={{width: '2%', marginLeft: '4px'}}
                                    variant="contained"
                            >
                                {"Del"}
                            </Button>

                        </>
                        :
                        null
                }


            </div>
            {
                !isLoading
                    ?
                    <ul className={style.busInfo}>
                        {busArrivalInfo.map((item, i) => {
                            return (
                                <li key={i}>
                                    <p>
                                        <strong>{'Destination: '}</strong>
                                        <small>{item.destinationName ? item.destinationName : 'No destination'}</small>
                                        <strong>{' Towards: '}</strong>
                                        <small>{item.towards ? item.towards : 'No towards'}</small>
                                    </p>
                                    <p>
                                        <strong>{'Line name: '}</strong>
                                        <small>{item.lineName}</small>
                                        <strong>{' Time to station: ~'}</strong>
                                        <small>{`${Math.round(item.timeToStation/60)}m`}</small>
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                    :
                    <h3>Info is loading</h3>
            }

            {
                busArrivalInfo.length && !isLoading
                    ?
                    <div className={style.buttons}>
                        <Button variant="contained" onClick={handleDecrement}>{"<"}</Button>
                        <strong>{`${pageNum}`}</strong>
                        <Button variant="contained" onClick={handleIncrement}>{">"}</Button>
                    </div>
                    :
                    null
            }
        </div>
    )
}