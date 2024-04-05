import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Material Master',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dictionary',
          route: '/dictionary',
          children: [
            { label: 'Data Overview', route: '/dictionary' },
            { label: 'UOM', route: '/test1' },
            { label: 'Compliance', route: '/test2' },
            { label: 'Report Analysis', route: '/test3' },
            { label: 'Description Configuration', route: '/test4' },
            { label: 'Request Configuration', route: '/test5' },
            { label: 'Vendor Master', route: '/test6' },
            { label: 'Language NMQ Details', route: '/test7' },
            { label: 'Synonyms', route: '/test8' },
            { label: 'Storage And Preservation', route: '/test9' },
            { label: 'Language Configuration', route: '/test10' },
            { label: 'NMQ Rule Master', route: '/test11' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/refresh.svg',
          label: 'Cleansing',
          route: '/Cleansing',
          children: [
            { label: 'Data Overview', route: '/Cleansing1' },
            { label: 'UOM', route: '/Cleansing2' },
            { label: 'Compliance', route: '/Cleansing3' },
            { label: 'Report Analysis', route: '/Cleansing4' },
            { label: 'Description Configuration', route: '/Cleansing15' },
            { label: 'Request Configuration', route: '/Cleansing16' },
            { label: 'Vendor Master', route: '/Cleansing17' },
            { label: 'Language NMQ Details', route: '/Cleansing18' },
            { label: 'Synonyms', route: '/Cleansing19' },
            { label: 'Storage And Preservation', route: '/Cleansing110' },
            { label: 'Language Configuration', route: '/Cleansing11' },
            { label: 'NMQ Rule Master', route: '/Cleansing12' },
            { label: 'NMQ Rule Master', route: '/Cleansing13' },
            { label: 'NMQ Rule Master', route: '/Cleansing14' },
            { label: 'NMQ Rule Master', route: '/Cleansing15' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/refresh.svg',
          label: 'Scan',
          route: '/Scan',
          children: [
            { label: 'Data Overview', route: '/Scan' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Upload',
          route: '/Upload',
          children: [
            { label: 'Data Overview', route: '/Upload1' },
            { label: 'UOM', route: '/Upload2' },
            { label: 'Compliance', route: '/Upload3' },
            { label: 'Report Analysis', route: '/Upload4' },
            { label: 'Description Configuration', route: '/Upload5' },
          ],
        },
      ],
    },
    {
      group: 'Vendor',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Cleansing',
          route: '/dashboard',
          children: [
            { label: 'Report Analysis', route: '/dictionary' },
            { label: 'Description Configuration', route: '/dictionary' },
          ],
        },
      ],
    },
    {
      group: 'Asset',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'SPIR',
          route: '/dashboard',
          children: [
            { label: 'Data Overview', route: '/dictionary' },
            { label: 'UOM', route: '/dictionary' },
            { label: 'Compliance', route: '/dictionary' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'BOM',
          route: '/dashboard',
          children: [
            { label: 'Data Overview', route: '/dictionary' },
            { label: 'UOM', route: '/dictionary' },
            { label: 'Compliance', route: '/dictionary' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Registry',
          route: '/dashboard',
          children: [
            { label: 'Data Overview', route: '/dictionary' },
            { label: 'UOM', route: '/dictionary' },
            { label: 'Compliance', route: '/dictionary' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Classification',
          route: '/dashboard',
          children: [
            { label: 'Data Overview', route: '/dictionary' },
            { label: 'UOM', route: '/dictionary' },
            { label: 'Compliance', route: '/dictionary' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'PM',
          route: '/dashboard',
          children: [
            { label: 'Data Overview', route: '/dictionary' },
            { label: 'UOM', route: '/dictionary' },
            { label: 'Compliance', route: '/dictionary' },
          ],
        },
      ],
    },
    {
      group: 'Admin',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Settings',
          route: '/dashboard',
          children: [
            { label: 'Report Analysis', route: '/dictionary' },
            { label: 'Description Configuration', route: '/dictionary' },
            { label: 'Description Configuration', route: '/dictionary' },
            { label: 'Description Configuration', route: '/dictionary' },
          ],
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },
  ];
}
