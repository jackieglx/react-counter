import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GridContext = createContext();

export const GridContextProvider = ({ children }) => {
    const [gridState, setGridState] = useState([false, false, false, false]);

    const toggleCellState = (index) => {
        setGridState((prevState) =>
            prevState.map((cellState, i) => (i === index ? !cellState : cellState))
        );
    };

    const countOn = gridState.filter((state) => state).length;

    return (
        <GridContext.Provider value={{ gridState, toggleCellState, countOn }}>
            {children}
        </GridContext.Provider>
    );
};

GridContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
