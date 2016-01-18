#include <iostream>
#include <conio.h>
#include <stdlib.h>//для генератора случайных значений
#include <time.h>

using namespace std;

int main()
{
    int i;
    int M[100];//массив
    srand(time(0));//генератор случайных значений
        for(int i=0;i<=100;i++)
        {
            M[i]=rand()%100;//заганяем в массив случайные числа от 0 до 101
            cout<<M[i]<<" "; // выводим массив с этимим числами
        }
    cout<<endl<<endl<<"delitsa na 6"<<endl;
    for(i=0;i<=100;i++)//проходим по массиву обращаясь к каждому числу
    {
        if(M[i]%6==0) cout<<M[i]<<" ";//если остаток от деления 0 то..
    }
getch();
return 0;
}
