//수정 시스템

import React, { useImperativeHandle, forwardRef } from "react";
import { useStateValue } from "../StateProvider";

const Revise = forwardRef((props, ref) => {
    const [{ list }, dispatch] = useStateValue();

    const reviseList = () => {
        dispatch({
            type: "REVISE_LIST",
            beforeTitle: props.beforeTitle,
            item: {
                date: props.date,
                title: props.afterTitle
            },
        });
    };

    useImperativeHandle(ref, () => ({
        reviseList,
    }));

    return null; 
});

export default Revise;