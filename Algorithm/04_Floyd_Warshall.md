---
description: Floyd-Warshall 알고리즘에 대해 알아보자
date: 2021-06-21
tags: ["Algorithm"]
---

# Floyd-Warshall 알고리즘, 최단경로

![img](../images/Algorithm.png)

## 최단 경로

### 최단 경로 정의

- 간선의 가중치가 있는 그래프에서 두 정점 사이의 경로들 중에 간선의 가중치의 합이 최소인 경로

### 하나의 시작 정점에서 끝 정점까지의 최단 경로

- 다익스트라(dijkstra) 알고리즘
  - 음의 가중치를 허용하지 않음
- 벨만-포드(Bellman-Ford) 알고리즘
  - 음의 가중치 허용

### 모든 정점들에 대한 최단 경로

- 플로이드-와샬(Floyd-Warshall) 알고리즘

### 각 최단 경로 알고리즘 비교

| 알고리즘      | 타겟                   | 속도 | 특징                                               |
| ------------- | ---------------------- | ---- | -------------------------------------------------- |
| 다익스트라    | 특정 노드 -> 모든노드  | 빠름 | 가중치가 음수이면 구할 수 없다.                    |
| 벨만 포드     | 특정 노드 -> 모든 노드 | 보통 | 가중치가 음수일 때 다익스트라 대신 사용할 수 있다. |
| 플로이드 와샬 | 모든 노드 -> 모든 노드 | 느림 | 가중치가 음수여도 사용할 수 있다.                  |

## 플로이드-와샬 알고리즘 분석

- `모든 정점`에서 `모든 정점`까지의 최단 거리를 구하는 DP형태의 알고리즘이다.
- 수행시간 : O(V^3)
- 경유지, 출발지, 도착지의 개념으로, 정점의 갯수 만큼 반복문을 세 번 돌면서 최단 경로를 갱신해 준다.
  - `출발지에서 도착지로 가는 비용`과 `출발지에서 경유지를 거쳐 도착지로 가는 비용`을 비교한다.

### 주의할 점

- 연결되어 있지 않은 노드 간의 거리표현

  ```Java
  public class Test {

      static final int INF = Integer.MAX_VALUE;

      public static void main(String[] args) {
          System.out.println(INF);

          int inf_test = INF + 1;
          System.out.println(inf_test);

          int inf_test2 = INF + INF;
          System.out.println(inf_test2);
      }

  }
  ```

  - 위 코드의 결과 값은 아래와 같다.
    - 2147483647
    - -2147483648
    - -2
  - 단순히 연결되어 있지 않은 값을 int형의 최대값을 주면 비교하는 과정에서 음수가 나올 수 있으니 주의해야한다.
  - 출발지에서 경유지까지의 거리 + 경유지에서 도착지까지의 거리가 자료형의 범위를 벗어나게 되면 예상치 못한 값이 나올 수 있다.

## 플로이드-와샬 알고리즘 문제 해결 (백준 1956 - 운동)

```Java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

/*
 * 플로이드 와샬 알고리즘 이용
 */

public class Acmicpc_1956_운동 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int V = Integer.parseInt(st.nextToken());
		int E = Integer.parseInt(st.nextToken());
		int[][] arr = new int[V+1][V+1];
		int answer = 10001; //최대값,

		for(int i=0; i<V+1; i++) {
			Arrays.fill(arr[i], 10001);
		}

		for(int i=0; i<E; i++) {
			st = new StringTokenizer(br.readLine());
			int to = Integer.parseInt(st.nextToken());
			int from = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());
			arr[to][from] = weight;
		}

		for(int i=1; i<V+1; i++) { //경유지
			for(int j=1; j<V+1; j++) { //출발지
				for(int k=1; k<V+1; k++) {// 도착지
                    //출발지에서 도착지로 가는 비용과
                    //출발지에서 경유지를 거쳐 도착지로 가는 비용을 비교한다.
					if(arr[j][k] > arr[j][i] + arr[i][k]) {
						arr[j][k] = arr[j][i] + arr[i][k];
					}
				}
			}
		}

		for(int i=1; i<V+1; i++) {
			if(arr[i][i] < answer) answer = arr[i][i];
		}

		if(answer == 10001) answer = -1;
		System.out.println(answer);
	}

}

```
