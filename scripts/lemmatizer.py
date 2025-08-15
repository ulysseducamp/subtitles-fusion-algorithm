 
import sys
import simplemma

def lemmatize_line(line, lang):
    words = line.split()
    return ' '.join(simplemma.lemmatize(word, lang=lang) for word in words)

if __name__ == "__main__":
    language = sys.argv[1]
    input_lines = sys.stdin.read().splitlines()
    for line in input_lines:
        print(lemmatize_line(line, language)) 