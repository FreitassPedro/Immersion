import { useEffect, useState } from "react";

type IconProps = {
    variant: string;
}

export const Icon: React.FC<IconProps> = ({variant}) => {
    const [iconSrc, setIconSrc] = useState();

    useEffect(() => {

        const mount = async () => {
            const icon = await import(`../../../public/icons/${variant}.svg`);
            setIconSrc(icon.default);
        };

        mount();
    }, [variant]);

    return <img src={iconSrc} width={"32px"} height={"32px"}/>
};
