import React from 'react'
import { Divider, Hide } from '@chakra-ui/react'

const TitleDivider = () => {
  return (
    <Hide below='md'>
      <Divider
        orientation='horizontal'
        w={['null', 'null', '2xs', 'sm', 'md', '40em']}
        justifyContent='baseline'
        borderWidth={1}
        borderColor='black'
      />
    </Hide>
  )
}

export default TitleDivider