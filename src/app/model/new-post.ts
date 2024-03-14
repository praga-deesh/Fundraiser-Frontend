import { Fundraiser } from "./fundraiser";
import { FundraiserService } from "../services/fundraiser.service";
import { PostFundraiser } from "./post-fundraiser";
export class NewPost {
    constructor(
        public title?:string,
        public description?:string,
        public category?:string,
        public startDate?:Date,
        public endDate?:Date,
        public amountRequested?:number,
        public amountCollected?:number,
        public status?:string,
        public donationAccountId?:string,
        public fundraiser?:PostFundraiser
                ){}

    }
