import { createContext, useState, ReactNode, useContext} from "react";
import { IType } from "../types/ContextType";
import { TServisEvolution } from "../types/ServiceEvolution";


const ServiceContext = createContext<IType>({
    evaluationData: [],
    setEvaluationData: () => {}
})
export default function ServiceProvider({children}: {children: ReactNode}){

    const [evaluationData, setEvaluationData] = useState<TServisEvolution>([]);
      
    return(
    <ServiceContext.Provider value={{evaluationData, setEvaluationData}}>
        {children}
    </ServiceContext.Provider>
   )
}

export function Context(){
    const context = useContext(ServiceContext);
    return context
}


