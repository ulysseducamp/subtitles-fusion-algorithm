/*
 * Smart Subtitles
 * Copyright (C) 2025 Smart Subtitles Contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import { DeepLAPI } from './deepl-api.js';

async function testDeepLAPI() {
  console.log('Testing DeepL API integration...');
  
  const deeplAPI = new DeepLAPI({
    apiKey: 'bb6a9f6d-e83c-43f6-8f2d-a5b09f8b7d06:fx',
    baseUrl: 'https://api-free.deepl.com/v2/translate',
    timeout: 5000,
    maxRetries: 3,
    retryDelay: 1000,
  });

  try {
    // Test basic translation
    console.log('Testing basic word translation...');
    const translation = await deeplAPI.translateWord('hello', 'en', 'fr');
    console.log(`"hello" translated to: "${translation}"`);

    // Test translation with context
    console.log('Testing translation with context...');
    const contextTranslation = await deeplAPI.translateWithContext(
      'bank',
      'en',
      'fr',
      ['I went to the bank yesterday.', 'The bank was closed.', 'I need to visit the bank today.']
    );
    console.log(`"bank" with context translated to: "${contextTranslation}"`);

    // Test caching
    console.log('Testing caching...');
    const cachedTranslation = await deeplAPI.translateWord('hello', 'en', 'fr');
    console.log(`Cached translation: "${cachedTranslation}"`);

    const stats = deeplAPI.getStats();
    console.log('API Stats:', stats);

    console.log('✅ DeepL API integration test completed successfully!');
  } catch (error) {
    console.error('❌ DeepL API test failed:', error);
  }
}

testDeepLAPI().catch(console.error); 