const Description = ({isToggled}) => {
    return (
        <div className={`description ${ isToggled ? 'block' : 'hidden'} flex flex-col mx-auto text-center`}>
            <br />
            <br />
            <p className="text-xl">Hello there! This website was made in order to ease your work finding your prefered movies.</p>
            <br />
            <br />
            <p className="text-xl">You can sart by clicking the logo in order to see most popular movies of this week.</p>
            <br />
            <br />
            <p className="text-xl">On the homepage you can click in order to enter your prefered movie name and search for it.</p>
        </div>
    )
}

export default Description