import * as React from "react";

import Header from '../components/header/header';
import Head from '../components/head';
import AboutMe from '../components/about/aboutme';

import 'semantic-ui-css/semantic.min.css';
import '../style/responsive.css';

try {
    require('../style/highlight.css');
} catch (e) {
    console.log(e)
}

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: {
        pathname: string;
    };
    children: any;
}


interface DefaultLayoutStates {
    //sidebarVisible: boolean;
}

// Use `module.exports` to be compliante with `webpack-require` import method
export default class DefaultLayout
    extends React.PureComponent<DefaultLayoutProps, DefaultLayoutStates> {
    render() {
        const children = this.props.children();

        return (
            <main>
                <Head />
                <Header pathname={this.props.location.pathname} />
                <section style={{
                    margin: '0 auto',
                    maxWidth: 1200,
                    padding: '0.3rem 1.0875rem',
                    display: 'flex',
                }}>
                    <div style={{ width: '1000px', }}>
                        {children}
                    </div>
                    <AboutMe />
                </section>
            </main>
        );
    }
};
