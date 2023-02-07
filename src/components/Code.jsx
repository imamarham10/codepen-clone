import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Editor from "./Editor";

const Container = styled(Box)`
    background-color: #060606;
    height: 50vh;
    display: flex;
`

const Code = () =>{
    const {html,css,js,setHtml,setCss,setJs} = useContext(DataContext);
    return(
        <Container style={{height: '55vh'}}>
            <Editor
            heading="HTML"
            icon="/"
            color='#FF3C41'
            value={html}
            onChange={setHtml}
            language="xml"
            />
            <Editor
            heading="CSS"
            icon="*"
            color='#0EBEFF'
            value={css}
            onChange={setCss}
            language="css"
            />
            <Editor
            heading="JS"
            icon="( )"
            color='#FCD000'
            value={js}
            onChange={setJs}
            language="javascript"
            />
        </Container>
        
    )
}

export default Code;