const InfoBlockTariffs = ({ item }) => {
    return (
        <>
            <div className="InfoBlockTariffs-blockName">{item.blockname}</div>
            <div className="InfoBlockTariffs-back">
                <div className="InfoBlockTariffs-item imgWeb">
                    <div className="InfoBlockTariffs-item-name">
                        {item.web.name}
                    </div>
                    <div className="InfoBlockTariffs-item-price fs-24">
                        {item.web.price}
                    </div>
                    <div className="InfoBlockTariffs-item-text fs-24">
                        {item.web.text}
                    </div>
                    <div className="InfoBlockTariffs-item-target fs-24">
                        {item.web.target}
                    </div>
                </div>
                <div className="InfoBlockTariffs-item imgServer">
                    <div className="InfoBlockTariffs-item-name">
                        {item.server.name}
                    </div>
                    <div className="InfoBlockTariffs-item-price fs-24">
                        {item.server.price}
                    </div>
                    <div className="InfoBlockTariffs-item-text fs-24">
                        {item.server.text}
                    </div>
                    <div className="InfoBlockTariffs-item-target fs-24">
                        {item.server.target}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoBlockTariffs;
