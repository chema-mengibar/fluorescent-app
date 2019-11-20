import React, { useContext, useState, useEffect} from "react";

import Config  from '../../config'
import AppContext from '../../helpers/contexts/App.context'
import {SwitchGenerationWrapper, StepsWrapper, Step, CursorWrapper, Cursor } from './switch-generation.styles'

const steps = [...Config.layout].splice(1);

export const SwitchGeneration = (props) => {

  const { stateApp, dispatchApp } = useContext( AppContext )
  const [gen, setGen] = useState( stateApp.generation );

  useEffect(() => {
    dispatchApp({ type: "setGeneration", payload: gen })
  }, [gen]);
  
  // 
  return (
    <SwitchGenerationWrapper>
     <StepsWrapper>{
        steps.map( (stepItem, stepIdx) => {
          const genId = stepIdx + 1
          return (
            <Step 
              key={`step-${stepIdx}`} 
              cursor={genId}
              gen={gen}
              size={steps.length}
              onClick={()=> setGen(genId)}
            >
              {genId}
            </Step>
          )
        })
      }
     </StepsWrapper>
     <CursorWrapper>{
        <Cursor size={steps.length} position={gen} />
      }
     </CursorWrapper>
    </SwitchGenerationWrapper>
  )
}