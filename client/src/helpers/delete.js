import axios from "axios";

export const deleteRecipe = async id => {
    try {
        const res = await axios.delete('http://localhost:3001/recipes/' + id + '/delete');
        if (res.status === 201)
            console.log('deleted successfully');
    } catch (err) {
        return alert(err.message);
    }
};