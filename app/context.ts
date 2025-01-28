import { createContext, Dispatch, SetStateAction } from "react";

type TContext = {
  color: string ;
  setColor: Dispatch<SetStateAction<string>>;
}

const PreviousColorContext = createContext<TContext | undefined>(undefined);

export default PreviousColorContext;