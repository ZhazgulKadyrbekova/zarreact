import s from './style.module.css';

const LayoutBlock = ({ id, title, description, urlBg, colorBg }) => {

    const style =  urlBg ? { backgroundImage: `url(${urlBg})` } : { backgroundColor: colorBg }
    return (
        <section className = { s.root } id = { id } style={ style }>
            <div className = { s.wrapper }>
                <article>
                    <div className = { title }>
                        {
                            title && (<h3> { title } </h3>)
                        }
                        <span className = {s.separator }></span>
                    </div>
                    <div className={s.desc & s.full}>
                        {
                            description && (<p>{ description }</p>)
                        }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LayoutBlock;