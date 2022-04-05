import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../logo.png";

export const About = () => {
    return (
        <Container>
            <div style={{ marginTop: "35px" }}>
                <p style={{ color: "white", fontFamily: "Epilogue", textAlign: "justify", textIndent: "40px" }}>
                    <Image src={logo} alt="logo" fluid style={{ height: "55px", paddingRight: "7px", verticalAlign: "baseline" }} />
                    utilizes NFT blockchain technology for audio files for users to stream, browse, listen, sell, and own digital audio. This will provide a new revolutionary way in how they consume digital audio. We want our audio to not only focus on music but on other digital audio such as tones, samples, sound tags, memes, etc. Our target audience is very broad which includes people who use music streaming services, social media short clips, people who like collectibles, and other similar forms of digital entertainment. <b>BIT</b>BEAT's web application allows users to have an attractive platform with a new way to consume digital audio with the help of blockchain technology.
                </p>

                <h2 style={{ color: "#F0A500", fontFamily: "Epilogue", marginBottom: "0" }}>The Need</h2>
                <p style={{ textIndent: "40px", color: "white", fontFamily: "Epilogue", textAlign: "justify" }}>Blockchain technology is becoming more popular as it has revolutionized the financial sector. Non-fungible tokens, or NFTs, are a byproduct of blockchain technology. NFTs act as a digital receipt proving ownership of something via blockchain. Music and audio need an NFT certification because music/audio creators need to know that their creations are not being cheated. NFTs use public credentials to certify their creators' art as the original. When music and audio are certified unique by blockchain technology, people will have a marketplace to monetize their music and public listening service to showcase their work.</p>

                <h2 style={{ color: "#F0A500", fontFamily: "Epilogue", marginBottom: "0" }}>The Market</h2>
                <p style={{ textIndent: "40px", color: "white", fontFamily: "Epilogue", textAlign: "justify", marginBottom: "0" }}>The market for NFT has surged to $2.5 billion in the first half of 2021, and with that, the popularity of NFTs as a tradeable digital asset has grown exponentially. Not just content creators and brands are interested in creating NFTs to monetize their digital work but even investors also participate in NFT trading by capitalizing on the price appreciation of these assets.</p>
                <p style={{ textIndent: "40px", color: "white", fontFamily: "Epilogue", textAlign: "justify", marginBottom: "0" }}>
                    There are many NFT digital marketplaces that focus on digital art, but only a handful heavily focus on digital audio. Some of these audio NFT marketplaces have not expanded on the consumption and sharing of digital audio and are more focused on the collection and owning of these items. Our product will utilize blockchain asset technology while giving users the ability to showcase their music, tones, audio memes, etc. This allows music/audio creators to have assets to their own musical art and not worry about it being ripped off because it is validated as original through public credentials.
                </p>

                <p style={{ textIndent: "40px", color: "white", fontFamily: "Epilogue", textAlign: "justify" }}>
                    From our analysis of the market, there are products out there that are similar to our project idea. Many of these projects align and share our own goals. But we decided to narrow our focus on these specific areas: Web, music streaming, audio sharing, meme sharing, NFT audio certification. However, our focus is to take what we value from music streaming websites, NFT marketplaces, and other social media sharing websites and focus them on our own project.
                </p>
            </div>
        </Container>
    )
}