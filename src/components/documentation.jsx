import Footer from "./footer";

const Documentation = () => {
    return (
        <div className="Documentation">
            <div className="Documentation-back">
                <div className="Documentation-name">Документация</div>
                <div className="Documentation-links">
                    <a
                        className="Documentation-links-link"
                        href="./docs/Desс_Prog.pdf"
                        target="_blank"
                        download
                    >
                        Описание ПО
                    </a>
                    <a
                        className="Documentation-links-link"
                        href="./docs/Use_Manual.pdf"
                        target="_blank"
                        download
                    >
                        Руководство по эксплуатации
                    </a>
                    <a
                        className="Documentation-links-link"
                        href="./docs/Server_Side_Install.pdf"
                        target="_blank"
                        download
                    >
                        Установка серверного экземпляра ПО
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Documentation;
