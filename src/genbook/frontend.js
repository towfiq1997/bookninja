import { render } from "@wordpress/element";
import App from "./App";

function reacttest() {
    if (document.getElementsByClassName('reactroot').length) {
        render(<App />, document.getElementById('reactroot'));
    }
}
document.addEventListener("DOMContentLoaded", () => {
    reacttest();
})
