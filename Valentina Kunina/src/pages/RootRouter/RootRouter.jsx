import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../../components/Layout";
import EmptyPage from "../EmptyPage";
import Home from "../Home";
import Chats from "../Chats";
import Settings from "../Settings";
import Contacts from "../Contacts";

const RootRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chats/:chatId" component={Chats} />
        <Route path="/settings" component={Settings} />
        <Route path="/contacts" component={Contacts} />
        <Route component={EmptyPage} />
      </Switch>
    </Layout>
  );
};

export default RootRouter;
