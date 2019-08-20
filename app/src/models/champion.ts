export class Champion {
    constructor(
        public name: string,
        public roles: string[],
        public cost: number,
        public isSelected: boolean,
        public sinergy: boolean,
        public sinergy2: boolean
    ) {}
}
