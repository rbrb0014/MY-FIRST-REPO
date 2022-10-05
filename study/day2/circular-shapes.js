const PI = 3.14159265358;

const round = number => Math.round(number * 100) / 100;

const getCircumference = radius => round(2 * PI * radius);

const getCircleArea = radius => round(PI * radius * radius);

const getCylinderSurfaceArea = (radius, height) => {
    const circleArea = getCircleArea(radius);
    const sideArea = getCircumference(radius) * height;
    return round(2 * circleArea + sideArea);
};

module.exports = {
    getCircumference,
    getCircleArea,
    getCylinderSurfaceArea,
    getsphereVolum: radius => round(4 * PI * radius ** 3 / 3),
};