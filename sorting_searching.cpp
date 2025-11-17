#include <iostream>
#include <vector>
using namespace std;

class Sorting
{
public:
    void selectionSort(vector<int> &arr)
    {
        int n = arr.size();
        for (int i = 0; i < n - 1; i++)
        {
            int maxIndex = i;
            for (int j = i + 1; j < n; j++)
            {
                if (arr[j] > arr[maxIndex])
                {
                    maxIndex = j;
                }
            }
            swap(arr[i], arr[maxIndex]);
        }
    }

    void merge(vector<int> &arr, int start, int mid, int end)
    {
        int i = start,
            j = mid + 1;
        vector<int> temp;

        while (i <= mid && j <= end)
        {
            if (arr[i] <= arr[j])
            {
                temp.push_back(arr[i]);
                i++;
            }
            else
            {
                temp.push_back(arr[j]);
                j++;
            }
        }

        while (i <= mid)
        {
            temp.push_back(arr[i]);
            i++;
        }
        while (j <= end)
        {
            temp.push_back(arr[j]);
            j++;
        }

        for (int i = 0; i < temp.size(); i++)
        {
            arr[i + start] = temp[i];
        }
    }

    void mergeSort(vector<int> &arr, int start, int end)
    {
        if (start < end)
        {
            int mid = (start + end) / 2;
            mergeSort(arr, start, mid);
            mergeSort(arr, mid + 1, end);
            merge(arr, start, mid, end);
        }
    }

    int binarySearch(vector<int> &arr, int start, int end, int target)
    {
        int left = 0;
        int right = arr.size() - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;
            if (target < arr[mid])
            {
                end = mid - 1;
            }
            else if (target > arr[mid])
            {
                start = mid + 1;
            }
            else
            {
                return mid;
            }
        }
        return -1;
    }

    void display(const vector<int> &arr)
    {
        for (int element : arr)
        {
            cout << element << " ";
        }
        cout << endl;
    }
};
int main()
{
    Sorting sort;
    int n, index, target, choice;

    cout << "-----Sorting and Searching Algorithms-----" << endl;

    cout << "Enter number of Element : ";
    cin >> n;

    vector<int> arr(n);

    cout << endl
         << "Enter Array Elements : " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << "Element arr[" << i << "] : ";
        cin >> arr[i];
    }

    do
    {
        cout << endl;
        cout << "Press 1 for Selection Sort" << endl;
        cout << "Press 2 for Merge Sort" << endl;
        cout << "Press 3 for Binary Search (after Merge Sort)" << endl;
        cout << "Press 4 for Display Array" << endl;
        cout << "Press 5 for Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            sort.selectionSort(arr);
            cout << endl
                 << "Array selection Sort : ";
            sort.display(arr);
            break;

        case 2:
            sort.mergeSort(arr, 0, n - 1);
            cout << endl << "Array Merge Sort : ";
            sort.display(arr);
            break;

        case 3:

            cout << "Searching and sorting." << endl
                 << endl;
            sort.mergeSort(arr, 0, n - 1);

            cout << "Enter element to search: ";
            cin >> target;

            index = sort.binarySearch(arr, 0, n - 1, target);
            if (index == -1)
                cout << "Element not found....";
            else
                cout << "Index is : " << index << endl;
            break;

        case 4:
            cout << endl
                 << "Array elements are: ";
            sort.display(arr);
            break;

        case 5:
            cout << "Exit the sorting and searching program....." << endl;
            break;

        default:
            cout << "Invalid choice Please Try again...";
            break;
        }

    } while (choice != 5);
    return 0;
}