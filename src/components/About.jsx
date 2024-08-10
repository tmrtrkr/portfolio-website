import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">

           <ol>
           <li>
            <strong>Back-End Experience:</strong> I have experience in MVC architecture, REST and SOAP APIs and Microservices in Back-End.
          </li>
          <li>
            <strong>AI Projects:</strong> In AI, I have developed pipelines with predictive algorithms, built simple computer-vision projects, fine-tuned open-source generative models like Stable Diffusion, and made app-level integrations with OpenAI and Google APIs.
          </li>
          <li>
            <strong>Android Development:</strong> On Android, I have developed apps with MVVM architecture in both Java and Kotlin.
          </li>
          <li>
            <strong>Product Management:</strong> In Product, I participated in corporate projects, attended meetings with corporate customers and made presentations of the projects.
          </li>

           </ol>
          <br></br>
           <p>I have work experience in Back-End, AI and Product.
           I took courses in Android at Bogazici University and Udemy then developed many projects on it.</p>



      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
