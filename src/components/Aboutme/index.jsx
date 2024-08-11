// AboutMe component
import Image from 'react-bootstrap/Image';

function AboutMe() {
    return (
        <div className="p-4">
            <h4>About Me</h4>
            <Image src="../../../public/images/pranith.png" fluid/>
            <p>I am Pranith Gunda, Software developer based out of Orlando, FL. I am a Computer Science Graduate from 
                University of Central Missouri, graduated in year 2016. I started my career in IT as a Software Developer
                in Pega Technology. I currently work as a  Senior Application Developer in Healthfirst, Inc, a healthcare 
                care insurance provider for the state of Newyork.</p>

                <p>I am proficient in developing Full Stack web applications and has real time experience working in the industry.
                    My experience in web development has equipped me with a deep understanding of both front-end and back-end technologies
                    allowing me to build robust and scalable solutions. My approach to web development is user-centric
                    and detail-oriented. I focus on creating intuitive and engaging user experiences while ensuring high performance and
                    scalability on server side.
                </p>

                <p>Over the years, I have had the opportunity to work on several projects on front-end and back-end development, please
                    review my github for the projects, I have done. Given a chance, I would like to contribute to your project and become
                    a valuable asset to your company by helping in achieving your goals.
                </p>
        </div>
    )
};

export default AboutMe;