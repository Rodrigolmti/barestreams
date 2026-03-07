import { Agent, setGlobalDispatcher } from "undici";

export const enableHttp2IfAvailable = (): void => {
	setGlobalDispatcher(
		new Agent({
			allowH2: true,
		}),
	);
};
