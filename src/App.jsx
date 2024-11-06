
import { GridContextProvider } from "./GridContext";
import ParentGrid from "./ParentGrid";

function App() {
    return (
        <GridContextProvider>
            <ParentGrid />
        </GridContextProvider>
    );
}

export default App;
