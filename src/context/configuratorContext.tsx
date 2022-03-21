import { createContext, FC, ReactElement, useReducer } from "react"

interface props {
    children: ReactElement
}

export const ConfigStateContext = createContext<State | undefined>(undefined);
export const ConfigDispatchContext = createContext<Action | any>(undefined);

export type Action = {
    type: string,
    payload: {
        amount: number,
        color_name?: string
    }
}

type State = {
    base_price: number
    color: number
    color_name?: number | string | any
    power: number
    wrap_drive: number
    option_package: number
    total: number,
}

const total = (state: State) => {
    let total = state['base_price']

    Object.entries(state).forEach(([key, value]) => {
        if (key !== 'total' && key !== 'base_price' && key !== 'color_name') {
            total += value;
        }
    })

    return total
}

const ConfiguratorContext:FC<props> = (props: props) => {
    const [state, dispatch] = useReducer((state: State, action: Action) => {
      switch (action.type) {
        case "update_color":
            state.color = action.payload.amount
            state.total = total(state)
            state.color_name = action.payload.color_name

          return {...state}
        case "update_power":
            state.power = action.payload.amount
            state.total = total(state)

          return {...state}
        case "update_drive":
            state.wrap_drive = action.payload.amount
            state.total = total(state)

          return {...state}
        case "update_package":
            state.option_package = action.payload.amount
            state.total = total(state)

          return {...state}
        default:
          return state
      }
    }, {
        base_price: 1000,
        color: 0,
        power: 0,
        wrap_drive: 0,
        option_package: 0,
        total: 1000,
        color_name: 'Snow'
    });
  
    return(
      <ConfigStateContext.Provider value={state}>
          <ConfigDispatchContext.Provider value={dispatch}>
                {props.children}
          </ConfigDispatchContext.Provider>
      </ConfigStateContext.Provider>
    )
  };
  

  export default ConfiguratorContext