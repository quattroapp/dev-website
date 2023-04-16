import React, {Component, useEffect} from "react";
import Layout from '@theme/Layout';
import BrowserOnly from "@docusaurus/BrowserOnly";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default function ApiReferencePage() {
    useEffect(() => {
        if (ExecutionEnvironment.canUseDOM) {
            require('rapidoc')
        }
    }, [])

    return (
        <Layout title="API Reference">
            <BrowserOnly>
                {() => (
                    <>
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
                    </>
                )}
            </BrowserOnly>
        </Layout>
    )
}
