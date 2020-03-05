class DiceRoller {
    constructor() {}

    roll(diceStr) {
        return this.validateDiceStr(diceStr);
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