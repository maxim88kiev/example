#include <iostream>
#include <conio.h>
#include <stdlib.h>//��� ���������� ��������� ��������
#include <time.h>

using namespace std;

int main()
{
    int i;
    int M[100];//������
    srand(time(0));//��������� ��������� ��������
        for(int i=0;i<=100;i++)
        {
            M[i]=rand()%100;//�������� � ������ ��������� ����� �� 0 �� 101
            cout<<M[i]<<" "; // ������� ������ � ������ �������
        }
    cout<<endl<<endl<<"delitsa na 6"<<endl;
    for(i=0;i<=100;i++)//�������� �� ������� ��������� � ������� �����
    {
        if(M[i]%6==0) cout<<M[i]<<" ";//���� ������� �� ������� 0 ��..
    }
getch();
return 0;
}
