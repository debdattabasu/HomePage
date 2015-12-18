declare module "google-material-color" {
	interface Palette {
		get(color: string, shade: string); 
	}
	
	var PaletteGlobal: Palette;
	
	export = PaletteGlobal;
}