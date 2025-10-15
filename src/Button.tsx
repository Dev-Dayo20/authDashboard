interface buttonProps {
  name: String;
  onClick?: () => void;
}

export const Button = ({ name, onClick }: buttonProps) => {
  return (
    <>
      <div>
        <button
          className="outline-blue-900 outline-2 py-2 px-5 my-2 mx-4 text-blue-950 rounded-xl "
          onClick={onClick}
        >
          {name}
        </button>
      </div>
    </>
  );
};
