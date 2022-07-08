
export const BrandItemLogo = (props) => {
    const {urlLink, imgLink, alt} = props;
    return (
        <>
            <div className="brand-item">
                <a href={urlLink}>
                    <img src={imgLink} alt={alt} className="w-[4.3rem] mr-3" />
                </a>
            </div>
        </>
    );
}

export default BrandItemLogo;