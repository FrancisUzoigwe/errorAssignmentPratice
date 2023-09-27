// Firstly i declared my enum which should be capitals
export enum STATUS {
    Ok = 200,
    CREATED = 201,
    BAD = 400,
    NO = 404
}

// then i created my interface and exported it
export interface iError {
    errorName: string,
    errorMessage: string,
    errorStatus: STATUS,
    errorSuccess: boolean
}


// then i created my class which i also exported
export class errorFile extends Error {
    public readonly errorName: string
    public readonly errorMessage: string
    public readonly errorStatus: STATUS
    public readonly errorSuccess: boolean = false
    constructor(arggs: iError){
        super(arggs.errorMessage)
        this.errorName = arggs.errorName
        this.errorMessage = arggs.errorMessage
        this.errorStatus = arggs.errorStatus

        if(this.errorSuccess !== undefined){
            this.errorSuccess = arggs.errorSuccess
        }
        Error.captureStackTrace(this)
    }
}