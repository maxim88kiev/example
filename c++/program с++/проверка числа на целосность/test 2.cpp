#include <iostream>
#include <iomanip>
#include <stdlib.h>
using namespace std;

int main()
{
    ifstream input_file("1111.txt");
    char word[64];
    while (!input_file.eof())
    {
        input_file >>word;
        cout <<word<< endl;
    }


}

