import React, { useState, useEffect } from "react";
import axios from "axios";

const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

function Convert({ language, text }) {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const doTranslation = async () => {
            try {
                const { data } = await axios.post(
                    "https://translation.googleapis.com/language/translate/v2",
                    {},
                    {
                        params: {
                            q: text,
                            target: language.value,
                            key: KEY,
                        },
                    }
                );

                setTranslated(data.data.translations[0].translatedText);
            } catch (error) {
                console.log(error);
            }
        };

        doTranslation();
    }, [debouncedText, language]);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timeOutId);
        };
    }, [text]);

    return (
        <div>
            <h2 className="ui header">{translated}</h2>
        </div>
    );
}

export default Convert;
