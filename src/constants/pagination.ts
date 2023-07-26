export const defaultLimit = 5

export const isNone = (value: any) => {
    if (value === '' || value === undefined || value === null) {
        return true
    } else {
        return false
    }
}