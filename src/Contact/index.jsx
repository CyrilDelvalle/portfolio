import React from "react";
import { Section, Title, Message, Email } from "./style";

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Contactez moi</Title>
      <Message>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </Message>
      <Email href="mailto:delvalle.cyril77@gmail.com">Dites Bonjour !</Email>
    </Section>
  );
};

export default Contact;
