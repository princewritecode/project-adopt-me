import { useState } from "react";
const ANIMALS = ["Select", "bird", "cat", "rabbit", "dogs", "reptile"];
function SearchParams()
{
    const [animal, setAnimal] = useState('');
    const [location, setLocation] = useState('');
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">Location
                    <input id="location" onChange={e => setLocation(e.target.value)} value={location} placeholder="location"></input>
                </label>
                <label htmlFor="animal">Animal
                    <select id="animal" onChange={e => setAnimal(e.target.value)} value={animal} placeholder="location">
                        {
                            ANIMALS.map(animal => <option key={animal}>
                                {animal}
                            </option>)
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default SearchParams;