import { useState } from 'react'
import { Input, InputLeftElement } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import { Search } from 'chakra-ui-search'

function SearchBar({ onSearchChange }) {
    const [searches, setSearches] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onSearchChange(searches)
    }

    return (
        <form onSubmit={handleSubmit} >
            {/* <InputLeftElement
                    children={<FiSearch />}
                    color='white'
                    fontSize={20}
                    pointerEvents='none'
                /> */}
            <Search 
                placeholder='Search for resources...'
                _placeholder={{ color: 'white' }}
                value={searches}
                onChange={e => setSearches(e.target.value)}
                textAlign={'center'}
                variant='outline'
                borderRadius={20}
                borderWidth={2}
                borderColor='white'
                size='md'
                width={{
                    md: 'md',
                    lg: 'xl',
                    xl: '2xl',
                    '2xl': '4xl',
            }}/>
        </form>
    )
}

export default SearchBar;