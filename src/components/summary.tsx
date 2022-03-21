import { FC, useContext } from "react";
import { ConfigStateContext } from "../context/configuratorContext";


const Summary: FC = () => {
    const contextValue = useContext(ConfigStateContext)

    return (
        <div className={"flex flex-col tracking-[0.2em] lg:w-80 max-h-64 bg-green-dark border border-space-green rounded-lg space-y-3"}>
            <div className={"text-sm p-4 space-y-3"}>
                <div className="flex flex-row">
                    <div className={"w-2/3"}>Base price:</div>
                    <div data-cy="base_price" className="text-white">{contextValue?.base_price}€</div>
                </div>

                <div className="flex flex-row">
                    <div className={"w-2/3"}>Color:</div>
                    <div data-cy="color" className="text-white">+{contextValue?.color}€</div>
                </div>

                <div className="flex flex-row">
                    <div className={"w-2/3"}>Power:</div>
                    <div data-cy="power" className="text-white">+{contextValue?.power}€</div>
                </div>

                <div className="flex flex-row">
                    <div className={"w-2/3"}>Wrap drive:</div>
                    <div data-cy="wrap_drive" className="text-white">+{contextValue?.wrap_drive}€</div>
                </div>

                <div className="flex flex-row">
                    <div className={"w-2/3"}>Option package:</div>
                    <div data-cy="option_package" className="text-white">+{contextValue?.option_package}€</div>
                </div>
            </div>

            <div className="flex flex-row border-t items-center h-28 px-4 border-space-green text-lg">
                <div className={"w-2/3"}>Total:</div>
                <div data-cy="total" className="text-white">{contextValue?.total}€</div>
            </div>
        </div>
    )
}

export default Summary