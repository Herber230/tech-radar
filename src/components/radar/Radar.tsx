import React, { RefObject, useRef, useEffect } from 'react';
import { radarConfig } from './RadarConfig';
import { radarVisualization } from './RadarVisualization';
import * as d3 from 'd3';

function Radar() {

    const radarRef = useRef<SVGSVGElement>(null) as RefObject<SVGSVGElement>;

    useEffect(() => {
        let svg = d3.select(radarRef.current);
        radarVisualization(radarConfig, svg);
    }, []);


    return (
        <div>
            Radar Component!!!
            <br/>
            <br/>
            <svg 
                id="radar-svg" 
                ref={radarRef}
                height={radarConfig.height}
                width={radarConfig.width}
            ></svg>
        </div>
    );
}

export default Radar;