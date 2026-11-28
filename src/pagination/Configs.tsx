import { FaMoon, FaSun, FaCog } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import '../styles/Configs.css'

function Configs() {
    const { preference, setPreference } = useTheme();

    return (
        <>
            <section className="configs">
                <h3>Aparencia</h3>

                <section id="aparencia">
                    <section className='themeBox dark'>
                        <div className="themeDisplay">
                            <FaMoon />
                            <input className="tema" type="radio" name="darkTheme" id="darkTheme" checked={preference === "dark"}
                                onChange={() => setPreference("dark")} />
                        </div>
                        <p>Tema escuro</p>
                    </section>
                    <section className='themeBox light'>
                        <div className="themeDisplay">
                            <FaSun />
                            <input className="tema" type="radio" name="lightTheme" id="lightTheme" checked={preference === "light"}
                                onChange={() => setPreference("light")} />
                        </div>
                        <p>Tema claro</p>
                    </section>
                    <section className='themeBox system'>
                        <div className="themeDisplay">
                            <FaCog />
                            <input className="tema" type="radio" name="systemTheme" id="systemTheme" checked={preference === "system"}
                                onChange={() => setPreference("system")} />
                        </div>
                        <p>Tema do sistema</p>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Configs