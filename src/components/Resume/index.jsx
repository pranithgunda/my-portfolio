function Resume() {
    return (
        <div className="p-4">
            <h4>Resume</h4>
            <p>Download my resume here <a href='../../../public/docs/Pranith Gunda Resume.pdf' download='Resume.pdf'>Resume</a></p>
            <h5 className="proficiencies">Front-End Proficiencies</h5>
            <ul>
                <li>
                    React
                </li>
                <li>
                    React Bootstrap Framework
                </li>
                <li>
                    Bootstrap
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    CSS
                </li>
                <li>
                    HTML
                </li>
            </ul>
            <h5 className='proficiencies mt-2'>Back-End Proficiencies</h5>
            <ul>
                <li>
                    MongoDB
                </li>
                <li>
                    Express
                </li>
                <li>
                    Node
                </li>
                <li>
                    Server Side APIs
                </li>
                <li>
                    Mongoose & Sequelize
                </li>
                <li>
                    GraphQl
                </li>
            </ul>
        </div>
    )
};

export default Resume;