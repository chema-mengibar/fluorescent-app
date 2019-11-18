import React, { useContext, useState, useEffect} from "react";

import AppContext from '../../helpers/contexts/App.context'
import {SwitchGenerationWrapper, StepsWrapper, Step, CursorWrapper, Cursor } from './switch-generation.styles'

const steps = [ 1,2,3]

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
        steps.map( stepIdx => {
          return (
            <Step 
              key={`step-${stepIdx}`} 
              cursor={ stepIdx }
              gen={gen}
              size={steps.length}
              onClick={()=> setGen(stepIdx)}
            >
              {stepIdx}
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