#!/bin/bash

# set the folder path
folder_path="images/cancer_samples"

# create the javascript file
js_file="${folder_path}/filelist.js"
touch "${js_file}"

# start writing the javascript code
echo "const filelist = [" >> "${js_file}"

# loop through each file in the folder
for file in ${folder_path}/*.png
do
    # get just the filename (without the path)
    filename=$(basename "${file}")

    # add the filename to the javascript array
    echo "  '${filename}'," >> "${js_file}"
done

# close the javascript array and export it
echo "];" >> "${js_file}"
echo "module.exports = filelist;" >> "${js_file}"
