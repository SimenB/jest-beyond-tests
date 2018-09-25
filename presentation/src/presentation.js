import React from 'react';
import PropTypes from 'prop-types';
import {
  Anim,
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Heading,
  Image,
  Link,
  ListItem,
  List,
  Magic,
  Notes,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import preload from 'spectacle/es/utils/preloader';
import styled from 'react-emotion';

import TweetEmbed from 'react-tweet-embed';

import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';

import jestLogo from './static/jest-logo.png';

import jestDownloadStatsImage from './static/jest.png';
import mochaDownloadStatsImage from './static/mocha.png';
import jasmineDownloadStatsImage from './static/jasmine.png';
import tapeDownloadStatsImage from './static/tape.png';
import avaDownloadStatsImage from './static/ava.png';

import magicGif from './static/magic.gif';

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#99424F',
    tertiary: '#7F2C39',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

const CenterTwitterEmbed = ({ options, ...props }) => (
  <TweetEmbed {...props} options={{ align: 'center', dnt: true, ...options }} />
);

const TitleHeading = styled(Heading)`
  font-size: 5rem;
`;

const ItalicSpan = styled('span')`
  font-style: italic;
`;

const AnimStrikethrough = props => (
  <Anim
    fromStyle={{}}
    toStyle={[{ fontWeight: 'bolder', textTransform: 'uppercase' }]}
    easing="quadInOut"
    transitionDuration={300}
    {...props}
  />
);

const Emoji = ({ label, emoji }) => (
  <span role="img" aria-label={label}>
    {emoji}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

preload([
  jestLogo,
  jestDownloadStatsImage,
  mochaDownloadStatsImage,
  jasmineDownloadStatsImage,
  tapeDownloadStatsImage,
  avaDownloadStatsImage,
  magicGif,
]);

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide transition={['zoom']} bgColor="secondary">
      <BlockQuote>
        <Quote>
          The world ain’t all <Emoji emoji="☀️" label="sunshine" /> and{' '}
          <Emoji emoji="🌈" label="rainbows" />
        </Quote>
        <Cite textColor="quartenary">Rocky Balboa</Cite>
      </BlockQuote>
      <Appear>
        <BlockQuote>
          <Quote>
            But you can make it <Emoji emoji="🔥" label="blazing fast" /> and{' '}
            <Emoji emoji="✨" label="magical" />
          </Quote>
          <Cite textColor="quartenary">Me, right now</Cite>
        </BlockQuote>
      </Appear>
    </Slide>
    <Magic>
      <Slide>
        <TitleHeading>
          Jest can be Delightful for more than just tests
        </TitleHeading>
        <Notes>So long Prettier wrapped it</Notes>
      </Slide>
      <Slide>
        <TitleHeading>Jest as a Platform</TitleHeading>
        <Notes>
          <a href="https://youtu.be/NtjyeojAOBs">
            ReactiveConf 2017 - Rogelio Guzman: Jest as a Platform
          </a>
        </Notes>
      </Slide>
      <Slide>
        <TitleHeading>Jest as a Tool</TitleHeading>
        <Notes>
          <a href="https://www.urbandictionary.com/define.php?term=Tool">
            A guy with a hugely over-inflated ego, who in an attempt to get
            un-due attention for himself, will act like a jackass, because, in
            his deluded state, he will think it’s going to make him look cool,
            or make others want to be like him.
          </a>
        </Notes>
      </Slide>
      <Slide>
        <TitleHeading>Jest as Tooling</TitleHeading>
      </Slide>
      <Slide>
        <TitleHeading>Jest Beyond Tests</TitleHeading>
      </Slide>
      <Slide>
        <Notes>
          Moderately advanced talk, assumes people know what a test is, what JS
          is and generally how a test is written in JS
        </Notes>
        <TitleHeading>Jest Beyond Tests</TitleHeading>
        <Image src={jestLogo} alt="Jest logo" width="30%" />
        <Text textColor="tertiary" fit italic>
          By Simen Bekkhus &mdash; Developer at Folio and Jest core team member
        </Text>
      </Slide>
    </Magic>
    <Slide transition={['zoom']}>
      <Notes>
        <ul>
          <li>First release on npm, at least</li>
          <li>800 contributors on September 23rd</li>
        </ul>
      </Notes>
      <Heading>What is Jest?</Heading>
      <List>
        <ListItem>JavaScript testing framework made by Facebook</ListItem>
        <ListItem>Open sourced in 2014</ListItem>
        <ListItem>Batteries included</ListItem>
        <ListItem>
          Blazing fast <Emoji emoji="🔥" label="blazing fast" />
        </ListItem>
        <ListItem>800 different contributors</ListItem>
      </List>
    </Slide>
    <Slide>
      <Notes>Charts are from January 1st 2015 to September 1st 2018</Notes>
      <Heading>Mocha</Heading>
      <Link href="https://npm-stat.com/charts.html?package=mocha&from=2015-01-01&to=2018-09-01">
        <Image src={mochaDownloadStatsImage} />
      </Link>
    </Slide>
    {/*
    <Slide>
      <Heading>Jasmine</Heading>
      <Link href="https://npm-stat.com/charts.html?package=jasmine-core&from=2015-01-01&to=2018-09-01">
        <Image src={jasmineDownloadStatsImage} />
      </Link>
    </Slide>
    <Slide>
      <Heading>Tape</Heading>
      <Link href="https://npm-stat.com/charts.html?package=tape&from=2015-01-01&to=2018-09-01">
        <Image src={tapeDownloadStatsImage} />
      </Link>
    </Slide>
    <Slide>
      <Heading>Ava</Heading>
      <Link href="https://npm-stat.com/charts.html?package=ava&from=2015-01-01&to=2018-09-01">
        <Image src={avaDownloadStatsImage} />
      </Link>
    </Slide>
    */}
    <Slide>
      <Heading>Jest</Heading>
      <Link href="https://npm-stat.com/charts.html?package=jest&from=2015-01-01&to=2018-09-01">
        <Image src={jestDownloadStatsImage} />
      </Link>
    </Slide>
    <Slide>
      <Notes>
        <ul>
          <li>blazing</li>
          <li>git and mercurial</li>
          <li>fb scale probably works for everybody</li>
        </ul>
      </Notes>
      <Heading fit>
        <ItalicSpan>Why</ItalicSpan> is it popular?
      </Heading>
      <List>
        <ListItem>Fantastic watch mode</ListItem>
        <ListItem>Works at scale</ListItem>
        <ListItem>Test coverage out of the box</ListItem>
        <ListItem>Configurable</ListItem>
        <ListItem>
          Facebook is pushing it &mdash; bundled with{' '}
          <Code>create-react-app</Code>
        </ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Webpack</span>
      </Notes>
      <CenterTwitterEmbed id="991032040828035074" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Prettier would not exist</span>
      </Notes>
      <CenterTwitterEmbed id="860255856843206657" />
    </Slide>
    <Slide>
      <Notes>
        <ul>
          <li>don’t worry if you’ve never heard of these</li>
          <li>git and mercurial</li>
          <li>babel for code coverage</li>
          <li>most important is contributions</li>
          <li>start from the bottom, like Drake</li>
        </ul>
      </Notes>
      <Heading>Features</Heading>
      <List>
        <AnimStrikethrough>
          <ListItem>VCS aware watch mode</ListItem>
        </AnimStrikethrough>
        <ListItem>Parallelises across CPU cores</ListItem>
        <ListItem>Snapshot testing</ListItem>
        <ListItem>Coverage included</ListItem>
        <ListItem>Babel support</ListItem>
        <ListItem>Module & function mocking included</ListItem>
        <AnimStrikethrough>
          <ListItem>Multi Project Runner</ListItem>
        </AnimStrikethrough>
        <AnimStrikethrough>
          <ListItem>Community contributions</ListItem>
        </AnimStrikethrough>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Jest Each</span>
        <ul>
          <li>prettier support</li>
        </ul>
      </Notes>
      <CenterTwitterEmbed id="1029721142901334017" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Inline Snapshots</span>
      </Notes>
      <CenterTwitterEmbed id="1002898401917325312" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>jest-junit</span>
      </Notes>
      <CenterTwitterEmbed id="1001479904842612736" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Interactive snapshots</span>
      </Notes>
      <CenterTwitterEmbed id="999730393543856131" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Majestic</span>
      </Notes>
      <CenterTwitterEmbed id="1004335180499177472" />
    </Slide>
    <Slide>
      <Heading fit>Other community creations</Heading>
      <List>
        <ListItem>
          <Link href="https://github.com/skovhus/jest-codemods">
            jest-codemods
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/jest-community/eslint-plugin-jest">
            eslint-plugin-jest
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/jest-community/vscode-jest">
            vscode-jest
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/jest-community/jest-extended">
            jest-extended
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/smooth-code/jest-puppeteer">
            jest-puppeteer
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/jest-community/awesome-jest">
            Awesome Jest
          </Link>
        </ListItem>
        <ListItem>And much, much more</ListItem>
      </List>
    </Slide>
    <Slide>
      <Notes>
        <ul>
          <li>Used in Metro, FB’s react native bundler</li>
          <li>Used in lint-staged</li>
          <li>
            Used in Prettier for <code>@format</code>
          </li>
          <li>Used in React’s test suite</li>
          <li>
            Worker is getting a{' '}
            <a href="https://github.com/facebook/jest/pull/6676">refactor</a> to
            support threads
          </li>
          <li>Lackluster docs on some of these - PRs welcome!</li>
        </ul>
      </Notes>
      <Heading fit>Jest is a Platform</Heading>
      <List>
        <ListItem>
          <Code>jest-haste-map</Code>
        </ListItem>
        <ListItem>
          <Code>jest-validation</Code>
        </ListItem>
        <ListItem>
          <Code>jest-docblock</Code>
        </ListItem>
        <ListItem>
          <Code>jest-diff</Code>
        </ListItem>
        <ListItem>
          <Code>pretty-format</Code>
        </ListItem>
        <ListItem>
          <Code>expect</Code>
        </ListItem>
        <ListItem>
          <Code>jest-mock</Code>
        </ListItem>
        <ListItem>
          <Code>jest-worker</Code>
        </ListItem>
      </List>
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Minification plugins</span>
      </Notes>
      <CenterTwitterEmbed id="1035246483145142272" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Server Side Rendering</span>
      </Notes>
      <CenterTwitterEmbed id="1017535101947691008" />
    </Slide>
    <Slide>
      <Heading fit>Custom runners</Heading>
      <Text>
        Allows Jest to run <ItalicSpan>anything</ItalicSpan>
      </Text>
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Run anything</span>
      </Notes>
      <CenterTwitterEmbed id="1009472685406064640" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Airbnb eslint</span>
      </Notes>
      <CenterTwitterEmbed id="907398856756695040" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Electron Runner</span>
      </Notes>
      <CenterTwitterEmbed id="1002996007695601664" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Cypress runner</span>
      </Notes>
      <CenterTwitterEmbed id="955143649637126144" />
    </Slide>
    <Slide>
      <List>
        <Heading>Other runners</Heading>
        <ListItem>
          <Link href="https://github.com/jest-community/jest-pytest">
            jest-pytest
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://medium.com/maxime-heckel/running-golang-tests-with-jest-b5d8f3d43a7">
            jest-runner-go
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/binygal/jest-runner-flowtype">
            jest-runner-flowtype
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/rogeliog/jest-runner-mocha">
            jest-runner-mocha
          </Link>
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Notes>
        <ul>
          <li>single quote</li>
          <li>double quote</li>
          <li>then wrong number</li>
        </ul>
      </Notes>
      <Heading fit>Demo time!</Heading>
    </Slide>
    <Slide>
      <Heading fit>Watch plugins</Heading>
      <Text>Allows you to create your own workflows</Text>
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Typeahead</span>
      </Notes>
      <CenterTwitterEmbed id="1001912040351383552" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Select project</span>
      </Notes>
      <CenterTwitterEmbed id="1001905369470320641" />
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Test changes since master</span>
      </Notes>
      <CenterTwitterEmbed id="1039511364648284160" />
    </Slide>
    <Slide>
      <Notes>
        <span>
          <code>jest-changed-files</code> could be combined with watch plugin
        </span>
      </Notes>
      <Heading fit>Demo time!</Heading>
    </Slide>
    <Slide>
      <Heading fit>What happens…</Heading>
      <Text textColor="tertiary">
        if you mix custom runners and custom watch mode?
      </Text>
      <Appear>
        <Image src={magicGif} />
      </Appear>
    </Slide>
    <Slide>
      <Notes>
        <a href="https://github.com/jest-community/jest-runner-eslint/compare/master~...watch-plugin">
          See diff
        </a>
      </Notes>
      <Heading fit>Demo time!</Heading>
    </Slide>
    <Slide transition={['fade']} bgColor="tertiary">
      <Notes>
        <span>Watch mode fix eslint</span>
      </Notes>
      <CenterTwitterEmbed id="1005125357844905984" />
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Summary</Heading>
      <List>
        <ListItem>Jest consists of many reusable parts</ListItem>
        <ListItem>Custom runners are awesome</ListItem>
        <ListItem>Watch plugins are super awesome</ListItem>
        <ListItem>Combining these 3 has incredible potential</ListItem>
        <ListItem>
          <ItalicSpan>Please</ItalicSpan> experiment and come back with feedback
          on the API! (And make sure to share your creations)
        </ListItem>
        <ListItem>Come find me either way &mdash; I’ve brought swag!</ListItem>
        <Appear>
          <ListItem>
            You should start a business in Norway, we’re gonna have awesome
            banking (check out <Link href="https://folio.no">Folio</Link>
            !)
          </ListItem>
        </Appear>
      </List>
    </Slide>
    <Slide transition={['fade']}>
      <Heading>Thanks!</Heading>
      <List>
        <ListItem>
          Slides:{' '}
          <Link href="https://github.com/SimenB/jest-beyond-tests">
            https://github.com/SimenB/jest-beyond-tests
          </Link>
        </ListItem>
        <ListItem>
          Jest homepage: <Link href="https://jestjs.io">https://jestjs.io</Link>
        </ListItem>
        <ListItem>
          Jest Twitter:{' '}
          <Link href="https://twitter.com/fbjest">
            https://twitter.com/fbjest
          </Link>
        </ListItem>
        <ListItem>
          GitHub:{' '}
          <Link href="https://github.com/SimenB">
            https://github.com/SimenB
          </Link>
        </ListItem>
        <ListItem>
          Folio: <Link href="https://folio.no">https://folio.no</Link>
        </ListItem>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;
