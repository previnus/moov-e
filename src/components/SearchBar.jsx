import { InputGroup, InputLeftElement, Input, InputRightAddon, Button, InputRightElement } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { useState } from "react"

const SearchBar = () => {

  const [searchData, setSearchData] = useState([]);

  const btnStyles = {
    backgroundColor : "rgb(0,0,0,0)",
    ":hover": {
      backgroundColor: "rgb(0,0,0,0)",
      color: "#CB4335"
    },
    ":focus": {
      backgroundColor: "rgb(0,0,0,0)",
      color: "#CB4335"
    }
  }

  const handleChange = (e) => {
    setSearchData(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('form submitted')
  }

  return (
        <form onSubmit={handleSubmit}>
          <InputGroup borderRadius={5} size="sm">
          <Input type="text" onChange={handleChange} placeholder="Search Movie ..." border="1px solid white" />
          <InputRightElement>
          <Button type="submit" sx={btnStyles}><Search2Icon color="white"/></Button>
          </InputRightElement>
          </InputGroup>
        </form>
  )
}

export default SearchBar