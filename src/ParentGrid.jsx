import { useContext } from "react";
import { GridContext } from "./GridContext";
import SingleCell from "./SingleCell.jsx";

const gridIndices = [0, 1, 2, 3];

const ParentGrid = () => {
    const { countOn } = useContext(GridContext);

    return (
        <div>
            <h1 style={{marginBottom: "20px", textAlign: "center"}}>
                Count: {countOn}
            </h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 100px)",
                    gap: "0px",
                }}
            >
                {gridIndices.map((index) => (
                    <SingleCell key={index} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default ParentGrid;
