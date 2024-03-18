export class Transaction {
    constructor (
        public senderId?:string,
        public receiverId?:string,
        public amount?:number,
    ) {}
    
}
