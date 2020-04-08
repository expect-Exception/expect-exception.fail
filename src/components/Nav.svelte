<script>
	export let segment;

	const anchor = "sm:text-base text-sm smanchor relative inline-block pt-4 pb-2 px-2 text-primary-text hover:text-primary hover:cursor-pointer"
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
</style>

<nav class="px-1">
	<ul class="m-0 p-0 clearfix">
		<li class="block float-left">
			<a
			  class="{segment === undefined ? `${anchor} selected text-primary` : `${anchor} text-primary-text`}"
				href="."
			>
				Home
			</a>
		</li>
		<li class="block float-left">
			<a
				class="{segment === 'about' ? `${anchor} selected text-primary` : `${anchor} text-primary-text`}"
				href="/about"
			>
				Exceptional Crew
			</a>
		</li>
		<li class="block float-left">
			<a
				class="{segment === 'sponsorships' ? `${anchor} selected text-primary` : `${anchor} text-primary-text`}"
				href="/sponsorships"
			>
			  Sponsorships
			</a>
		</li>
	</ul>
</nav>
