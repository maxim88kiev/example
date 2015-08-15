#include<iostream>
using namespace std;
#include <conio.h>

int main()
{
    char dir='a';
    int x=10, y=10;
    cout << "nashmite Enter dla vuhoda \n";
    while (dir != '\r')
    {
        cout << " \n vashi koordinatu: " << x << ", " << y;
        cout << "\n vuberite napravlenie (n.s.e.w): ";
        dir = getche();
        if (dir == 'n')
        y--;
        else
         if (dir == 's')
         y++;
         else
          if (dir == 'e')
           x++;
           else
           if ( dir == 'w')
            x--;


    }

    return 0;
}



