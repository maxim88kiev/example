#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    ifstream input_file("1111.txt");
    char word[64];
    while (!input_file.eof())
    {
        input_file.getline(word, sizeof(word));
        cout << word << endl;
    }


}
