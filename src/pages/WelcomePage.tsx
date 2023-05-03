
interface WelcomePageProps {
  title: string;
}

const WelcomePage = ({ title }: WelcomePageProps) => {
  return <div>{title}</div>;
};

export default WelcomePage;
