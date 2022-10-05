const ConsomeApi = async () => {
    try {
        const data = await fetch('https://restcountries.com/v3.1/all');
        const json = await data.json()
        console.log(json);     
    } catch (error) {
        console.log(error.message);
    }

}



export default ConsomeApi