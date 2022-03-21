import type { NextPage } from 'next'
import Options from '../components/options'
import Summary from '../components/summary'


const Home: NextPage = () => {
    return (
        <div className={"mx-8 mt-8 border border-space-green rounded-lg lg:max-w-5xl lg:mx-auto"}>
            <h1 className={"text-2xl tracking-[0.2em] font-normal py-10 text-center"}>Spaceship Configurator</h1>

            <div className={"flex flex-col justify-around lg:flex-row lg:space-x-6"}>
                <div>
                    <Options/>
                </div>

                <div className={'self-center mb-8 lg:mt-8 lg:mb-0 lg:self-baseline'}>
                    <Summary/>
                </div>
            </div>
        </div>
        )
}

export default Home
