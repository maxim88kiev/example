#include <conio.h>
#include <iostream>
using namespace std;

int main()
{

    int nach, n,a,b;
    int i;
    cout<<"vvedi nachalnoe: "; cin>>nach;
    cout<<"vvedi konechnoe: "; cin>>n;
    cout<<"vvedi b: "; cin>>b;
    // цикл
    for(i=nach;i<=n;i++)
    {
        a=i;
        if(!(a%b)) cout<<a<<"\n";
    }
    getch();
    return 0;
}
