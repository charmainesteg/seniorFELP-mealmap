interface PantryCardProps {
  title: string;
}

const PantryCard = ({ title }: PantryCardProps) => {
  return <div>{title}</div>;
};

export default PantryCard;
