
import { useContext } from "react";
import { ApplicationContext } from "./PhoneContext";

export function useInject<T>(identifier : Symbol ): T {
    return useContext(ApplicationContext).get<T>(identifier);
}
