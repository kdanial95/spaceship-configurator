import { FC, useContext } from "react";
import { ConfigDispatchContext, ConfigStateContext } from "../context/configuratorContext";

interface buttonProps {
    amount: number
    heading: string
    desc: Array<string>
}

const OptionPackage: FC<buttonProps> = (props: buttonProps) => {
    const dispatchContext = useContext(ConfigDispatchContext)
    const contextValue = useContext(ConfigStateContext)
    
    return (
        <div className={"flex flex-col w-40 rounded-lg border border-green-light"}>
            <div data-cy="btn-package" onClick={() => {dispatchContext({
            type: 'update_package',
            payload: {
                amount:props.amount
            }
        })}} className={"flex flex-col justify-start flex-grow cursor-pointer" + `${contextValue?.option_package == props.amount ? ' shadow-green' : ' '}`}>
                <div className={"text-xs pt-4 text-center"}>
                    <h4 className={"pb-2"}>{props.heading}</h4>
                    <h4 className={"pb-2"}>+{props.amount}€</h4>
                </div>

                <div className={"flex flex-col flex-grow px-3 py-4 text-xs bg-green-dark rounded-lg"}>
                    {props.desc.map((_each, key) => {
                        return (<div key={key} className="flex flex-row items-center space-x-1">
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="#7BF762"/>
                            </svg>

                            <span>{_each}</span>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default OptionPackage