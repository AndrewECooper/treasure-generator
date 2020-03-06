class DiceRoller {
    constructor() {}

    roll(diceStr) {
        let config = this.validateDiceStr(diceStr);
        if (!config.valid) return 0;
        return this.rollDice(config);
    }

    rollDice(config) {
        if (config.size == 0) return config.num;
        
        let total = 0;

        for (let x = 0; x < config.num; x++) {
            total += Math.floor((Math.random() * config.size) + 1);
        }

        return total;
    }

    validateDiceStr(diceStr) {
        let response = {
            valid: true,
            num: 0,
            size: 0
        };

        if (typeof diceStr != "string") response.valid = false;

        if (response.valid && diceStr.includes("d")) {
            let dice = diceStr.split("d");
            response.num = parseInt(dice[0], 10);
            response.size = parseInt(dice[1], 10);
            
            if (Number.isNaN(response.num) || Number.isNaN(response.size)) response.valid = false;
        }
        
        if (response.valid 
            && !diceStr.includes("d") 
            && Number.isNaN(parseInt(diceStr, 10))) response.valid = false;

        if (response.valid 
            && !diceStr.includes("d") 
            && !Number.isNaN(parseInt(diceStr, 10))) response.num = parseInt(diceStr, 10);

        return response;
    }
};

var dr = new DiceRoller;