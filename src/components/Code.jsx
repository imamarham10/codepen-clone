import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Editor from "./Editor";

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`
const Code = () =>{
    return(
        <Box>
            <Editor/>
            <Editor/>
            <Editor/>
        </Box>
        
    )
}

export default Code;