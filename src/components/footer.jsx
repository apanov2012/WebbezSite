const Footer = () => {
    const scrollFunc = () => {
        if (document.location.pathname === "/documentation") {
            document.location.pathname = "/";
        } else {
            const el = document.querySelector("body");
            el.scrollIntoView({ alignToTop: true, behavior: "smooth" });
        }
    };
    return (
        <div className="Footer">
            <div className="Footer-line-top">
                <div className="Footer-line-top-left fs-14">
                    © 2011–2023 ООО Веб Безопасность ·
                    <a
                        href="mailto:info@webbez.ru"
                        style={{
                            color: "white",
                            paddingLeft: "5px",
                            cursor: "pointer"
                        }}
                        rel="noreferrer"
                    >
                        info@webbez.ru
                    </a>
                </div>
                <div
                    className="Footer-line-top-right fs-14"
                    onClick={scrollFunc}
                    style={{ color: "white", cursor: "pointer" }}
                >
                    {document.location.pathname === "/documentation"
                        ? "На главную"
                        : "В начало"}
                </div>
            </div>
            <div className="Footer-line-link">
                <div className="Footer-line-link-left fs-12">
                    <a
                        href="https://reestr.digital.gov.ru/reestr/496835/?sphrase_id=2251108"
                        target="_blank"
                        style={{ color: "white", cursor: "pointer" }}
                        rel="noreferrer"
                    >
                        Программное обеспечение зарегистрировано в Едином
                        реестре российских программ для электронных
                        вычислительных машин и баз данных
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
