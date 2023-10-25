// Problem 1: Write a function to calculate the area of a triangle.

function areaOfTriangle(base, height){
    if(base <=0 || height <=0){
        return "Base and Height must be positive";
    }
    area = 0.5 * base * height;
    return area;
}

result = areaOfTriangle(-5, -35);
console.log(result);