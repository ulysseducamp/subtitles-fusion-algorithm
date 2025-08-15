# Smart Subtitles - Adaptive Bilingual Subtitle System

A TypeScript-based CLI application that creates personalized bilingual subtitles by comparing target language subtitles against user vocabulary knowledge.

## Features

- **Vocabulary-based subtitle selection**: Shows target language subtitles when all words are known, native language otherwise
- **Inline translation**: Translates single unknown words inline using DeepL API
- **Bidirectional time synchronization**: Advanced algorithm for subtitle timing alignment
- **Multi-language support**: English, French, Portuguese, and more
- **Lemmatization**: Uses Python script for accurate word stemming

## Usage

```bash
node dist/main.js --target <target.srt> --native <native.srt> --freq <freq.txt> --out <hybrid.srt> --topN <number> --lang <language_code> --native-lang <native_language_code> [--inline-translation] [--deepl-key <api_key>]
```

### Arguments

- `--target`: SRT file in the target language (the language being learned)
- `--native`: SRT file in the native language (the fallback translation)
- `--freq`: Frequency list for the target language (e.g., fr_50k.txt)
- `--out`: Output hybrid SRT file
- `--topN`: Number of most frequent target language words considered 'known'
- `--lang`: Language code for lemmatization (e.g., 'en', 'fr')
- `--native-lang`: Language code for native language translation (e.g., 'en', 'fr', 'pt')
- `--inline-translation`: Enable inline translation for single unknown words
- `--deepl-key`: DeepL API key (optional, uses default if not provided)

### Example

```bash
node dist/main.js --target fr.srt --native en.srt --freq fr_50k.txt --out hybrid.srt --topN 2000 --lang fr --native-lang en --inline-translation
```

## Project Structure

```
/
├── src/
│   ├── main.ts              # CLI entry point
│   ├── logic.ts             # Core subtitle processing logic
│   ├── deepl-api.ts         # DeepL API integration
│   └── inline-translation.ts # Inline translation service
├── scripts/
│   └── lemmatizer.py        # Python lemmatization script
├── frequency-lists/          # Word frequency data
├── tests/                   # Test files
└── dist/                    # Generated JavaScript files
```

## Development

### Build
```bash
npm run build
```

### Run tests
```bash
npm test
```

## Dependencies

- TypeScript
- Node.js
- Python 3 (for lemmatization)
- DeepL API (for inline translation)

## Future Plans

- Chrome extension for Netflix integration
- Web interface for easier usage
- Support for more languages
- Advanced vocabulary tracking # smartsub
