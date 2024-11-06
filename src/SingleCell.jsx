import { useContext } from "react";
import { GridContext } from "./GridContext";

const SingleCell = ({ index }) => {
    const { gridState, toggleCellState } = useContext(GridContext);

    const handleClick = () => {
        toggleCellState(index);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                width: "100px",
                height: "100px",
                border: "2px solid grey",
                backgroundColor: gridState[index] ? "black" : "white",
                cursor: "pointer",
            }}
        ></div>
    );
};

export default SingleCell;
