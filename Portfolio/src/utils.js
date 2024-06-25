export const getImageUrl = (path) =>{
    // it helps to import images dynamically
    return new URL(`/assets/${path}`,import.meta.url).href;//it is taking relative path that we passed to it and it is taking base url of our website appending the path to it and sending us the new updated url
};