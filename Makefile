
build:
	pnpm install

run:
	pnpm dev -o --watch

# @see https://nitro.unjs.io/deploy/providers/azure
azure-local-preview:
	# NITRO_PRESET=azure yarn build && npx @azure/static-web-apps-cli start .output/public --api-location .output/server
	NITRO_PRESET=azure pnpm build && npx @azure/static-web-apps-cli start .output/public --api-location .output/server

# @see https://nitro.unjs.io/deploy/providers/azure
azure-functions-local-test:
	# NITRO_PRESET=azure-functions yarn build && cd .output && func start
	NITRO_PRESET=azure-functions pnpm build && cd .output && func start