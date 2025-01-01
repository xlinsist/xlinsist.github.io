import re

OUTPUT_PATH = "./readme-replace.md"
PATTERN = re.compile(r'!\[[0-9a-zA-Z_.-]+\]\([0-9a-zA-Z_.-]+\)')
IMAGE_PATH_PREFIX = "./pic/"

def main():
    with open("./readme-github.md", 'r', encoding='utf-8') as fis, \
         open(OUTPUT_PATH, 'w', encoding='utf-8') as bw:
        for str in fis:
            matcher = PATTERN.search(str)
            if matcher:
                image = matcher.group()
                fileName = re.search(r'\((.*?)\)', image).group(1)
                replaced = str.replace(image, f'![{fileName}]({IMAGE_PATH_PREFIX}{fileName})')
                bw.write(replaced + '\n')
            else:
                bw.write(str + '\n')

if __name__ == "__main__":
    main()
