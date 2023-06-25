import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({
    imagesData = [
        {
            name: "Проверка\r\nзащищенности сайтов",
            text: "Сканер содержит 56 различных модулей для проверки\r\nбезопасности веб-приложений и сайтов.",
            url: "./images/siteSafety.jpg"
        },
        {
            name: "Постоянный\r\nконтроль",
            text: "Можно установить проверку безопасности сайтов по\r\nрасписанию и всегда иметь актуальную информацию.",
            url: "./images/siteControl.jpg"
        },
        {
            name: "API для интеграции",
            text: "Сканер содержит встроенное API для интеграции в pipeline\r\nбезопасной разработки.",
            url: "./images/siteAPI.jpg"
        },
        {
            name: "Российское ПО",
            text: "Программное обеспечение зарегистрировано в Едином реестре российских программ для электронных вычислительных машин и баз данных.",
            url: "./images/sitePO.jpg"
        }
    ]
}) => {
    return (
        <div className="Slider-back">
            <Swiper
                loop={true}
                speed={700}
                pagination={{
                    type: "bullets",
                    bulletElement: "span",
                    clickable: true,
                    bulletClass: "Slider-handlerItem",
                    bulletActiveClass: "Slider-handlerItemSelected"
                }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
            >
                {imagesData.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="Slider-images-img">
                            <img
                                src={img.url}
                                alt="error"
                            />
                            <div className="Slider-images-img-info">
                                <h1 className="Slider-images-img-name">
                                    {img.name}
                                </h1>
                                <div className="Slider-images-img-text">
                                    {img.text}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
