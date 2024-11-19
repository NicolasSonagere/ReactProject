export function NavElements({ label }) {
    return (
      <li className="relative cursor-pointer my-6 ">
        <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out hover:bg-[length:100%_2px]">
          {label}
        </span>
      </li>
    );
  }
  