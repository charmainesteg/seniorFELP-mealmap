import pantryData from "../assets/data/pantryData";

export type ListProps = {
  input: string;
};

function SearchList({input}: ListProps) {
  const filteredData = pantryData.filter((el) => {
    if (input === "") {
      return true;
    } else {
      return el.title.toLowerCase().includes(input);
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
