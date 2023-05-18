import { useParams } from 'react-router-dom';
interface PantryCardProps {
  title: string;
}

const PantryDetail = ({ title }: PantryCardProps) => {
  const { pantryID } = useParams();
  return <div>{title}<p>{pantryID}</p></div>;
};

export default PantryDetail;
