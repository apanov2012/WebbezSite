const InfoBlock = ({ item }) => {
    return (
        <div className="InfoBlock-back">
            <div className="InfoBlock-item">
                <div className="InfoBlock-item-image itemImg1"></div>
                <div className="InfoBlock-item-name">
                    {item.infoblock1.name}
                </div>
                <div className="InfoBlock-item-text">
                    {item.infoblock1.text}
                </div>
            </div>
            <div className="InfoBlock-item">
                <div className="InfoBlock-item-image itemImg2"></div>
                <div className="InfoBlock-item-name">
                    {item.infoblock2.name}
                </div>
                <div className="InfoBlock-item-text">
                    {item.infoblock2.text}
                </div>
            </div>
            <div className="InfoBlock-item">
                <div className="InfoBlock-item-image itemImg3"></div>
                <div className="InfoBlock-item-name">
                    {item.infoblock3.name}
                </div>
                <div className="InfoBlock-item-text">
                    {item.infoblock3.text}
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;
