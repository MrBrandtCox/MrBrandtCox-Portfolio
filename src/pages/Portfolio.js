// imports
// import images here to projects
import '../styles.css/Portfolio.css';


function Portfolio () {

    const myProjects = [
        {
            name: "All-American-REGEX-Tutorial",
            image: "",
            description: "This is a gist created to give a user a tutorial on the basics of REGEX, how to read one and to create one.",
            link: "https://gist.github.com/MrBrandtCox/46013867667218b62f3ac32bb76ec953#file-all-american-regex-tutorial-md",
            repository: "https://github.com/MrBrandtCox/All-American-REGEX-Tutorial",
        },
        {
            name: "Technical-Code-Quiz",
            image: "",
            description: "This is a simple multiple choice quiz about the basics of JavaScript, including a high score page for current and previous scores.",
            link: "https://mrbrandtcox.github.io/Technical-Code-Quiz/",
            repository: "https://github.com/MrBrandtCox/Technical-Code-Quiz",
        },
        {
            name: "My-Busy-Day",
            image: "",
            description: "An application to keep the user on track with their daily schedule. Inputs are created and saved, past, present, and future time slots display a different color.",
            link: "https://mrbrandtcox.github.io/My-Busy-Day/",
            repository: "https://github.com/MrBrandtCox/My-Busy-Day",
        },
        {
            name: "Hows-the-weather-up-there",
            image: "",
            description: "This weather application takes a user's location input and returns the current weather data and icon, along with a 5 day forecast of the specified location. ",
            link: "https://mrbrandtcox.github.io/Hows-the-weather-up-there/",
            repository: "https://github.com/MrBrandtCox/Hows-the-weather-up-there",
        },
        {
            name: "Edit-Button",
            image: "",
            description: "Edit-Button is a downloadable app of an ordinary text editor! Just cooler.",
            link: "https://edit-button.herokuapp.com/",
            repository: "https://github.com/MrBrandtCox/Edit-Button",
        },
        {
            name: "view-finder",
            image: "",
            description: "This is a platform for photographers to display their work and available schedules for those looking to hire in their area.",
            link: "http://viewfinder.herokuapp.com/",
            repository: "https://github.com/MrBrandtCox/view-finder",
        },
    ];


    return (
        <div>
            <h2 className='portfolio-title'>Portfolio</h2>
            <section className='portfolio-container'>
                {myProjects.map()}
                <div>
                    {}
                </div>
                <div>
                    {}
                </div>
                <div>
                    {}
                </div>
                <div>
                    {}
                </div>
                <div>
                    {}
                </div>
                <div>
                    {}
                </div>
            </section>
        </div>
    );
}



export default Portfolio;