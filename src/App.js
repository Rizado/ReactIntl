import React, {useState, useEffect} from "react";
import {useTranslation} from "react-i18next";
import './i18next';

const languages = [
    { value: "en", text: "English" },
    { value: "es", text: "Español" },
    { value: "ru", text: "Русский" },
];

function App() {
    const { t, i18n } = useTranslation();

    // Obtener el idioma actual desde i18next
    const [lang, setLang] = useState(i18n.language || "en");

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);

    const handleChange = (e) => {
        const newLang = e.target.value;
        setLang(newLang);
    };

    return (
        <div className="App">
            <h1>{t("main")}</h1>
            <label>{t("choose")}</label>
            <select value={lang} onChange={handleChange}>
                {languages.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default App;
