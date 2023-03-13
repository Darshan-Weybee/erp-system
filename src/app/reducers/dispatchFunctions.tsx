export const request = (type : string) => {
    return{
        type : type
    }
}
export const success = (type : string, data : any) => {
    return{
        type : type,
        payload : data
    }
}
export const failure = (type : string, error : any) => {
    return{
        type : type,
        payload : error
    }
}