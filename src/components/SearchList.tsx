import pantryData from "../assets/data/pantryData";

export type ListProps = {
  input: string;
};

function SearchList(props: ListProps) {
  const filteredData = pantryData.filter((el) => {
    if (props.input === "") {
      return <p>Not found</p>;
    } else {
      return el.title.toLowerCase().includes(props.input);
    }
  });

  const isNoMatch = filteredData.length === 0;

  return (
    <>
    {isNoMatch && <p>No pantry found</p>}
    <ul>
      {filteredData.map((item) => (
        <li>
          <a key={item.id} href={`/pantries/${item.id}`}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
    </>
    
  );
}

export default SearchList;
