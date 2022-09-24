import subprocess
import sys
import os

if os.name =="nt":
    process = subprocess.Popen(['python', '-m', 'pip', 'install', sys.argv[1]], stdout = subprocess.PIPE)
    output, error = process.communicate()
    output = output.decode("utf-8").split('\n')
    print(output)
else:
    process = subprocess.Popen(['python3', '-m', 'pip', 'install', sys.argv[1]], stdout = subprocess.PIPE)
    output, error = process.communicate()
    output = output.decode("utf-8").split('\n')
    print(output)