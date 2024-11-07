"use strict";
{
    const calculateShapeArea = (pq) => {
        if (pq.shape == 'circle') {
            return Math.PI * pq.radius;
        }
        else {
            return pq.height * pq.width;
        }
    };
    const po = calculateShapeArea({ shape: 'rectangle', width: 4, height: 6 });
    console.log(po);
}
