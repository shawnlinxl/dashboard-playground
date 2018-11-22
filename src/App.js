import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "./pages/Layout/Sidebar";
import "./App.css";

const { Header, Content, Footer } = Layout;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />
          <Layout>
            <Header />
            <Content style={{ margin: "0 16px" }}> This is content </Content>
            <Footer style={{ textAlign: "center" }}> This is footer</Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
