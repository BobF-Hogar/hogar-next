import React, { useCallback, useEffect, useState } from "react";

import "./TabView.css";

const COLUMN_SIZE = 300;
const COLUMN_GAP = 40;

function TabView({ changeTab, columnGap, columnSize, longNames, tabNames, children }) {
    const [ showAll, setShowAll ] = useState(true);
    const [ curTab, setCurTab ] = useState(0);

    const workingSize = columnSize || COLUMN_SIZE;

    const sizeStyle = {};
    if (workingSize) { sizeStyle.width = `${workingSize}px`; }

    const doChangeTab = useCallback((tabIndex) => {
        if ((tabIndex < 0) || (!children?.length) || (tabIndex >= children.length)) {
            return;
        }

        setCurTab(tabIndex);

        if (changeTab) {
            changeTab(tabIndex);
        }
    }, [ changeTab, children?.length]);

    useEffect(() => {
        const setLayoutMode = () => {
            setShowAll(window.innerWidth > 1.5 * workingSize + COLUMN_GAP);
        }

        window.addEventListener("resize", setLayoutMode);

        return () => { window.removeEventListener("resize", setLayoutMode); };
    }, [ workingSize, setShowAll, doChangeTab ]);

    if (showAll) {
        return <div className="tabView"><div className="tabContainer">
            {children.map((child, index) => {
                return <div key={index} style={sizeStyle}>
                    <h4>
                        {(longNames && longNames[index]) || (tabNames && tabNames[index]) || `Tab ${index}`}
                    </h4>
                    {child}
                </div>
            })}
        </div></div>;
    } else {
        return <div className="tabbedContainer">
            <div>
                {children.map((child, index) => {
                    return <div key={index} style={sizeStyle}>
                        {tabNames[index] || `Tab ${index}`}
                    </div>;
                })}
            </div>
            {children[curTab]}
        </div>;
    }
}

export default TabView;