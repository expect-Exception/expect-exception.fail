<script>
  import { fadeIn, fadeOut } from "../utils/page_fade";
  import Spacer from "../components/Spacer.svelte";
  import Headline1 from "../components/Headline1.svelte";
  import Headline2 from "../components/Headline2.svelte";
  import Card from "../components/Card.svelte";

  const github = {
    label: "Github Issue Tracker",
    icon: "github",
    link: {
      href: "https://github.com/expect-Exception/expect-exception/issues",
      target: "_blank",
      rel: "nooponer noreferrer nofollow",
      type: "external-link",
    },
  };

  const podcast = {
    label: "Podcast",
    icon: "podcast",
    link: {
      href: "/podcast",
      target: "_self",
      rel: "",
      type: "rss",
    },
  };
</script>

<svelte:head>
  <title>expect(Exception)</title>
</svelte:head>

<article in:fadeIn out:fadeOut class="max-w-screen-lg m-auto">
  <header class="text-center">
    <Headline1>expect(Exception)</Headline1>
    <Headline2>The Podcast about Frontend Testing.</Headline2>
  </header>
  <Spacer size="md"></Spacer>
  <p>
    expect(Exception) is about Frontend Testing. We are open to discuss every
    single detail of that opinionated topics. Unit, Integration E2E, Snapshot,
    Visual Regression, Tools and Frameworks and so on. There are two platforms:
    an open discussion forum for everyone and a podcast. Every episode, some of
    <a href="/about">your hosts</a> talk about specific discussions of the open
    forum.
  </p>
  <Spacer size="md"></Spacer>
  <Card item="{github}">
    You have questions or opinions about Frontend Testing? If you want to get
    involved, share thoughts, ask questions, give your opinion, join the
    <a
      href="{github.link.href}"
      target="{github.link.target}"
      rel="{github.link.rel}"
      >Github Repository of expect(Exception)</a
    >. Each issue represents one topic to talk about.
  </Card>
  <Spacer size="sm"></Spacer>
  <Card item="{podcast}">
    Based on the Threads of the Github Issue Tracker, the
    <a href="/about" class="hover:underline">expect(Exception) hosts</a> pick
    topics to discuss on. The first episode is currently in planning.
  </Card>
</article>
