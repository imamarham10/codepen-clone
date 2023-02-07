import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { CloseFullscreen } from "@mui/icons-material";
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';
import { useState } from "react";

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex
` 
const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0:
    display: flex;
    flex-direction: column;
    padding: 0px 8px 8px;
`
const Editor = ({heading,icon, color, language, value, onChange}) =>{
    const handleChange = (editor,data,value) => {
        onChange(value);
    }
    const[open, setOpen] = useState(true);
    return(
        <>
            <Container style={open ? null : {flexGrow: 0} }>
                <Header>
                    <Heading>
                        <Box component="span"   style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color:'#000',
                        }}>{icon}
                        </Box> &nbsp;
                        {heading}
                    </Heading>
                    <CloseFullscreen 
                    fontSize="small"
                    style={{alignSelf: 'center'}}
                    onClick={()=>setOpen(prevState => !prevState)}/>
                </Header>
                <ControlledEditor
                value={value}
                onBeforeChange={handleChange}
                className='controlled-editor'
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
                />
            </Container>
        </>
    )
}

export default Editor;