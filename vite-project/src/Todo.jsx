import { useState } from "react";
import './Todo.css';  // Import your CSS file

function Todo() {
    const [arr, setArr] = useState([]);

    function create() {
        const a = document.getElementById("value").value;
        if (a.trim() !== "") {
            setArr([...arr, a]);
            document.getElementById("value").value = "";
        }
    }

    function del(index) {
        setArr(arr.filter((_, i) => index !== i));
    }

    function up(index) {
        const nsetArr = [...arr];
        if (index > 0) {
            [nsetArr[index], nsetArr[index - 1]] = [nsetArr[index - 1], nsetArr[index]];
            setArr(nsetArr);
        }
    }

    function down(index) {
        const nsetArr = [...arr];
        if (index < arr.length - 1) {
            [nsetArr[index], nsetArr[index + 1]] = [nsetArr[index + 1], nsetArr[index]];
        }
        setArr(nsetArr);
    }

    return (
        <div className="container">
            <input type="text" id="value" className="input" />
            <button onClick={create} className="button">Submit</button>
            <ol className="ol">
                {arr.map((value, index) => (
                    <li key={index} className="li">
                        {value}
                        <div className="button-container">
                            <button onClick={() => up(index)} className="button-up">⬆️Up</button>
                            <button onClick={() => down(index)} className="button-down">⬇️Down</button>
                            <button onClick={() => del(index)} className="button-delete">Delete</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Todo;
