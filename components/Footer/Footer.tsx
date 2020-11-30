import React, { FunctionComponent } from "react"
import { Container } from "../../styles"
import { Center } from '../Center';

export const Footer: FunctionComponent = () => {
    const currentYear = new Date().getFullYear()
    return ( 
        <Container>
            <Center>
                <a href="https://newline.co">Newline.co</a> {currentYear}
            </Center>
        </Container>
    ) }