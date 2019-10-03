# incremental-encoder

A small [incremental encoder][#wikipedia-incremental-encoding] in TypeScript.

## How it works

Read the [wikipedia article][#wikipedia-incremental-encoding] first. I try to mirror the idea presented there by taking a list
of words and creating a small encoded list by sharing common suffixes.

For example,

The list

```
word
world
```
This list consumes 11 bytes including the return character.

Encoded, this list looks like:
```
0wor
3ld
```
This encoded list consumes 8 bytes including the return character.

In the encoded list, the first character is a Base36 number indicating how many prefix characters are shared with the previous word. The rest of the line is the non-shared suffix of the word.

If there were a 3rd word in the list, its count of shared characters would be calculated against the 2nd word, the 4th against the 3rd and so on.

## Usage

### Encoding

```ts
import { Encoder } from 'incremental-encoder';

const wordList = ['word1', 'word2', 'word3', ...];

const encoder = new Encoder();
const encodedWordList = encoder.encode(wordList);
```

### Decoding
```ts
import { Decoder } from 'incremental-encoder';

const decoder = new Decoder();
const wordList = decoder.decode(encodedWordList);
// wordList should be the same as in
// the Encoding example
```

## Limitations
To maximize space savings, a strict encoded output format is used. The first character always represents the number of characters shared with the previous word. Because [JavaScript's Number.prototype.toString][#mdn-number-toString] only supports up to base 36, the maximum number of shared characters between words is 35.

## License

MPL-2.0

[#wikipedia-incremental-encoding]: https://en.wikipedia.org/wiki/Incremental_encoding
[#mdn-number-toString]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toString