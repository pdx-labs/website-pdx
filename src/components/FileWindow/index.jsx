import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export default function FileWindow({
    children,
    minHeight,
    url = "/file.txt",
    style,
    bodyStyle,
}) {
    return (
        <div className={styles.fileWindow} style={{ ...style, minHeight }}>
            <div className={styles.fileWindowHeader}>
                <div className={styles.buttons}>
                    <span
                        className={styles.dot}
                        style={{ background: "#f25f58" }}
                    />
                    <span
                        className={styles.dot}
                        style={{ background: "#fbbe3c" }}
                    />
                    <span
                        className={styles.dot}
                        style={{ background: "#58cb42" }}
                    />
                </div>
                <div
                    className={clsx(
                        styles.fileWindowAddressBar,
                        "text--truncate"
                    )}
                >
                    {url}
                </div>
            </div>

            <div className={styles.fileWindowBody} style={bodyStyle}>
                {children}
            </div>
        </div>
    );
}
