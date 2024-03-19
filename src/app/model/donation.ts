import { Donor } from "./donor";

export class Donation {
    constructor(
        public fromAccountid?:string,
        public donatedAccountId?:string,
        public donatedPostId?:number,
        public amount?:number,
        public paymentDateTime?:Date,
        public status?:string,
        public donors?:Donor
        )
        {}
}
