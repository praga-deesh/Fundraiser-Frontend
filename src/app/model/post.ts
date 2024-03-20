
export class Post {
    static id: any;
    constructor(
      public id?: number,
      public title?: string,
      public description?: string,
      public category?: string,
      public startDate?: Date,
      public endDate?: Date,
      public amountRequested?: number,
      public amountCollected?: number,
      public status?: string,
      public donationAccountId?: string,
      public fundraiser?: Fundraiser,
      public donations?: Payment[],
      
    ) {}
  }
  
  export class Fundraiser {
    constructor(
      public id?: number,
      public name?: string,
      public email?: string
    ) {}
  }
  
  export class Payment {
    constructor(
      public id?: number,
      public amount?: number,
      public date?: Date
    ) {}
  }
  
  
