import React, { Component } from 'react';

import Head from 'next/head';

import Layout from './layout';

class index extends Component {

    render() {

        return(
            <>
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
                        crossorigin="anonymous"
                        />
                    <script 
                        src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
                        crossorigin="anonymous"
                        />
                    <script 
                        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
                        crossorigin="anonymous"
                        />
                    <script 
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                        crossorigin="anonymous"
                        />
                </Head>
                <Layout>
                    <h1>This is from Usman</h1>
                </Layout>
            </>
        );

    }

}

export default index;