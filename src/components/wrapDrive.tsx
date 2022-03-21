import { FC, useContext } from "react";
import { ConfigDispatchContext, ConfigStateContext } from "../context/configuratorContext";

interface buttonProps {
    amount: number
    colorName: string
}

const WarpDrive: FC<buttonProps> = (props: buttonProps) => {
    const dispatchContext = useContext(ConfigDispatchContext)
    const contextValue = useContext(ConfigStateContext)
    
    return (
        <div>
            <div data-cy="btn-wrap-drive" onClick={() => {dispatchContext({
                                    type: 'update_drive',
                                    payload: {
                                        amount:props.amount,
                                    }
                                })}} 
            className={"flex flex-col items-center justify-center space-y-2 w-40 h-16 border border-green-light rounded-lg cursor-pointer" + `${contextValue?.wrap_drive == props.amount ? ' shadow-green' : ' '}`}> 
                <h4 className={"text-xs"}>{props.colorName}</h4>
                <h4 className={"text-xs"}>+{props.amount}€</h4>
            </div>
        </div>
    )
}

export default WarpDrive