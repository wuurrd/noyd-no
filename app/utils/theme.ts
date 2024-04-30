export const MAX_WIDTH = "max-w-[1280px]";

type ThemeKey = "keyLimePie" | "summerSky" | "commonYarn" | "coffeeScript" | "satisfiedSepia" | "paletableForAll";

type Theme = {
    backgroundStyles: React.CSSProperties;
    contentBackground?: string;
    footerStyles?: string;
};

// backgrounds from https://codioful.com/

const themes: Record<ThemeKey, Theme> = {
    keyLimePie: {
        backgroundStyles: { background: "linear-gradient(303.43deg, #d1f7eb 0%, #eeeea1 100%, #000066 50%)" },
    },
    summerSky: {
        backgroundStyles: { background: "linear-gradient(160deg, #cbecff 0%, #fff7de 90%)" },
    },
    commonYarn: {
        backgroundStyles: {
            background:
                "linear-gradient(288deg, #FFB6B9 0%, #FFB6B9 35%, #FAE3D9 calc(35% + 1px), #FAE3D9 45%, #BBDED6 calc(45% + 1px), #BBDED6 65%, #61C0BF calc(65% + 1px), #61C0BF 100%)",
        },
        contentBackground: "bg-[#ffffffdd]",
    },
    paletableForAll: {
        backgroundStyles: {
            background:
                "linear-gradient(288deg, #E5DDC5 0%, #E5DDC5 35%, #F1EEDC calc(35% + 1px), #F1EEDC 45%, #BED7DC calc(45% + 1px), #BED7DC 65%, #B3C8CF calc(65% + 1px), #B3C8CF 100%)",
        },
        contentBackground: "bg-[#ffffffdd]",
    },
    coffeeScript: {
        backgroundStyles: {
            background:
                "linear-gradient(123deg, #FFFCAC 0%, #FFFFFF 67%), linear-gradient(180deg, #D8D8D8 0%, #6B0000 100%), linear-gradient(142deg, #F9F5F0 0%, #F9F5F0 33%, #F2EAD3 calc(33% + 1px), #F2EAD3 56%, #F4991A calc(56% + 1px), #F4991A 62%, #321313 calc(62% + 1px), #321313 100%)",
            backgroundBlendMode: "multiply, overlay, normal",
        },
        contentBackground: "bg-[#fffffff6]",
        footerStyles: "text-white",
    },
    satisfiedSepia: {
        backgroundStyles: {
            background:
                "linear-gradient(110deg, #FFD9E8 4%, #FFD9E8 40%, #DE95BA calc(40% + 1px), #DE95BA 50%, #7F4A88 calc(50% + 1px), #7F4A88 70%, #4A266A calc(70% + 1px), #4A266A 100%)",
        },
        contentBackground: "bg-[#fffffff6]",
        footerStyles: "text-white",
    },
};

export const currentTheme = themes.paletableForAll;
