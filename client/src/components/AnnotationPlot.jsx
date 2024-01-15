import React, { useEffect, useRef } from 'react';
import { scaleLinear } from 'd3-scale';

import "./AnnotationPlot.css"

const AnnotationPlot = ({ 
  points, 
  xDomain, 
  yDomain, 
  width, 
  height
}) => {
  const container = useRef();
  
  useEffect(() => {
    if(xDomain && yDomain) {
      const xScale = scaleLinear()
        .domain(xDomain)
        .range([0, width])
      const yScale = scaleLinear()
        .domain(yDomain)
        .range([height, 0])

      const canvas = container.current
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'black'
      points.map(point => {
        ctx.fillRect(xScale(point[0]), yScale(point[1]), 3, 3)
      })
    }

  }, [points, xDomain, yDomain, width, height])

  return <canvas 
    className="annotation-plot"
    ref={container} 
    width={width} 
    height={height} />;
};

export default AnnotationPlot;