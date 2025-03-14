import { Filters } from './types';

export const FILTERS: Filters[] = [
  // Text Transformations
  {
    label: 'Uppercase',
    value: 'upcase',
    description: 'Convert text to uppercase',
    example: '"coffee" | upcase → COFFEE',
    sampleValue: 'coffee',
  },
  {
    label: 'Lowercase',
    value: 'downcase',
    description: 'Convert text to lowercase',
    example: '"PIZZA TIME!" | downcase → pizza time!',
    sampleValue: 'PIZZA TIME!',
  },
  {
    label: 'Capitalize',
    value: 'capitalize',
    description: 'Capitalize the first character',
    example: '"awesome sauce" | capitalize → Awesome sauce',
    sampleValue: 'awesome sauce',
  },
  {
    label: 'Strip HTML',
    value: 'strip_html',
    description: 'Remove all HTML tags from text',
    example: '"<div>🌟 sparkles 🌟</div>" | strip_html → 🌟 sparkles 🌟',
    sampleValue: '<div>🌟 sparkles 🌟</div>',
  },
  {
    label: 'Strip Newlines',
    value: 'strip_newlines',
    description: 'Remove all newline characters',
    example: '"dear friend,\\nhow are you?" | strip_newlines → dear friend, how are you?',
    sampleValue: 'dear friend,\nhow are you?',
  },
  {
    label: 'Escape',
    value: 'escape',
    description: 'Escape special characters',
    example: '"<super>mario</super>" | escape → &lt;super&gt;mario&lt;/super&gt;',
    sampleValue: '<super>mario</super>',
  },
  {
    label: 'Truncate',
    value: 'truncate',
    hasParam: true,
    description: 'Truncate text to specified length',
    example: '"supercalifragilisticexpialidocious" | truncate: 10 → supercali...',
    params: [{ placeholder: 'Length (e.g. 20)', type: 'number' }],
    sampleValue: 'supercalifragilisticexpialidocious',
  },
  {
    label: 'Truncate Words',
    value: 'truncatewords',
    hasParam: true,
    description: 'Truncate text to specified number of words',
    example: '"to infinity and beyond!" | truncatewords: 2 → to infinity...',
    params: [{ placeholder: 'Word count', type: 'number' }],
    sampleValue: 'to infinity and beyond!',
  },
  {
    label: 'Replace',
    value: 'replace',
    hasParam: true,
    description: 'Replace all occurrences of a string',
    example: '"potato potato" | replace: "potato", "🥔" → 🥔 🥔',
    params: [
      { placeholder: 'Search text', type: 'string' },
      { placeholder: 'Replace with', type: 'string' },
    ],
    sampleValue: 'Hello World',
  },
  {
    label: 'Replace First',
    value: 'replace_first',
    hasParam: true,
    description: 'Replace first occurrence of a string',
    example: '"bug bug" | replace_first: "bug", "🐛" → 🐛 bug',
    params: [
      { placeholder: 'Search text', type: 'string' },
      { placeholder: 'Replace with', type: 'string' },
    ],
    sampleValue: 'Hello World',
  },
  {
    label: 'Remove',
    value: 'remove',
    hasParam: true,
    description: 'Remove all occurrences of a string',
    example: '"banana banana" | remove: "ana" → bn bn',
    params: [{ placeholder: 'Text to remove', type: 'string' }],
    sampleValue: 'banana banana',
  },
  {
    label: 'Remove First',
    value: 'remove_first',
    hasParam: true,
    description: 'Remove first occurrence of a string',
    example: '"yada yada" | remove_first: "yada" → yada',
    params: [{ placeholder: 'Text to remove', type: 'string' }],
    sampleValue: 'Hello World',
  },
  {
    label: 'Append',
    value: 'append',
    hasParam: true,
    description: 'Add text to the end',
    example: '"Party" | append: " 🎉" → Party 🎉',
    params: [{ placeholder: 'Text to append', type: 'string' }],
    sampleValue: 'Party',
  },
  {
    label: 'Prepend',
    value: 'prepend',
    hasParam: true,
    description: 'Add text to the beginning',
    example: '"World" | prepend: "🌍 " → 🌍 World',
    params: [{ placeholder: 'Text to prepend', type: 'string' }],
    sampleValue: 'World',
  },
  {
    label: 'Slice',
    value: 'slice',
    hasParam: true,
    description: 'Extract a substring by position',
    example: '"rainbow" | slice: 0, 3 → rai',
    params: [
      { placeholder: 'Start index', type: 'number' },
      { placeholder: 'Length (optional)', type: 'number' },
    ],
    sampleValue: 'rainbow',
  },
  // Number Operations
  {
    label: 'Plus',
    value: 'plus',
    hasParam: true,
    description: 'Add a number',
    example: '99 | plus: 1 → 100',
    params: [{ placeholder: 'Number to add', type: 'number' }],
    sampleValue: '99',
  },
  {
    label: 'Minus',
    value: 'minus',
    hasParam: true,
    description: 'Subtract a number',
    example: '42 | minus: 0 → 42',
    params: [{ placeholder: 'Number to subtract', type: 'number' }],
    sampleValue: '42',
  },
  {
    label: 'Times',
    value: 'times',
    hasParam: true,
    description: 'Multiply by a number',
    example: '7 | times: 7 → 49',
    params: [{ placeholder: 'Number to multiply by', type: 'number' }],
    sampleValue: '7',
  },
  {
    label: 'Divided By',
    value: 'divided_by',
    hasParam: true,
    description: 'Divide by a number',
    example: '42 | divided_by: 2 → 21',
    params: [{ placeholder: 'Number to divide by', type: 'number' }],
    sampleValue: '42',
  },
  {
    label: 'Round',
    value: 'round',
    hasParam: true,
    description: 'Round to specified decimal places',
    example: '3.14159 | round: 2 → 3.14',
    params: [{ placeholder: 'Decimal places', type: 'number' }],
    sampleValue: '3.14159',
  },
  {
    label: 'Floor',
    value: 'floor',
    description: 'Round down to nearest integer',
    example: '9.99 | floor → 9',
    sampleValue: '9.99',
  },
  {
    label: 'Ceil',
    value: 'ceil',
    description: 'Round up to nearest integer',
    example: '9.01 | ceil → 10',
    sampleValue: '9.01',
  },
  {
    label: 'Abs',
    value: 'abs',
    description: 'Get absolute value',
    example: '-42 | abs → 42',
    sampleValue: '-42',
  },
  // Data Formatting
  {
    label: 'Date Format',
    value: 'date',
    hasParam: true,
    description: 'Format a date using strftime format',
    example: '"2024-01-20" | date: "%B %d, %Y" → January 20, 2024',
    params: [
      {
        placeholder: 'Format (e.g. "%Y-%m-%d")',
        description: 'strftime format',
        type: 'string',
        defaultValue: '%Y-%m-%d %H:%M:%S',
      },
    ],
    sampleValue: '2024-01-20',
  },
  {
    label: 'Default',
    value: 'default',
    hasParam: true,
    description: 'Use default value if input is empty',
    example: '"" | default: "¯\\_(ツ)_/¯" → ¯\\_(ツ)_/¯',
    params: [{ placeholder: 'Default value', type: 'string' }],
    sampleValue: '',
  },
  {
    label: 'JSON',
    value: 'json',
    description: 'Convert object to JSON string',
    example: '{mood: "happy"} | json → {"mood":"happy"}',
    sampleValue: '{mood: "happy"}',
  },
  {
    label: 'Size',
    value: 'size',
    description: 'Get length of string or array',
    example: '"supercalifragilisticexpialidocious" | size → 34',
    sampleValue: 'supercalifragilisticexpialidocious',
  },
  {
    label: 'Join',
    value: 'join',
    hasParam: true,
    description: 'Join array elements with separator',
    example: '["🌟","✨","💫"] | join: " " → 🌟 ✨ 💫',
    params: [{ placeholder: 'Separator (e.g. ", ")', type: 'string', defaultValue: ', ' }],
    sampleValue: '["🌟","✨","💫"]',
  },
  {
    label: 'Split',
    value: 'split',
    hasParam: true,
    description: 'Split string into array',
    example: '"rock,paper,scissors" | split: "," → ["rock","paper","scissors"]',
    params: [{ placeholder: 'Delimiter', type: 'string', defaultValue: ',' }],
    sampleValue: 'rock,paper,scissors',
  },
  {
    label: 'First',
    value: 'first',
    description: 'Get first element of array',
    example: '["🥇","🥈","🥉"] | first → 🥇',
    sampleValue: '["🥇","🥈","🥉"]',
  },
  {
    label: 'Last',
    value: 'last',
    description: 'Get last element of array',
    example: '["🥇","🥈","🥉"] | last → 🥉',
    sampleValue: '["🥇","🥈","🥉"]',
  },
  {
    label: 'Map',
    value: 'map',
    hasParam: true,
    description: 'Extract property from each item in array',
    example: 'superheroes | map: "power" → ["flight", "strength", "speed"]',
    params: [{ placeholder: 'Property name', type: 'string' }],
    sampleValue: 'superheroes',
  },
  {
    label: 'Where',
    value: 'where',
    hasParam: true,
    description: 'Filter array by property value',
    example: 'tasks | where: "status", "done" → [completedTasks]',
    params: [
      { placeholder: 'Property name', type: 'string' },
      { placeholder: 'Value to match', type: 'string' },
    ],
    sampleValue: 'tasks',
  },
  {
    label: 'URL Encode',
    value: 'url_encode',
    description: 'Encode string for use in URL',
    example: '"space & special chars!" | url_encode → space%20%26%20special%20chars%21',
    sampleValue: 'space & special chars!',
  },
  {
    label: 'URL Decode',
    value: 'url_decode',
    description: 'Decode URL-encoded string',
    example: '"fun%20%26%20games" | url_decode → fun & games',
    sampleValue: 'fun%20%26%20games',
  },
  {
    label: 'Digest',
    value: 'digest',
    hasParam: true,
    description: 'Format a list of names with optional key path and separator',
    example: 'events | digest: 2, "name", ", " → John, Jane and 3 others',
    params: [
      { placeholder: 'Max names to show', type: 'number' },
      { placeholder: 'Object key path (optional)', type: 'string' },
      { placeholder: 'Custom separator (optional)', type: 'string' },
    ],
    sampleValue: '[{ name: "John" }, { name: "Jane" }]',
  },
];
