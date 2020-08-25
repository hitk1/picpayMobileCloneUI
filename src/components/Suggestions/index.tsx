import React from 'react';
import { View } from 'react-native';

import { Container, Option, Img, Description } from './styles';

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'
import img6 from '../../images/06.png'
import img7 from '../../images/07.png'

const Suggestions: React.FC = () => {
    return (
        <Container>
            <Option>
                <Img source={img1}/>
                <Description>Doações</Description>
            </Option>
            <Option>
                <Img source={img2}/>
                <Description>Doações</Description>
            </Option>
            <Option>
                <Img source={img3}/>
                <Description>Doações</Description>
            </Option>
            <Option>
                <Img source={img4}/>
                <Description>Doações</Description>
            </Option>
            <Option>
                <Img source={img5}/>
                <Description>Doações</Description>
            </Option>
            <Option>
                <Img source={img6}/>
                <Description>Doações</Description>
            </Option>
            <Option>
                <Img source={img7}/>
                <Description>Doações</Description>
            </Option>
        </Container>
    );
}

export default Suggestions;