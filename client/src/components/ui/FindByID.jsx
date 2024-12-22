import Button from "./Button";

function FindByID({ setFilter }) {
  return (
    <div className="rounded-md flex justify-between gap-4 p-4 ">
      <Button text="Search Movie" onClick={() => setFilter("movie")} />
      <Button text="Search User" onClick={() => setFilter("user")} />
    </div>
  );
}

export default FindByID;
