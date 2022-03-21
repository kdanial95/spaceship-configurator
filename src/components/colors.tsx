import { FC, useContext, useEffect, useState } from "react";
import { ConfigDispatchContext, ConfigStateContext } from "../context/configuratorContext";

interface buttonProps {
    amount: number
    color: string
    colorName: string
}

const Colors: FC<buttonProps> = (props: buttonProps) => {
    const [color, setColor] = useState<string>()
    const dispatchContext = useContext(ConfigDispatchContext)
    const contextValue = useContext(ConfigStateContext)

    useEffect(() => {
        setColor(props.color)
    },[props.color])

    return (
        <div>
            <div data-cy="btn-color" onClick={() => {dispatchContext({
                                    type: 'update_color',
                                    payload: {
                                        amount:props.amount,
                                        color_name:props.colorName
                                    }
                                })}} 
                className={"flex flex-col items-center justify-center space-y-2 w-40 h-28 border border-green-light rounded-lg cursor-pointer" + `${contextValue?.color_name == props.colorName ? ' shadow-green' : ' '}`}>
                     
                <div className={"rounded-sm w-16 h-8 " + `${color}`}></div>
                <h4 className={"text-xs"}>+{props.amount}€</h4>
                <h4 className={"text-xs"}>{props.colorName}</h4>
            </div>
        </div>
    )
}

export default Colors