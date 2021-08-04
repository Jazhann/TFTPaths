import { Bonus } from './bonus';
import { Champion } from './champion';

export class DataToShare {
    constructor(
        public champions: Champion[],
        public roles: string[],
        public rolesCount: number[],
        public rolesPool: string[],
        public bonusesPool: Bonus[],
        public noChampSelected: boolean,
        public teamSize: number
    ) {}
}
