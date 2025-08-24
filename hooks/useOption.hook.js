import { useState } from "react"
import { PlayUtil } from "../utils/Play.util.js"

const useOptionHook = () => {
    const [result, setResult] = useState("")

    const { play, randomNumber, numberDictionary } = PlayUtil()
    const dictionary = numberDictionary()
    
    const useOption = (option) => {
        const pc = randomNumber(1, 3)
        const result = play(option, pc)

        setResult(`Computer: ${dictionary[pc]}\nYou: ${dictionary[option]}\n\n ${result}`)
    }

    return { useOption, result }
}

export {useOptionHook}