export type Chocolate = {
    ID: number;
    Name: string;
    Ingredients: string;
    PhotoUrls: string[];
  };
  
  export type Variants = {
    ID: number;
    ChocolateID: number;
    Size: string;
    Weight: number;
    Price: number;
  };