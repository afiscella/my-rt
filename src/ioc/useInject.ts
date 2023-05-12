
import { useContext } from "react";
import { ApplicationContext } from "./MyRtContext";

export function useInject<T>(identifier : Symbol ): T {
    return useContext(ApplicationContext).get<T>(identifier);
}
