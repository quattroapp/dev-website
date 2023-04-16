import React, {Component} from "react";
import 'rapidoc';
import Layout from '@theme/Layout';

export default class ApiReferencePage extends Component {
    render() {
        return (
            <Layout title="API Reference">
                {/*@ts-ignore*/}
                <rapi-doc
                    spec-url="https://raw.githubusercontent.com/quattroapp/docs/master/openapi.yaml"
                    render-style="focused"
                    update-route={false}
                    style={{height: "calc(100vh - 60px)", width: "100%"}}
                    show-header={false}
                    primary-color={'#081B34'}
                    nav-bg-color={'#F5F5F5'}
                    theme={'light'}
                    allow-server-selection={false}
                    allow-try={false}
                />
            </Layout>
        )
    }
}
