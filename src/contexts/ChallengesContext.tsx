import { createContext, ReactNode, useState } from 'react'

interface ChallengesProviderProps {
    children: ReactNode
}

interface challengeContextData{
    level: number; 
    currentExperience: number;
    challengesCompleted: number;
    levelUp(): void;
    startNewChallenge(): void;
}

export const ChallengesContext = createContext({} as challengeContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(1);
    const [challengesCompleted, setChallengesCompleted] =useState(1);

    function levelUp(){
  
      setLevel(level + 1);
    }

    function startNewChallenge(){
        console.log('New Challenge')
    }

    return(

        <ChallengesContext.Provider value={{
            level, 
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge}}
            
        >

            { children }
        </ChallengesContext.Provider>
    );
}