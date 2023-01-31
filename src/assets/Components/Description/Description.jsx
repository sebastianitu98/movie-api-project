const Description = ({isToggled}) => {
    return (
        <div className={`description ${ isToggled ? 'block' : 'hidden'} flex flex-col mx-auto text-center`}>
            <br />
            <br />
            <p className="text-xl text-slate-100">Hello there! This website was made in order to ease your work finding your prefered movies.</p>
            <br />
            <br />
            <p className="text-xl text-slate-100">You can sart by clicking the logo in order to see most popular movies of this week.</p>
            <br />
            <br />
            <p className="text-xl text-slate-100">On the homepage you can search your prefered movie name and get the results.</p>
        </div>
    )
}

export default Description