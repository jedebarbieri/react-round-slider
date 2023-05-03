import { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent, useContext, useRef, useState } from 'react';
import { SettingsContext } from '../domain/settings-provider';
import { Pointer } from './Pointer';
import { getPointerPosition } from '../domain/svg-provider';
import { Vector2 } from 'mz-math';

export const Slider = () => {

    const svgRef = useRef<SVGSVGElement>(null);
    const sliderRef = useRef<SVGPathElement>(null);

    const settings = useContext(SettingsContext);

    const {
        sliderStartPoint, sliderEndPoint,
        largeArcFlag, svgRadii,
        bgColor, strokeWidth,
        svgWidth, svgHeight, svgCenter,
        startAngleDegrees, endAngleDegrees
    } = settings;

    const [pointerPosition, setPointerPosition] = useState<Vector2>(sliderStartPoint);

    const onValueChange = (evt: MouseEvent | ReactMouseEvent | TouchEvent | ReactTouchEvent) => {

        if(!svgRef || !svgRef.current || !sliderRef || !sliderRef.current) return;

        const mouseX = evt.type.indexOf('mouse') !== -1 ? (evt as MouseEvent).clientX : (evt as TouchEvent).touches[0].clientX;
        const mouseY = evt.type.indexOf('mouse') !== -1 ? (evt as MouseEvent).clientY : (evt as TouchEvent).touches[0].clientY;

        const pointerPos = getPointerPosition(
            svgRef.current,
            [mouseX, mouseY],
            svgCenter,
            svgRadii,
            pointerPosition,
            startAngleDegrees,
            endAngleDegrees
        );

        setPointerPosition(pointerPos);
    }

    const onMouseDown = (evt: MouseEvent | ReactMouseEvent) => {
        if (evt.preventDefault) {
            evt.preventDefault();
        }

        onValueChange(evt);

        window.addEventListener('mousemove', onValueChange);
        window.addEventListener('mouseup', onMouseUp);
    };

    const onMouseUp = (_evt: MouseEvent | ReactMouseEvent) => {
        window.removeEventListener('mousemove', onValueChange);
        window.removeEventListener('mouseup', onValueChange);
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            ref={ svgRef }
            width={ svgWidth }
            height={ svgHeight }>

            <path
                ref={ sliderRef }
                d={ `M ${ sliderStartPoint[0] } ${ sliderStartPoint[1] } A ${ svgRadii[0] } ${ svgRadii[0] } 0 ${ largeArcFlag } 1 ${ sliderEndPoint[0] } ${ sliderEndPoint[1] }` }
                stroke={ bgColor }
                strokeWidth={ strokeWidth }
                fill="none"
                shapeRendering="geometricPrecision"
                strokeLinecap="round"
                cursor="pointer"
                onMouseDown={ onMouseDown }
                onMouseUp={ onMouseUp }
                onTouchMove={ onValueChange }
                onTouchStart={ onValueChange }
            />
            <Pointer center={ pointerPosition } />
        </svg>
    )
};