export class Recipe {
    constructor(
        public id: number,
        public name: string,
        public instructions: string,
        public userId: number,
        public ingredients: [
            {
                ingredientName: string
            }
        ]
    ){}
}

