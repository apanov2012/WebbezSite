import InfoBlock from "./components/infoBlock";
import InfoBlockWithImg from "./components/infoBlockWithImg";
import Slider from "./components/slider";
import content from "../src/content";
import InfoBlockTariffs from "./components/infoBlockTariffs";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Documentation from "./components/documentation";

function App() {
    const [hideDocs, setHide] = useState(false);
    useEffect(() => {
        if (document.location.pathname === "/documentation") {
            setHide(true);
        }
        // eslint-disable-next-line
    }, [document.location.pathname, hideDocs]);
    return (
        <div className="webbezSite-back">
            {!hideDocs ? (
                <>
                    <Slider />
                    <InfoBlock item={content.infoBlock} />
                    <InfoBlockWithImg
                        item={content.safety}
                        imgOnRight={true}
                        // imgOnLeft={true}
                    />
                    <InfoBlockWithImg
                        item={content.control}
                        // imgOnRight={true}
                        imgOnLeft={true}
                    />
                    <InfoBlockWithImg
                        item={content.api}
                        imgOnRight={true}
                        // imgOnLeft={true}
                    />
                    <InfoBlockTariffs item={content.tariffs} />
                    <Footer />
                </>
            ) : (
                <Documentation />
            )}
        </div>
    );
}

export default App;
