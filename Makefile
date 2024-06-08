install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

lint:
	npx eslint .

publish:
	npm publish --dry-run

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progresion:
	node bin/brain-progression.js	

brain-prime:
	node bin/brain-prime.js

.PHONY: test