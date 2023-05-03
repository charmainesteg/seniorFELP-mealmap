interface AboutPageProps {
  title: string;
}

const AboutPage = ({ title }: AboutPageProps) => {
  return <div>{title}</div>;
};

export default AboutPage;
