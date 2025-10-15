interface childrenProps {
  children: React.ReactNode;
}
export const ChildrenExample = ({ children }: childrenProps) => {
  return (
    <>
      <div>
        <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-4 flex-wrap">
          <img
            className="mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-left "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDN8p0kAqQlUEI0EKK0xj0Bx_kg5J4KRohqQ&s"
            alt="just"
          />
          <div>
            <h2 className="font-mono text-xs text-blue-500 uppercase dark:text-blue-400">
              Children Example
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-balance text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              est voluptatem necessitatibus maiores, qui corporis odit debitis
              obcaecati ad consequuntur.
            </p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
