function changeItem(){

    const image = document.querySelector('#image')
    const url = prompt ('inter your url')
    const borderColor= prompt ('inter your border size')
     const width = prompt("Please enter the width of the image (in pixels):");
    const height = prompt("Please enter the height of the image (in pixels):");
    const borderRadius = prompt("Please enter the border radius (in pixels):");
 

    image.setAttribute('src', url)
    image.style.border = `2px solid ${borderColor}`;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
    image.style.padding = "15px";
    image.style.backgroundColor = '#cfc2dc';

}

