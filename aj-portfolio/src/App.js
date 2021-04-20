import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";


function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
          <Header className="headerColor"  title="AJ Steinbacher" scroll>
            <Navigation>
              
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Aj Steinbacher">
            <Navigation>
              <a href="/">Home</a>
              
              <a href="/about">About</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
