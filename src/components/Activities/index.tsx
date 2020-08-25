import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import avatarImage from '../../images/avatar.png'
import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    Username,
    CardFooter,
    Details,
    Value,
    Divider,
    DateDescription,
    Actions,
    Option,
    OptionDescription
} from './styles';

const Activities: React.FC = () => {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatarImage} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@Luis.Degini</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <Username>Luis Paulo M. Degini</Username>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 10,00</Value>

                        <Divider />

                        <FeatherIcon name="lock" color="#FFF" size={14} />
                        <DateDescription>há 2 anos</DateDescription>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcon name="comment-outline" size={14} color="#FFF"/>
                            <OptionDescription>0</OptionDescription>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#FFF"/>
                            <OptionDescription>0</OptionDescription>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}

export default Activities;