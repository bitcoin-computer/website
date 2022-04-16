import logo from "./logo.svg";
import * as React from "react";

import "./App.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ReactComponent as BitcoinHeader } from "./social/header.svg";
import { ReactComponent as Telegram } from "./social/telegram.svg";
import { ReactComponent as YouTube } from "./social/youtube.svg";
import { ReactComponent as Discord } from "./social/discord.svg";
import { ReactComponent as GitHub } from "./social/github.svg";
import { ReactComponent as Twitter } from "./social/twitter.svg";
import { ReactComponent as LinkedIn } from "./social/linkedin.svg";
import { ReactComponent as Instagram } from "./social/insta.svg";
import { ReactComponent as Medium } from "./social/medium.svg";
import BasicTabs from "./tabs";
import Features from "./Features";
import Pricing from "./Pricing";
import Examples from "./Examples";
import About from "./About";
import Footer from "./Footer";
import Introduction from "./Introduction";
import { ReactComponent as ArrowLink } from './social/arrow.svg'

function App() {
  return (
    <div className="App">
      <header className="header" >
        <Grid container>
          <Grid item xs={3} sx={{ padding: "20px", textAlign: "left" }}>
            <img src="logo/BitcoinComputer-Logo.png" height="40px" />
          </Grid>
          <Grid item xs={9} className="navigation">
            <nav>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#examples">Examples</a>
              <a href="https://docs.bitcoincomputer.io" target="_blank">
                Docs
                <ArrowLink />
              </a>
              <a href="#about">About</a>
            </nav>
          </Grid>
        </Grid>
      </header>
      {/* <BitcoinHeader className="header" /> */}
      <Introduction />
      <Features />
      <Pricing />
      <Examples />
      <About />
      {/* <Footer /> */}
      <Box className='contact-container'>
        <Box className="vertical-grid-line-1" />
        <Box className="vertical-grid-line-2" />
        <Box className="vertical-grid-line-3" />
        <Box className="vertical-grid-line-4" />
        <Box className="vertical-grid-line-5" />
        <Box className="vertical-grid-line-6" />
        <Box className="vertical-grid-line-7" />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} className='ContentBox ColorWhite'>
          <Grid item xs={4} className="contact-email-wrapper">
            <p className="contact-email-wrapper-first">Get in touch</p>
            <p className="contact-email-wrapper-second">hello@bitcoincomputer.io</p>
          </Grid>
          <Grid item xs={4} className="social-links">
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <a href="www.twitter.com" target="_blank">
                <Twitter height="50px" width="50px" viewBox="0 0 26 26"></Twitter>
              </a>
              <a href="www.twitter.com" target="_blank">
                <Telegram height="50px" width="50px" viewBox="0 0 26 26"></Telegram>
              </a>
              <a href="www.twitter.com" target="_blank">
                <YouTube height="50px" width="50px" viewBox="0 0 26 26"></YouTube>
              </a>
              <a href="www.twitter.com" target="_blank">
                <Discord height="50px" width="50px" viewBox="0 0 26 26"></Discord>
              </a>
              <a href="www.twitter.com" target="_blank">
                <GitHub height="50px" width="50px" viewBox="0 0 26 26"></GitHub>
              </a>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Grid item xs={4} className="ColorWhite social-links">
            <p>
              Copyright © 2022 Bitcoin Computer. All rights reserved.
            </p>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
}

export default App;
