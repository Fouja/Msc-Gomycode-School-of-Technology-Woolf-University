# 1. Ask the user for a sentence
sentence = input("Enter a sentence ending with a period: ")

# 2. Initialize our three counters
char_count = 0
word_count = 0
vowel_count = 0

# 3. Read the sentence character by character using one loop
for letter in sentence:
    char_count += 1  # Count every single character
    
    # Check for vowels (converting to uppercase so it catches 'a' and 'A')
    if letter.upper() in "AEIOU":
        vowel_count += 1
        
    # Check for words (if we hit a space or the final period, a word has ended)
    if letter == " " or letter == ".":
        word_count += 1

# 4. Print the final results
print("Number of characters:", char_count)
print("Number of words:", word_count)
print("Number of vowels:", vowel_count)