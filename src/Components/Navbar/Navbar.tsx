import styles from "./Navbar.module.css";

interface Props {
  items: string[];
}
const Navbar = ({ items }: Props) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo"></div>

          <ul className={[styles.navList].join(" ")}>
            <li>
              <img width={30} src="../../public/logo.png" alt="" />
            </li>
            {items.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
