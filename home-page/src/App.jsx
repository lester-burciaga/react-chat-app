import React from "react";
import ReactDOM from "react-dom";
import {Container} from 'shards-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import "./index.css";

import Chat from 'chat/Chat';

const App = () => <Container>
    <p>sadgs aedasdfase agrgaeg aeaae ae</p>
    <h1>Chat!</h1>
    <Chat />
    <p>afraef a ae fa aefaefa  e aef </p>
</Container>;

ReactDOM.render(<App />, document.getElementById("app"));
