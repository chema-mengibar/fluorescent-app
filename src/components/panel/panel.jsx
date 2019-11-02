import React, { useContext, useState, useRef, useLayoutEffect } from "react";

import {Button} from '../button/button.styles'

function coord( el ){
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

import {
  PanelWrapper, 
  PanelOverlay, 
  PanelContainer, PanelHeader, UlContent 
} from './panel.styles'

export default ({
  visible,
  onClick,
  children
}) => {

  const panelRef = useRef(null)

  const [isInside, setIsInside] = useState( true )

  useLayoutEffect(() => {
    console.log('inside', coord( panelRef.current ))
    setIsInside( coord( panelRef.current ) )
  },[visible])

  return (
    <PanelWrapper visible={visible} >
      <PanelOverlay />
      <PanelContainer ref={panelRef} inside={isInside} >
        <PanelHeader>
          <Button small dark 
            onClick={()=>{
              onClick()
            }}
          >
          x
          </Button>
        </PanelHeader>
        <UlContent>
          {children}
        </UlContent>
      </PanelContainer>
    </PanelWrapper>
  )
}