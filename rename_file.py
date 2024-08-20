import os
from PIL import Image

def rename_images_in_directory(directory):
    # Get a list of files in the directory
    files = os.listdir(directory)
    
    # Filter out only the .jpg files
    image_files = [f for f in files if f.lower().endswith('.jpg')]
    
    # Initialize counter for renaming
    counter = 1
    
    # Iterate through the files
    for image_file in image_files:
        # Construct the old file path
        old_path = os.path.join(directory, image_file)
        
        # Construct the new file name
        new_name = f"{counter}.jpg"
        new_path = os.path.join(directory, new_name)
        
        # Rename the file
        os.rename(old_path, new_path)
        
        # Increment the counter
        counter += 1
        
        print(f"Renamed {old_path} to {new_path}")

# Directory containing the images
image_directory = "bdrimg"  # Change this to your directory path

# Call the function
rename_images_in_directory(image_directory)
