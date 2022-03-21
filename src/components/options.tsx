import { FC } from "react";
import Colors from "./colors";
import OptionPackage from "./optionPackage";
import Powers from "./powers";
import WarpDrive from "./wrapDrive";



const Options: FC = () => {
    return (
        <div>
            <h3 className={"text-lg text-center leading-[23.74px] mb-2 lg:text-left"}>Select color:</h3>
            <div className={"flex flex-col items-center space-y-6 lg:items-start lg:space-y-0 lg:flex-row lg:space-x-6 mb-12"}>
                <Colors
                    amount={0}
                    color='bg-white'
                    colorName='Snow'/>
                <Colors
                    amount={100}
                    color='bg-sky'
                    colorName='Sky'/>
                <Colors
                    amount={100}
                    color='bg-volcano'
                    colorName='Volcano'/>
            </div>
            <h3 className={"text-lg text-center leading-[23.74px] mb-2 lg:text-left"}>Select power:</h3>
            <div className={"flex flex-col items-center space-y-6 lg:items-start lg:space-y-0 lg:flex-row lg:space-x-6 mb-12"}>
                <Powers
                    colorName='100 MW'
                    amount={0}/>
                <Powers
                    colorName='150 MW'
                    amount={200}/>
                <Powers
                    colorName='200 MW'
                    amount={500}/>
            </div>
            <h3 className={"text-lg text-center leading-[23.74px] mb-2 lg:text-left"}>Warp drive:</h3>
            <div className={"flex flex-col items-center space-y-6 lg:items-start lg:space-y-0 lg:flex-row lg:space-x-6 mb-12"}>
                <WarpDrive
                    colorName='NO'
                    amount={0}/>
                <WarpDrive
                    colorName='YES'
                    amount={1000}/>
            </div>
            <h3 className={"text-lg text-center leading-[23.74px] mb-2 lg:text-left"}>Select option package:</h3>
            <div className={"flex flex-col items-center space-y-6 lg:items-stretch lg:space-y-0 lg:flex-row lg:space-x-6 mb-12"}>
                <OptionPackage
                heading="Basic"
                amount={0}
                desc={['Air conditioning','Cloth seats','Fm radio']}/>
                <OptionPackage
                heading="Sport"
                amount={100}
                desc={['Air conditioning','Cloth seats','Fm radio','Personal tech support']}/>
                <OptionPackage
                heading="Lux"
                amount={500}
                desc={['Air conditioning','Luxury seats','Fm radio','Chrome wheels', 'Window tint', 'Sub woofer']}/>
            </div>
        </div>
    )
}


export default Options