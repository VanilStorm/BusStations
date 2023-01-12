import React, {FC} from "react";
import {IBusStationInfo} from "../../types/busArrivals/types";
import style from "./style.module.scss"
import {Button, TextField} from "@mui/material";

interface BusArrivalProps {
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    busArrivalInfo: IBusStationInfo[],
    handleIncrement: () => void,
    handleDecrement: () => void,
    lineNumber: string,
    pageNum: number,
    isLoading: boolean
}

export const BusArrival:FC<BusArrivalProps> = ({busArrivalInfo, lineNumber,
                                                   handleOnChange, pageNum, handleIncrement,
                                                   handleDecrement, isLoading}) => {

    return (
        <div className={style.wrapper}>
            <TextField
                id="outlined-number"
                label="Enter bus line name (number)"
                type="number"
                style={{width: '20%', marginBottom: '20px'}}
                maxRows='5'
                value={lineNumber}
                onChange={handleOnChange}
            />
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