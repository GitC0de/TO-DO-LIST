//직접 dispatch를 통해 수정

import React, { useImperativeHandle, forwardRef } from "react";
import { useStateValue } from "../StateProvider";

const AddSchedule = forwardRef((props, ref) => {
    const [{ list }, dispatch] = useStateValue();

    const addToList = () => {
        dispatch({
            type: "ADD_TO_LIST",
            item: {
                date: props.date,
                title: props.title,
            },
        });
    };

    useImperativeHandle(ref, () => ({
        addToList,
    }));

    return null; 
});

export default AddSchedule;
