import PageBody from '../PageBody/PageBody'

const emailUser = "sveinssontech"
const emailDomain = "pm.me"

export default function ServicesBody() {
  return (
    <PageBody>
      <h2>
        Services I offer
      </h2>
      <p>
        I am an experienced developer with over 6 years under my belt.
        I have worked in fields like game development, VR/XR development, app development, and full-stack, with front end specialization.
      </p>
      <p>
        If you have any requests or just need a freelancer, contact me!
      </p>
      <p>
        <a href={`mailto:${emailUser}@${emailDomain}`}>
          {emailUser}@{emailDomain}
        </a>
      </p>
    </PageBody>
  );
}
