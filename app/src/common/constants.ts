import { Champion } from 'src/models/champion';
import { Bonus } from 'src/models/bonus';

export class Constants {
    public static Champions: Champion [] = [
        {
            name: 'Aatrox',
            roles: [
                'demon',
                'blademaster'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Ahri',
            roles: [
                'wild',
                'sorcerer'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'AurelionSol',
            roles: [
                'dragon',
                'sorcerer'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Anivia',
            roles: [
                'glacial',
                'elementalist'
            ],
            cost: 5,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Ashe',
            roles: [
                'glacial',
                'ranger'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Akali',
            roles: [
                'ninja',
                'assassin'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Brand',
            roles: [
                'demon',
                'elementalist'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Braum',
            roles: [
                'glacial',
                'guardian'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Blitzcrank',
            roles: [
                'robot',
                'brawler'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Chogath',
            roles: [
                'void',
                'brawler'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Draven',
            roles: [
                'imperial',
                'blademaster'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Darius',
            roles: [
                'imperial',
                'knight'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        }
        ,
        {
            name: 'Evelynn',
            roles: [
                'demon',
                'assassin'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
          {
            name: 'Elise',
            roles: [
                'demon',
                'shapeshifter'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Fiora',
            roles: [
                'noble',
                'blademaster'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Gnar',
            roles: [
                'wild',
                'yordle',
                'shapeshifter'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Garen',
            roles: [
                'noble',
                'knight'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Gangplank',
            roles: [
                'pirate',
                'gunslinger',
                'blademaster'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Graves',
            roles: [
                'pirate',
                'gunslinger'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Kayle',
            roles: [
                'noble',
                'knight'
            ],
            cost: 5,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Karthus',
            roles: [
                'phantom',
                'sorcerer'
            ],
            cost: 5,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Kennen',
            roles: [
                'ninja',
                'yordle',
                'elementalist'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Katarina',
            roles: [
                'imperial',
                'assassin'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Kindred',
            roles: [
                'phantom',
                'ranger'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Kassadin',
            roles: [
                'void',
                'sorcerer'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Khazix',
            roles: [
                'void',
                'assassin'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Lissandra',
            roles: [
                'glacial',
                'elementalist'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Lucian',
            roles: [
                'noble',
                'gunslinger'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Lulu',
            roles: [
                'yordle',
                'sorcerer'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Leona',
            roles: [
                'noble',
                'guardian'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'MissFortune',
            roles: [
                'pirate',
                'gunslinger'
            ],
            cost: 5,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Mordekaiser',
            roles: [
                'phantom',
                'knight'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Morgana',
            roles: [
                'demon',
                'sorcerer'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Nidalee',
            roles: [
                'wild',
                'shapeshifter'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Pyke',
            roles: [
                'pirate',
                'assassin'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Poppy',
            roles: [
                'yordle',
                'knight'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Rengar',
            roles: [
                'wild',
                'assassin'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'RekSai',
            roles: [
                'void',
                'brawler'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Swain',
            roles: [
                'demon',
                'imperial',
                'shapeshifter'
            ],
            cost: 5,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Sejuani',
            roles: [
                'glacial',
                'knight'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Shen',
            roles: [
                'ninja',
                'blademaster'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Shyvana',
            roles: [
                'dragon',
                'shapeshifter'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'TwistedFate',
            roles: [
                'pirate',
                'sorcerer'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Tristana',
            roles: [
                'yordle',
                'gunslinger'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Varus',
            roles: [
                'demon',
                'ranger'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Vayne',
            roles: [
                'noble',
                'ranger'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Veigar',
            roles: [
                'yordle',
                'sorcerer'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Volibear',
            roles: [
                'glacial',
                'brawler'
            ],
            cost: 3,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Warwick',
            roles: [
                'wild',
                'brawler',
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Yasuo',
            roles: [
                'exile',
                'blademaster'
            ],
            cost: 5,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Zed',
            roles: [
                'ninja',
                'assassin'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Camille',
            roles: [
                'hextech',
                'blademaster'
            ],
            cost: 1,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Jayce',
            roles: [
                'hextech',
                'shapeshifter'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Jinx',
            roles: [
                'hextech',
                'gunslinger'
            ],
            cost: 4,
            isSelected: false,
            sinergy: false
        },
        {
            name: 'Vi',
            roles: [
                'hextech',
                'brawler'
            ],
            cost: 2,
            isSelected: false,
            sinergy: false
        }
    ];
    public static championName = 'name';
    public static roles = [
        'demon',
        'blademaster',
        'imperial',
        'assassin',
        'shapeshifter',
        'wild',
        'noble',
        'ranger',
        'sorcerer',
        'yordle',
        'knight',
        'ninja',
        'elementalist',
        'pirate',
        'hextech',
        'brawler',
        'glacial',
        'void',
        'exile',
        'dragon',
        'gunslinger',
        'phantom',
        'guardian',
        'robot'
    ];
    public static bonuses: Bonus [] = [
        {
           description: 'Demon basic attacks have a 40% chance to burn 20 mana from their target and return 15 mana to the attacker',
           role: 'demon',
           units: 2,
           maxUnits: 6
        },
        {
            description: 'Demon basic attacks have a 40% chance to burn 20 mana from their target and return 30 mana to the attacker',
            role: 'demon',
            units: 4,
            maxUnits: 6
        },
        {
            description: 'Demon basic attacks have a 40% chance to burn 20 mana from their target and return 45 mana to the attacker',
            role: 'demon',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Dragons are 83% inmune to Magic Damage',
            role: 'dragon',
            units: 2,
            maxUnits: 2
        },
        {
            description: 'Exiles start combat with a shield equal to 100% max HP when placed adjacent to NO other units',
            role: 'exile',
            units: 1,
            maxUnits: 1
        },
        {
            description: 'Glacial units have a 25% chance to stun on hit for two seconds',
            role: 'glacial',
            units: 2,
            maxUnits: 6
        },
        {
            description: 'Glacial units have a 35% chance to stun on hit for two seconds',
            role: 'glacial',
            units: 4,
            maxUnits: 6
        },
        {
            description: 'Glacial units have a 45% chance to stun on hit for two seconds',
            role: 'glacial',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Robots start combat with full mana',
            role: 'robot',
            units: 1,
            maxUnits: 1
        },
        {
            description: 'Double damage for one random Imperial',
            role: 'imperial',
            units: 2,
            maxUnits: 4
        },
        {
            description: 'Double damage for all Imperials',
            role: 'imperial',
            units: 4,
            maxUnits: 4
        },
        {
            description: '+60 Armor and magic resist, heal 35 on hit for random ally',
            role: 'noble',
            units: 3,
            maxUnits: 6
        },
        {
            description: '+60 Armor and magic resist, heal 35 on hit for all allies',
            role: 'noble',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Exactly 1: +60 attack damage and ability power for one Ninja',
            role: 'ninja',
            units: 1,
            maxUnits: 4
        },
        {
            description: 'Exactly 4: +70 attack damage and ability power for your Ninjas',
            role: 'ninja',
            units: 4,
            maxUnits: 4
        },
        {
            description: 'You earn up to 4 additional gold from each PVP round, average 1.75 gold',
            role: 'pirate',
            units: 3,
            maxUnits: 3
        },
        {
            description: 'Curse a random enemy at the start of combat, setting their HP to 100',
            role: 'phantom',
            units: 2,
            maxUnits: 2
        },
        {
            description: `Each unit's attacks give then Fury (5 stack cap). Stacks give 12% attack speed. For Wild`,
            role: 'wild',
            units: 2,
            maxUnits: 4
        },
        {
            description: `Each unit's attacks give then Fury (5 stack cap). Stacks give 12% attack speed. For team`,
            role: 'wild',
            units: 4,
            maxUnits: 4
        },
        {
            description: 'Void units deal true damage',
            role: 'void',
            units: 3,
            maxUnits: 3
        },
        {
            description: 'Attacks against your Yordles have a 30% chance to miss, also dodges on-hit effects',
            role: 'yordle',
            units: 3,
            maxUnits: 6
        },
        {
            description: 'Attacks against your Yordles have a 55% chance to miss, also dodges on-hit effects',
            role: 'yordle',
            units: 6,
            maxUnits: 6
        },
        {
            description: '+125% crit damage for Assassins',
            role: 'assassin',
            units: 3,
            maxUnits: 6
        },
        {
            description: '+350% crit damage for Assassins',
            role: 'assassin',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Blademasters attack 1 extra time',
            role: 'blademaster',
            units: 3,
            maxUnits: 9
        },
        {
            description: 'Blademasters attack 2 extra times',
            role: 'blademaster',
            units: 6,
            maxUnits: 9
        },
        {
            description: 'Blademasters attack 4 extra times',
            role: 'blademaster',
            units: 9,
            maxUnits: 9
        },
        {
            description: '+300 health to Brawlers',
            role: 'brawler',
            units: 2,
            maxUnits: 6
        },
        {
            description: '+600 health to Brawlers',
            role: 'brawler',
            units: 4,
            maxUnits: 6
        },
        {
            description: '+1000 health to Brawlers',
            role: 'brawler',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Each combat, summon a golem with 2200 hp',
            role: 'elementalist',
            units: 3,
            maxUnits: 3
        },
        {
            description: `+50 Armor to allies that start combat adjacent to them, guardians don't buff themselves`,
            role: 'guardian',
            units: 2,
            maxUnits: 2
        },
        {
            description: '50% chance on attack to attack one additional target in range',
            role: 'gunslinger',
            units: 2,
            maxUnits: 6
        },
        {
            description: '50% chance on attack to attack two additional targets in range',
            role: 'gunslinger',
            units: 4,
            maxUnits: 6
        },
        {
            description: '50% chance on attack to attack three additional targets in range',
            role: 'gunslinger',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Your team ignores 15 damage from all sources',
            role: 'knight',
            units: 2,
            maxUnits: 6
        },
        {
            description: 'Your team ignores 30 damage from all sources',
            role: 'knight',
            units: 4,
            maxUnits: 6
        },
        {
            description: 'Your team ignores 55 damage from all sources',
            role: 'knight',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Every 3 seconds, Rangers have a 25% chance to double their attack speed for 3s',
            role: 'ranger',
            units: 2,
            maxUnits: 4
        },
        {
            description: 'Every 3 seconds Rangers have a 65% chance to double their attack speed for 3s',
            role: 'ranger',
            units: 4,
            maxUnits: 4
        },
        {
            description: 'On transform gain 60% max HP',
            role: 'shapeshifter',
            units: 3,
            maxUnits: 6
        },
        {
            description: 'On transform gain 120% max HP',
            role: 'shapeshifter',
            units: 3,
            maxUnits: 6
        },
        {
            description: 'Your team has +40 Ability Power',
            role: 'sorcerer',
            units: 3,
            maxUnits: 6
        },
        {
            description: 'Your team has +100 Ability Power',
            role: 'sorcerer',
            units: 6,
            maxUnits: 6
        },
        {
            description: 'Throw a bomb at an enemy unit with an item, and disables all items in a 1 hex radius for 8 seconds.',
            role: 'hextech',
            units: 2,
            maxUnits: 4
        },
        {
            description: 'Throw a bomb at an enemy unit with an item, and disables all items in a 2 hex radius for 8 seconds.',
            role: 'hextech',
            units: 4,
            maxUnits: 4
        }
    ];
}