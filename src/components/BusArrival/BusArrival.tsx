import React, {FC} from "react";
import {IBusStationInfo} from "../../types/busArrivals/types";
import style from "./style.module.scss"
import {TextField} from "@mui/material";

interface BusArrivalProps {
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    busArrivalInfo: IBusStationInfo[],
    lineNumber: string
}

export const BusArrival:FC<BusArrivalProps> = ({busArrivalInfo, lineNumber, handleOnChange}) => {

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

            <ul className={style.busInfo}>
                {busArrivalInfo.map((item, i) => {
                    return (
                        <li key={i}>
                            <p>
                                <strong>{'Destination: '}</strong>
                                {item.destinationName ? item.destinationName : 'No destination'}
                                <strong>{' Towards: '}</strong>
                                {item.towards ? item.towards : 'No towards'}
                            </p>
                            <p>
                                <strong>{'Line name: '}</strong>
                                {item.lineName}
                                <strong>{' Time to station: ~'}</strong>
                                {`${item.timeToStation}s`}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}