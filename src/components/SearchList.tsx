import pantryData from "../assets/data/pantryData";

export type ListProps = {
  input: string;
};

function SearchList(props: ListProps) {
  const filteredData = pantryData.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul>
      {filteredData.map((item) => (
        <li>
          <a key={item.id} href={`/pantries/${item.id}`}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SearchList;
