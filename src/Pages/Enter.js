import React from "react";
const Registers = () => {
    const [logi, setLogi] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        age: " ",
        password: " ",
        confirmPassword: " ",
        sex: " other",
        Language: " english",
        love: " false"

    });
    const [error, setError] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        age: " ",
        password: " ",
        confirmPassword: " ",
    }
    );
    const change = (e) => {
        const { name, value, type, checked } = e.target;
        setLogi((state) => ({
            ...state,
            [name]: type == "checkbox" ? checked : value
        }))
    }
    const Results = () => {
        console.log("Logi", logi);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (logi.firstName.length < 6) {
            setError((state) => ({
                ...state,
                firstName: " you are crazy"
            }))
        }
        else {
            setError((state) => ({
                ...state,
                firstName: " ",

            }))
        }
        Results();
    }
   return (
        <>
            <div>Sign Up</div>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <input type="text" name="firstName" onChange={change} value={logi.firstName} />
                        {!!error.firstName && (<div><h>{error.firstName}</h></div>)}
                    </div>
                    <div>
                        <input type="text" name="lastName" onChange={change} value={logi.lastName} />
                    </div>
                    <div>
                        <input type="text" name="email" onChange={change} value={logi.email} />
                    </div>
                    <div>
                        <input type="text" name="age" onChange={change} value={logi.age} />
                    </div>
                    <div>
                        <input type="text" name="password" onChange={change} value={logi.password} />
                    </div>
                    <div>
                        <input type="text" name="confirmPassword" onChange={change} value={logi.confirmPassword} />
                    </div>
                    <div>
                        <label> Love:
                            <input type="checkbox" onChange={change} />

                        </label>
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>

        </>
    );
}
export default Registers;