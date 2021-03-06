/*
 *     Copyright (C) 2010-2016 Marvell International Ltd.
 *     Copyright (C) 2002-2010 Kinoma, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 */
const isMac = system.platform == "mac";

export const FIXED_FONT = isMac ? "Menlo" : "Fira Mono";
export const BOLD_FIXED_FONT = isMac ? "bold Menlo" : "bold Fira Mono";

export const BOLD_FONT = isMac ? "Open Sans Bold" : "OpenSans-Bold";
export const BOLD_ITALIC_FONT = isMac ? "Open Sans Bold Italic" : "OpenSans-BoldItalic";
export const ITALIC_FONT = isMac ? "Open Sans Italic" : "OpenSans-Italic";
export const LIGHT_FONT = isMac ? "Open Sans Light" : "OpenSans-Light";
export const NORMAL_FONT = isMac ? "Open Sans" : "OpenSans-Regular";
export const SEMIBOLD_FONT = isMac ? "Open Sans Semibold" : "OpenSans-Semibold";

export const BLACK = "black";
export const TRANSPARENT = "transparent";
export const WHITE = "white";

export const PASTEL_ALPHA = 0.70;
export const LIGHT_ALPHA = 0.50;
export const DARK_ALPHA = 0.10;
export const DARKER_ALPHA = 0.20;
export const DARKEST_ALPHA = 0.40;

export const CYAN = "#6497ff";
export const PASTEL_CYAN = blendColors(PASTEL_ALPHA, CYAN, WHITE);
export const LIGHT_CYAN = blendColors(LIGHT_ALPHA, CYAN, WHITE);
export const DARK_CYAN = blendColors(DARK_ALPHA, CYAN, BLACK);
export const DARKER_CYAN = blendColors(DARKER_ALPHA, CYAN, BLACK);

export const GRAY = "#a0a0a0";
//export const PASTEL_GRAY = blendColors(PASTEL_ALPHA, GRAY, WHITE);
export const LIGHT_GRAY = blendColors(LIGHT_ALPHA, GRAY, WHITE);
export const DARK_GRAY = blendColors(DARK_ALPHA, GRAY, BLACK);
export const DARKER_GRAY = blendColors(DARKER_ALPHA, GRAY, BLACK);
export const DARKEST_GRAY = blendColors(DARKEST_ALPHA, GRAY, BLACK);

export const GREEN = "#7fbd3b";
export const PASTEL_GREEN = blendColors(PASTEL_ALPHA, GREEN, WHITE);
export const LIGHT_GREEN = blendColors(LIGHT_ALPHA, GREEN, WHITE);
export const DARK_GREEN = blendColors(DARK_ALPHA, GREEN, BLACK);
export const DARKER_GREEN = blendColors(DARKER_ALPHA, GREEN, BLACK);

export const ORANGE = "#fe9d27";
export const PASTEL_ORANGE = blendColors(PASTEL_ALPHA, ORANGE, WHITE);
export const LIGHT_ORANGE = blendColors(LIGHT_ALPHA, ORANGE, WHITE);
export const DARK_ORANGE = blendColors(DARK_ALPHA, ORANGE, BLACK);
export const DARKER_ORANGE = blendColors(DARKER_ALPHA, ORANGE, BLACK);

export const RED = "#ee434a";
export const PASTEL_RED = blendColors(PASTEL_ALPHA, RED, WHITE);
export const LIGHT_RED = blendColors(LIGHT_ALPHA, RED, WHITE);
export const DARK_RED = blendColors(DARK_ALPHA, RED, BLACK);
export const DARKER_RED = blendColors(DARKER_ALPHA, RED, BLACK);

export const YELLOW = "#f2db1d";
export const PASTEL_YELLOW = blendColors(PASTEL_ALPHA, YELLOW, WHITE);
export const LIGHT_YELLOW = blendColors(LIGHT_ALPHA, YELLOW, WHITE);
export const DARK_YELLOW = blendColors(DARK_ALPHA, YELLOW, BLACK);
export const DARKER_YELLOW = blendColors(DARKER_ALPHA, YELLOW, BLACK);


export var BORDER_GRAY = "#aaaaaa";
export var HOVER_GRAY = "#e0e0e0";
export var CLICK_GRAY = "#d6d6d6";
export var PASTEL_GRAY = "#f7f7f7";
export var TEXT_GRAY = "#545454";

export var GRAYS = new Array(100).fill();
for (let i = 0; i < 100; i++) {
	GRAYS[i] = blendColors(i / 100, WHITE, BLACK);
}

export const grayBodySkin = new Skin({ fill:PASTEL_GRAY });
///export const grayBorderSkin = new Skin({ stroke:PASTEL_GRAY, borders: { left:1, right:1, bottom:1 } });
export const grayFooterSkin = new Skin({ stroke:PASTEL_GRAY, borders: { top:1 } });
//export const grayHeaderSkin = new Skin({ fill:[GRAY, DARK_GRAY, DARKER_GRAY, GRAY] });
export const grayLineSkin = new Skin({ fill:[WHITE, PASTEL_GRAY, LIGHT_GRAY, PASTEL_GRAY], stroke:PASTEL_GRAY, borders: { left:1, right:1 } });

export const greenBodySkin = new Skin({ fill:PASTEL_GREEN });
export const greenBorderSkin = new Skin({ stroke:PASTEL_GREEN, borders: { left:1, right:1, bottom:1 } });
export const greenFooterSkin = new Skin({ stroke:PASTEL_GREEN, borders: { top:1 } });
export const greenHeaderSkin = new Skin({ fill:[GREEN, DARK_GREEN, DARKER_GREEN, GREEN] });
export const greenLineSkin = new Skin({ fill:[WHITE, PASTEL_GRAY, LIGHT_GRAY, PASTEL_GREEN], stroke:PASTEL_GREEN, borders: { left:1, right:1 } });

export const orangeBodySkin = new Skin({ fill:PASTEL_ORANGE });
export const orangeBorderSkin = new Skin({ stroke:PASTEL_ORANGE, borders: { left:1, right:1, bottom:1 } });
export const orangeFooterSkin = new Skin({ stroke:PASTEL_ORANGE, borders: { top:1 } });
export const orangeHeaderSkin = new Skin({ fill:[ORANGE, DARK_ORANGE, DARKER_ORANGE, ORANGE] });
export const orangeLineSkin = new Skin({ fill:[WHITE, PASTEL_GRAY, LIGHT_GRAY, PASTEL_ORANGE], stroke:PASTEL_ORANGE, borders: { left:1, right:1 } })

export const redBorderSkin = new Skin({ stroke:PASTEL_RED, borders: { left:1, right:1, bottom:1 } });
export const redHeaderSkin = new Skin({ fill:[RED, DARK_RED, DARKER_RED, RED] });

export const tableLineStyle = new Style({ font:NORMAL_FONT, size:14, color:BLACK, horizontal:"left" });

export const BUTTON_DISABLED = "#cdcdcd";
export const BUTTON_ENABLED = "#363636";

const buttonsTexture = new Texture("assets/buttons.png", 2);
export const buttonSkin = new Skin({ texture:buttonsTexture, x:0, y:0, width:60, height:30, states:30, tiles:{ left:15, right:15 } });
export const buttonsSkin = new Skin({ texture:buttonsTexture, x:62, y:2, width:26, height:26, variants:30, states:30 });
export const buttonStyle = new Style({ font:SEMIBOLD_FONT, size:12, color:[BUTTON_DISABLED, BUTTON_ENABLED, BUTTON_ENABLED, WHITE ] });


const glyphsTexture = new Texture("assets/glyphs.png", 2);
export const glyphsSkin = new Skin({ texture:glyphsTexture, x:0, y:0, width:20, height:20, variants:20, states:20 });

const lineNumberTexture = new Texture("assets/flags.png", 2);
export const lineNumberSkin = new Skin({ 
	texture:lineNumberTexture, 
	x:0, y:0, width:40, height:16, 
	tiles: { left:20, right: 12 }, 
	states:16,
	variants:40,
});
export const lineNumberStyle = new Style({ 
	font:BOLD_FIXED_FONT,
	size:10, 
	horizontal:"right",
	vertical:"bottom",
	right:15,
	bottom:1,
	color: [ DARKER_GRAY, WHITE ],
})
export const tabBreakpointSkin = new Skin({ texture:lineNumberTexture, x:16, y:16, width:24, height:16, tiles: { left:2, right: 12 }, });
export const tabBreakpointStyle = new Style({ 
	font:BOLD_FIXED_FONT,
	size:10, 
	horizontal:"right",
	vertical:"bottom",
	right:15,
	bottom:1,
	color: WHITE,
});
export const tabBrokenSkin = new Skin({ texture:lineNumberTexture, x:40, y:0, width:16, height:16 });

export const backgroundSkin = new Skin({ fill:WHITE });
export const noCodeSkin = new Skin({ fill:GRAYS[2] });

export const menuHeaderStyle = new Style({ font:SEMIBOLD_FONT, size:14, color:WHITE, horizontal:"left" });
export const menuLineSkin = new Skin({ fill:[TRANSPARENT, TRANSPARENT, PASTEL_GRAY, LIGHT_GRAY] });
export const menuLineStyle = new Style({ font:SEMIBOLD_FONT, size:14, color: [BUTTON_DISABLED, BLACK, BLACK, BLACK] })

export const fieldLabelSkin = new Skin({ fill: [ "transparent","transparent","#e0e0e0", "#cbe1fa" ] });
export const fieldScrollerSkin = new Skin({ fill: WHITE, stroke:HOVER_GRAY, borders: { left:1, right:1, bottom:1, top:1 } });

export const tabsPaneSkin = new Skin({ fill:GRAYS[14], stroke:GRAYS[24], borders: { bottom:1 }  });
export const tabSkin = new Skin({ fill:[GRAYS[6], GRAYS[14], GRAYS[10], GRAYS[6]], stroke:GRAYS[24], borders: { right:1 }  });
export const tabStyle = new Style({ font:SEMIBOLD_FONT, size:12, color:[BLACK, GRAYS[75], GRAYS[75], BLACK], horizontal:"center", left:20, right:20 });

export const paneBodySkin = new Skin({ fill:WHITE });
export const paneBorderSkin = new Skin({ fill:GRAYS[14] });
export const paneHeaderSkin = new Skin({ fill:[GRAYS[6], GRAYS[10], GRAYS[14], GRAYS[6]] });
export const paneHeaderStyle = new Style({ font:SEMIBOLD_FONT, size:12, color:GRAYS[85], horizontal:"left" });
export const errorStyle = new Style({ font:NORMAL_FONT, size:12, color:GRAYS[85] });

export const waitSkin = new Skin({ texture:new Texture("assets/wait.png", 2), x:0, y:0, width:20, height:20, variants:20 });
export const waitStyle = new Style({ font:NORMAL_FONT, size:12, color:GRAYS[50] });

export const headerHeight = 26;
export const footerHeight = 3;
export const lineHeight = 18;
export const lineIndent = 18;

