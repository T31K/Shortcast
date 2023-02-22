import { CommandMenu, CommandWrapper, useCommands, useKmenu } from 'kmenu';
import { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCode,
  FiCommand,
  FiCopy,
  FiDribbble,
  FiEdit2,
  FiFacebook,
  FiGitBranch,
  FiGithub,
  FiGitPullRequest,
  FiLinkedin,
  FiMessageCircle,
  FiPlus,
  FiSearch,
  FiSettings,
  FiShare,
  FiTwitter,
  FiZap,
} from 'react-icons/fi';

import AlbumCover from './AlbumCover';

function Menu({ items, setItems }) {
  const { setOpen } = useKmenu();

  const main = [
    {
      category: 'Music',
      commands: [
        {
          text: 'Stuck With You',
          icon: <AlbumCover />,
          perform: () => setOpen(2),
          shortcuts: { keys: ['⌘', '1'] },
        },
        {
          text: 'WAKE UP',
          perform: () => setOpen(2),
        },
        {
          text: 'Introspection',
          perform: () => setOpen(2),
        },
        {
          text: 'Butterfly',
          perform: () => setOpen(2),
        },
        {
          text: 'Clouded',
          perform: () => setOpen(2),
        },
        {
          text: 'Open Arms (feat. Travis Scott)',
          perform: () => setOpen(2),
        },
        {
          text: 'Hello',
          perform: () => setOpen(2),
        },
        {
          text: 'Nightmare',
          icon: <FiShare />,
          perform: () => setOpen(3),
        },
        {
          text: 'Bitch Better Have My Money',
          icon: <FiCopy />,
          perform: () => navigator.clipboard.writeText('https://kmenu.hxrsh.in'),
        },
      ],
    },
  ];

  const docs = [
    {
      category: 'Documentation',
      commands: [
        {
          text: 'Quickstart',
          icon: <FiZap />,
          href: 'https://github.com/harshhhdev/kmenu#-quickstart',
          newTab: true,
        },
        {
          text: 'Using the Provider',
          icon: <FiCommand />,
          href: 'https://github.com/harshhhdev/kmenu/#using-the-provider',
          newTab: true,
        },
        {
          text: 'Adding Commands',
          icon: <FiPlus />,
          href: 'https://github.com/harshhhdev/kmenu#adding-commands',
          newTab: true,
        },
        {
          text: 'useKmenu Hook',
          icon: <FiCode />,
          href: 'https://github.com/harshhhdev/kmenu#usekmenu-hook',
          newTab: true,
        },
        {
          text: 'useCommands Hook',
          icon: <FiCode />,
          href: 'https://github.com/harshhhdev/kmenu#usecommands-hook',
          newTab: true,
        },
        {
          text: 'Customising the Menu',
          icon: <FiEdit2 />,
          href: 'https://github.com/harshhhdev/kmenu#customising-the-menu',
          newTab: true,
        },
        {
          text: 'Setting up the Menu',
          icon: <FiSettings />,
          href: 'https://github.com/harshhhdev/kmenu#setting-up-the-menu',
          newTab: true,
        },
        {
          text: 'Nested Menus',
          icon: <FiCommand />,
          href: 'https://github.com/harshhhdev/kmenu#setting-up-the-menu',
          newTab: true,
        },
        {
          text: 'useShortcut Hook',
          icon: <FiCode />,
          href: 'https://github.com/harshhhdev/kmenu#useshortcut-hook',
          newTab: true,
        },
      ],
    },
  ];

  const share = [
    {
      category: 'Share to...',
      commands: [
        {
          text: 'Twitter',
          icon: <FiTwitter />,
          href: 'https://twitter.com/intent/tweet?text=Check%20out%20these%20cool%20UI%20experiments%20by%20%40harshhhdev%0Ahttps%3A%2F%2Fkmenu.hxrsh.in%2F',
          newTab: true,
        },
        {
          text: 'Facebook',
          icon: <FiFacebook />,
          href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://kmenu.hxrsh.in')}`,
          newTab: true,
        },
        {
          text: 'Linkedin',
          icon: <FiLinkedin />,
          href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://kmenu.hxrsh.in')}`,
          newTab: true,
        },
      ],
    },
  ];

  const [mainCommands] = useCommands(main);
  const [docsCommands] = useCommands(docs);
  const [shareCommands] = useCommands(share);

  useEffect(() => {
    main[0].commands.unshift({
      text: 'Hello With You',
      icon: <AlbumCover />,
      perform: () => setOpen(2),
      shortcuts: { keys: ['⌘', '1'] },
    });
  }, []);
  return (
    <CommandWrapper>
      <CommandMenu
        commands={mainCommands}
        index={1}
      />
    </CommandWrapper>
  );
}

export default Menu;
