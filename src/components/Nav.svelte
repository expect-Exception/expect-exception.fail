<script>
	export let segment;

	const item = "block text-center sm:float-left";
	const anchor = "relative inline-block pt-4 pb-2 px-2 text-primary-text hover:text-primary hover:cursor-pointer";
</script>

<style lang="scss">
	.highlighted {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		background-color: #000;
		height: 3px;
		display: block;
		bottom: -1px;
	}

	.selected::after {
		@extend .highlighted;
		background-color: #3F51B5;
	}
	
	.anchor::after {
		@extend .highlighted;
	}

	.anchor:hover::after {
		@extend .highlighted;
		background-color: #3F51B5;
	}

	.logo {
		max-width: 300px;
	}
</style>

<nav class="p-2 flex md:justify-between flex-wrap justify-center">
	<div class="w-full md:w-auto mb-8 md:mb-0">
		<div class="logo mx-auto">
			<a href=".">
				<picture>
					<source 
						media="(min-width: 768px)"
						srcset="expect_exception_logo_long.svg">
					<img src="expect_exception_logo.svg" alt="expect(Exception) Logo" class="max-w-full">
				</picture>
			</a>
		</div>
	</div>
	<ul class="m-0 p-0 clearfix text-xl md:text-base">
		<li class={item}>
			<a
			  class="{segment === undefined ? `${anchor} selected text-primary` : `${anchor} text-primary-text`}"
				href="."
			>
				Home
			</a>
		</li>
		<li class={item}>
			<a
				class="{segment === 'about' ? `${anchor} selected text-primary` : `${anchor} text-primary-text`}"
				href="/about"
			>
				Exceptional Crew
			</a>
		</li>
		<li class={item}>
			<a
				class="{segment === 'sponsorships' ? `${anchor} selected text-primary` : `${anchor} text-primary-text`}"
				href="/sponsorships"
			>
			  Sponsorships
			</a>
		</li>
	</ul>
</nav>
