const PlayUtil = () => {
    const play = (option, pc) => {
        /*
            1 = rock
            2 = paper
            3 = scissors
        */
        let result = "tie"

        switch (option) {
            case 1:
                if (pc === 2) result = "loss"
                else if (pc === 3) result = "win"
                break;
            case 2:
                if (pc === 1) result = "win"
                else if (pc === 3) result = "loss"
                break;
            case 3:
                if (pc === 1) result = "loss"
                else if (pc === 2) result = "win"
                break;
            default:
                result = "tie"
                break;
        }

        return result
    }

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const numberDictionary = () => {
        return {
            1: "rock",
            2: "paper",
            3: "scissors"
        }
    }

    return { play, randomNumber, numberDictionary }
}

export { PlayUtil }