import { Champion } from 'src/models/champion';
import { Bonus } from 'src/models/bonus';
import champions from './champions.json';
import traits from './traits.json';

export class Constants {
    public static Champions: Champion [] = champions.map(champion => {
        const championMapped = new Champion(
            champion.name,
            champion.championId,
            champion.traits.map(trait => traits.find(t => t.key === trait).name),
            champion.cost,
            false,
            false,
            false
        )
        return championMapped;
    }).filter( champion => champion.name !== 'Target Dummy');

    public static championName = 'name';

    public static roles = traits.map(trait => trait.name);

    public static bonuses: Bonus [] = traits.reduce((previous, current)  => {
        current.sets.forEach(set => {
            previous.push({
                description: current.description,
                role: current.name,
                units: set.min,
                maxUnits: current.sets[current.sets.length-1].min
            })
        })
        return previous;
    }, [])
}
