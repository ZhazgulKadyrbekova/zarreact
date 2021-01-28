import s from './style.module.css';

const HeaderBlock = ({ title, description }) => {
    return (
        <header className={s.root}>

            <div className={s.forest}></div>
            <div className={s.container}>
                {
                    title && (<h1> { title } </h1>)
                }

                {
                    description && (<p> { description } </p>)
                }
            </div>
        </header>
    )
}

export default HeaderBlock;