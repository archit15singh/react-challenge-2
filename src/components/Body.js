import EmailIcon from '../images/Mail.svg';
import LinkedinIcon from '../images/linkedin.svg';

export default function Body() {
    return (
        <section className="body__container">
            <p className="body__person_name">Laura Smith</p>
            <p className="body__designation">Frontend Developer</p>
            <p className="body__website">laurasmith.website</p>

            <section className="body__button_container">
                <section className="body__email_button">
                    <img src={EmailIcon} alt="email"/>
                    Email
                </section>
                <section className="body__linkedin_button">
                    <img src={LinkedinIcon} alt="email"/>
                    Linkedin
                </section>
            </section>

            <section className="body__about_section">
                <p className="body__about_section_heading">About</p>
                <p className="body__about_section_text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </section>

            <section className="body__interests_section">
                <p className="body__interests_section_heading">Interests</p>
                <p className="body__interests_section_text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </section>
    );
};
