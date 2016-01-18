#include <iostream>
using namespace std;

#define SIZE 10

class stack {

    char stck[SIZE];
    int tos;

public:

    void init();
    void push (char ch);
    char pop ();

};

void stack::init()
{
    tos=0;
}

void stack::push(char ch)
{
    if (tos==SIZE) {
        cout << "Stek polniu";
        return;

    }

    stck[tos] = ch;
    tos++;

}

char stack::pop()
{
    if (tos==0){
        cout << "Stek pust";
        return 0;
        }
    tos--;
    return stck[tos];

}

int main()
{
    stack s1, s2;
    int i;

    s1.init();
    s2.init();

    s1.push('a');
    s2.push('x');
    s1.push('b');
    s2.push('y');
    s1.push('c');
    s2.push('z');

for(i=0;i<3;i++) cout << "cimvol s1" << s1.pop() << "\n";
for(i=0;i<3;i++) cout << "cimvol s2" << s2.pop() << "\n";

 return 0;
}










