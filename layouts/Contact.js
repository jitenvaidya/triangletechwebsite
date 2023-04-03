import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            
          <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d461.37698822817333!2d73.1441183!3d22.3152382!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9f063c9c445%3A0xd4cd501246d5d840!2sVihav%20Supremus!5e0!3m2!1sen!2sin!4v1680514071743!5m2!1sen!2sin" 
      width="100%" 
      height="100%" 
      
    />

          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
