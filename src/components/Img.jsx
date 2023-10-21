function Img({cls='', src='', alt="image", load="lazy"}) {
    return (
        <img src={`/webshop/${src}`} alt={alt} load={load} className={cls} />
    )
}

export default Img
