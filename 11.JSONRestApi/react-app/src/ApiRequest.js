const req = async (url = '', optObject = null, errorMessage = null) => {
    try {
        const res = await fetch(url, optObject);
        if (!res.ok) throw Error('Please reload the app');
            
    } catch (error) {
        errorMessage = error.Message;
    } finally {
        return errorMessage;
    }
}

export default req;