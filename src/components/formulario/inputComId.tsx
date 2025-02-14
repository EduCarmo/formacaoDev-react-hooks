import { useId } from "react";
import Flex from "../template/Flex";

export default function InputComId(props: any) {

    const id = useId()

    return (
        <Flex center>
            <label
                className="mt-4"
                htmlFor={id}
            >
                {props.label}
            </label>

            <input
                id={id}
                className="m-2 text-gray-600 rounded-md"
                type="text"
            />
        </Flex>
    )
}