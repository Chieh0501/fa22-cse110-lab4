1: The bug was that the information taken from the page is stored as a string, thus, by adding two strings, we would receive the concat of the strings rather than the addition of their values.
And semicolons are not added in the end, but that's more of an aesthetic thing

2: Possible fixes could include storing the values in the original html files as integers, however, an easier solution would be just casting the num1 and num2 as numbers. 

