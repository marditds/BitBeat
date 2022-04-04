import React from "react";
import { Accordion, Container, Image } from "react-bootstrap";
import logo from "../logo.png";
import metamask from "../images/MetaMask.png";
import guide1 from "../images/guide1.png";

export const HowItWorks = () => {
    return (
        <Container>
            <p style={{ marginTop: "30px", marginBottom: "15px", color: "white", fontFamily: "Epilogue", fontSize: "20pt" }}>How <Image src={logo} alt="logo" style={{ height: "70px", paddingLeft: "5px", paddingRight: "5px" }} fluid /> Works</p>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{ fontFamily: "Epilogue", marginBottom: "0px" }} id="accordTitle">Step #1</Accordion.Header>
                    <Accordion.Body style={{ fontFamily: "Epilogue" }}>
                        <p style={{ marginBottom: "0" }}> The website will be accessible to everyone. The visitors will have to enter the website’s URL in their browser of choice to have access to the website.
                            Before visiting the website, the users are required to install the cryptocurrency wallet, MetaMask’s browser extension. Failing to do so will result in failure of access to the content of the website. The extension is available in most browsers’ extension stores.</p>

                        <Image src={metamask} alt="metamask_logo" fluid />


                        <p>
                            MetaMask is the cryptocurrency wallet that users will be using to make purchases on the website. After installing the extension, they will have to register with MetaMask and transfer some amount of Ethereum to their MetaMask wallet.
                            Upon visiting the website, the users will have to unlock their MetaMask account by entering their password. After unlocking the account, the visitors will be able to see the music bites populate the main page.

                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header style={{ fontFamily: "Epilogue", marginBottom: "0px" }}>Step #2</Accordion.Header>
                    <Accordion.Body style={{ fontFamily: "Epilogue" }}>
                        <p style={{ marginBottom: "0" }}>
                            After signing in, the header of the page will change, notifying the user that the signing in was successful. The next step of the user will be creating a profile, by clicking on the profile button at the top right corner of the page. After filling out the necessary information, the user will have to press save.
                            The profile is ready!</p>

                        <div className="w-100 d-flex justify-content-center">
                            <Image src={guide1} alt="setup_guide" fluid />
                        </div>


                        <p>The next steps are up to the user. After the profile has been successfully set up, they are free to browse, purchase audio NFTs, or sell them.</p>



                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}