---
description: 이진탐색 알고리즘
date: 2021-07-08
tags: ["Algorithm"]
---

# 이진탐색 알고리즘

![img](../images/Algorithm.png)

정렬된 배열 또는 리스트에 적합한 고속 탐색 방법이다.

## 이진탐색의 특징

- 배열의 중앙에 있는 값을 조사하여 찾고자 하는 항목이 왼쪽 또는 오른쪽 부분 배열에 있는지를 알아내어 탐색의 범위를 반으로 줄인다.
- 찾고자 하는 값이 속해있지 않은 부분은 전혀 고려할 필요가 없기 때문에, 매 단계에서 검색해야 할 리스트의 크기를 반으로 줄일 수 있다.
- 이러한 방법을 반복적으로 사용해 탐색하는 방법이 이진 탐색이다.
- 데이터의 삽입이나 삭제가 빈번할 시에는 적합하지 않고, 주로 고정된 데이터에 대한 탐색에 적합하다.

## 이진탐색의 시간복잡도

- 이진 탐색의 시간 복잡도는 `O(log2N)`이다.

## BinarySearch Java Code

```Java
public class BinarySearch {
    public static void main(String[] args) {
        // 정렬되지 않았다면, 정렬해야 한다.
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

        binarySearch(2, arr);
        binarySearch1(2, 0, arr.length-1, arr);
    }

    static void binarySearch(int iKey, int arr[]) {
        int mid;
        int left = 0;
        int right = arr.length - 1;

        while (right >= left) {
            //중앙값은 계산한다.
            mid = (right + left) / 2;

            if (iKey == arr[mid]) {
                System.out.println(iKey + " is in the array with index value: " + mid);
                break;
            }

            if (iKey < arr[mid]) {
            // 찾고자 하는 key값이 배열의 중앙값보다 작을 경우
                right = mid - 1;
            } else {
            // 찾고자 하는 key값이 배열의 중앙값보다 클 경우
                left = mid + 1;
            }

        }
    }

    //재귀
    static void binarySearch1(int ikey, int low, int high, int[] arr) {
        int mid;

        if(low <= high) {
            mid = (low + high) / 2;

            if(key == arr[mid]) { // 탐색 성공
                System.out.println(iKey + " is in the array with index value: " + mid);
                return;
            } else if(iKey < arr[mid]) {
                // 왼쪽 부분 arr[0]부터 arr[mid-1]에서의 탐색
                return binarySearch1(iKey ,low, mid-1, arr);
            } else {
                // 오른쪽 부분 - arr[mid+1]부터 arr[high]에서의 탐색
                return binarySearch1(iKey, mid+1, high, arr);
            }
        }

        return; // 탐색 실패
    }
}
```
