declare module "radium" {
	interface Radium {
		<T extends Function>(target: T): T | void; 
	}
	var RadiumGlobal: Radium;
	export = RadiumGlobal;
}