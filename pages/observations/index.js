import Topbar from "../../components/Topbar";
import React from "react";
import { Typography, Divider, Layout } from 'antd';
import { getObservations } from "../../utils/DataLoader";
import ObservationsTable from "../../components/observations/ObservationsTable";
import Router from 'next/router';
import Head from 'next/head'
import { ObservationObject } from "../../objects/ObservationObject";
import PageFooter from "../../components/Footer";

const { Title, Text } = Typography;
const { Content } = Layout;

export default class Index extends React.Component {

    constructor(props) {
        super(props)
        this.observations = this.props.observations.map(o => new ObservationObject(o))
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Head>
                    <title>Observations | Cascade Ice</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Topbar
                    onTitleClick={() => Router.push('/')}
                    title="Cascade Ice"
                    subTitle="An Alpine Enigma"
                />
                <Layout style={{paddingTop: '55px'}}>
                    <Content style={{padding: '20px'}}>
                        <Title level={3}>Ice Observations</Title>
                        <Divider style={{backgroundColor: '#BEBEBE'}}/>
                        <Content style={{paddingBottom: '15px', flexGrow: '2'}}>
                            <Text>We depend on community observations. Attempted a route? Saw a cool flow that might go?
                                Share the stoke. Any observation is helpful. To submit an observation, click here.</Text>
                        </Content>
                        <ObservationsTable observations={this.observations}/>
                    </Content>
                    <PageFooter/>
                </Layout>
            </div>
        )
    }
}

export async function getStaticProps() {
    return { props: { observations: getObservations()}}
}