import { InputGroup, InputLeftElement, Input, InputRightAddon, Button, InputRightElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"

const SearchBar = () => {
  return (
    <>
        <InputGroup borderRadius={5} size="sm">
        <Input type="text" placeholder="Search Movie ..." border="1px solid white" />
        <InputRightElement>
        <Search2Icon color="white" />
        </InputRightElement>
        </InputGroup>
    </>
  )
}

export default SearchBar