
export interface Container {

    get<T>(identifier : Symbol) : T
}