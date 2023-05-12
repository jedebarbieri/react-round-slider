import { Vector2 } from 'mz-math';
import { getEllipseSegment, getSVGCenter, getSVGSize } from './svg-provider';
import { normalizeAngles } from './angles-provider';
import {
    DEFAULT_SVG_RX,
    DEFAULT_SVG_RY,
    DEFAULT_STROKE_WIDTH,
    DEFAULT_POINTER_RX,
    DEFAULT_POINTER_RY,
    DEFAULT_BG_COLOR,
} from './defaults';
import { getNumber, getString } from './common';
import { IUserSettings, IStatePointer, IState, IUserSettingsPointer } from '../interfaces';

export const getInitialPointers = (propsPointers?: IUserSettingsPointer[]): IStatePointer[] => {

    if(!propsPointers || propsPointers.length <= 0){
        return [{
            pointerRadii: [DEFAULT_POINTER_RX, DEFAULT_POINTER_RY],
        }]
    }
    const pointers: IStatePointer[] = [];

    for(const propsPointer of propsPointers){

        const pointerRadii: Vector2 = [
            getNumber(propsPointer.rx, DEFAULT_POINTER_RX),
            getNumber(propsPointer.ry, DEFAULT_POINTER_RY),
        ];

        pointers.push({
            pointerRadii,
        });
    }

    return pointers;
};

const getMaxPointerRadii = (pointers: IStatePointer[]) : Vector2 => {
    let maxX = -Infinity;
    let maxY = -Infinity;

    for(const pointer of pointers){
        maxX = Math.max(maxX, pointer.pointerRadii[0]);
        maxY = Math.max(maxY, pointer.pointerRadii[1]);
    }

    return [
        maxX,
        maxY,
    ];
};

// ---------------- SETTINGS -------------------------
export const formatSettings = (props: IUserSettings) : IState => {

    const pointers: IStatePointer[] = getInitialPointers(props.pointers);

    const svgRadii: Vector2 = [getNumber(props.rx, DEFAULT_SVG_RX), getNumber(props.ry, DEFAULT_SVG_RY)];
    const [startAngleDegrees, endAngleDegrees] = normalizeAngles(props.startAngleDegrees, props.endAngleDegrees);

    const strokeWidth = getNumber(props.strokeWidth, DEFAULT_STROKE_WIDTH);
    const bgColor = getString(props.bgColor, DEFAULT_BG_COLOR);

    const maxPointer = getMaxPointerRadii(pointers);

    const [ svgWidth, svgHeight ] = getSVGSize(svgRadii, maxPointer, strokeWidth);

    const { sliderStartPoint, sliderEndPoint, largeArcFlag } = getEllipseSegment(
        startAngleDegrees,
        endAngleDegrees,
        svgRadii,
        maxPointer,
        strokeWidth
    );

    const svgCenter = getSVGCenter(svgRadii, maxPointer, strokeWidth);
    const angles: Vector2 = [startAngleDegrees, endAngleDegrees];
    const svgSize: Vector2 = [svgWidth, svgHeight];

    return {
        pointers,
        svgRadii,
        angles,

        strokeWidth,
        bgColor,

        svgSize,
        svgCenter,

        sliderStartPoint,
        sliderEndPoint,
        largeArcFlag,
    };
};
