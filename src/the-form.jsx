import GeneralInfo from "./general-info";
import EducationalExperience from "./educational-exp";
import PracticalExperience from "./practical-exp";

function TheForm() {
    function theSubmit(e) {
        e.preventDefault();
        console.log("Hello");
    }


    return (
        <section>
            <form onSubmit={theSubmit}>
                <GeneralInfo />
                <EducationalExperience />
                <PracticalExperience />
                <button id="submit">Submit</button>
            </form>
        </section>
    )
}

export default TheForm