const InfoBlockWithImg = ({ item, imgOnRight = false, imgOnLeft = false }) => {
    return (
        <div className="InfoBlockWithImg-back">
            {imgOnLeft && (
                <div className="InfoBlockWithImg-item">
                    <div className="InfoBlockWithImg-item-image">
                        <img
                            src={item.imgUrl}
                            alt="error"
                        />
                    </div>
                </div>
            )}
            <div
                className="InfoBlockWithImg-item"
                style={
                    imgOnLeft
                        ? { paddingLeft: "70px" }
                        : { paddingRight: "70px" }
                }
            >
                <div className="InfoBlockWithImg-item-name">{item.name}</div>
                <div className="InfoBlockWithImg-item-text">{item.text}</div>
            </div>
            {imgOnRight && (
                <div className="InfoBlockWithImg-item">
                    <div className="InfoBlockWithImg-item-image">
                        <img
                            src={item.imgUrl}
                            alt="error"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoBlockWithImg;
