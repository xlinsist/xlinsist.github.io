import os

# Get a list of files in the current directory
files = os.listdir()

# Iterate over the list of files
for file in files:
    # Check if the file has a .jpeg extension
    if file.endswith('.jpeg'):
        # Create the new file name by replacing .jpeg with .jpg
        new_file = file.replace('.jpeg', '.jpg')
        # Rename the file
        os.rename(file, new_file)
        print(f'Renamed: {file} to {new_file}')
