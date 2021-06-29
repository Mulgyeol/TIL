---
description: Dijkstra에 대해 알아보자
date: 2021-06-17
tags: ["Algorithm"]
---

# Dijkstra 알고리즘, 최단 경로

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

- 플로이드-워샬(Floyd-Warshall) 알고리즘

---

## Dijkstra 알고리즘 -1 기본 구현

- 시작 정점에서의 거리가 최소인 `정점`을 선택해 나가면서 최단 경로를 구하는 방식이다.
  - `정점` 중심이므로 인접행렬, 인접리스트가 적절하다.
- 탐욕 기법을 사용한 알고리즘으로 MST의 프림 알고리즘과 유사하다.

아래는 슈도코드이다.

```
s: 시작 정점,
A: 인접 행렬,
D: 시작 정점에서의 거리(PRIM의 minEdge와 비슷하다.)
v: 정점 집합,
U: 선택된 정점 집합

Dijkstra(s,A,D)
    U = {s};

    For 모든 정점 v
        D[v] <- A[s][v]

    while U != V
        D[w]가 최소인 정점 w

```

크게 와닿지 않을 수 있으니 정리를 다시 한 번 하고,
Java언어로 코드를 작성해 보려고 한다.

### Dijkstra 알고리즘의 순서

1. 인접행렬이 주어졌다고 가정했을 때, 노드 갯수만큼의 인덱스를 갖는 distance 배열을 생성한다.
2. 같은 크기의 방문을 체크할 boolean[] visited 배열을 만들어준다.
3. distance 배열을 모두 최대값으로 초기화 해준다.
4. distance 배열의 시작노드에 해당하는 인덱스의 값을 0으로 변경해준다.
5. 노드 갯수만큼 반복문을 돌면서, 방문하지 않은 노드들 중 시작 위치에서 가장 가까운 노드를 찾는다.(첫 시작일 경우에 자기 자신이 된다.)
   - distance 배열에서 값이 가장 작은 인덱스의 노드.
   - 선택된 노드에 대해 방문처리 해준다.
6. 그 가장 가까운 노드를 경유지로 하여 아직 처리하지 않은 다른 정점으로의 최소비용을 따져본다.(첫 시작일 경우 시작점과 연결된 노드인덱스에 해당하는 distance배열의 값을 거리값으로 변경해준다.)
7. 최종적으로 distance의 인덱스에 있는 값들이 각 노드까지의 최단거리가 된다.

### 의문점에 대한 답변

#### 1. 이미 방문한 곳이, 다른 노드를 탐색하다가 더 짧은 경로를 찾을 수 있는 거 아닌가요?

- Dijkstra는 Greedy 알고리즘의 성격을 지닌다.
- 출발점에서 가장 가까운 곳을 먼저 고르고, 그 다음 고른 곳에서 이어진 노드에 대한 경로를 갱신시켜주고 있다. 이미 방문된 곳은 지금 선택된 곳보다 무조건 시작점으로부터 가까운 거리에 있다.

#### 2. 왜 가장 가까운 곳을 선택하고 그 선택한 노드와 인접한 경로를 갱신시키는 과정을 노드 갯수만큼 반복하나요?

- 시작점부터 종료지점까지 일렬로 연결되어있는 그래프를 생각해보자.
- 각 지점에서 연결된 노드는 하나씩이고, 결국 끝까지 반복해야 원하는 지점까지의 최단경로를 얻을 수 있다.
- 그렇지 않은 경우 중간에 도착지점에 방문하면, 반복문을 벗어난다.

### Java Code

```Java
public class DijkstraTest {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		int V = Integer.parseInt(br.readLine());
		int start =0; //임의로 시작점을 정했다 0으로.
		int end = V-1; // 임의로 도착점을 V-1으로
		int[][] adjMatrix = new int[V][V]; // 인접행렬

		for(int i=0; i<V; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			for(int j=0; j<V; j++) {
				adjMatrix[i][j] = Integer.parseInt(st.nextToken());
			}
		}

		int[] distance = new int[V];
		boolean[] visited = new boolean[V];

		Arrays.fill(distance, Integer.MAX_VALUE); //거리를 최대값으로 다 채움
		distance[start] = 0; // 시작점은 0으로 놓고 시작

		for(int i=0; i<V; i++) {
			int min = Integer.MAX_VALUE;
			int current = 0; // min 최소비용에 해당하는 정점 번호
			//step1. : 처리하지 않은 점정 중에 출발지에서 가장 가까운 정점 선택
			for (int j = 0; j < V; j++) {
				if(!visited[j] && min > distance[j]) {
					min = distance[j]; // 제일 가까운놈 찾기
					current = j;
				}
			}

			visited[current] = true;
			if(current == end) break; // 현재지점이 도착점이면 더 살펴보지 않아도 된다.

			//step2. : 선택된 current를 경유지로 하여 아직 처리하지 않은 다른 정점으로의 최소비용 따져본다.
			for (int j = 0; j < V; j++) {
				if(!visited[j] && adjMatrix[current][j] != 0 && distance[j] > min + adjMatrix[current][j]) {
					distance[j] = min + adjMatrix[current][j];
				}
			}
		}

		System.out.println(distance[end]);


	}

}
```

## Dijkstra 알고리즘 -2 우선순위 큐

문제를 풀다 보면 위 방법으로 Dijkstra를 구현 했을 때, 시간초과가 나오는 경우 가 있다. 매 반복마다 출발점에서 가장 가까운 지점을 찾는 것은 아주 큰 시간낭비다. 그래서 시작점으로 부터 가까운 위치에 있는 지점을 담는 `우선순위 큐`를 이용해 Dijkstra를 구현해 보자.

### 우선순위 큐를 위한 Node 클래스

```java
static class Node implements Comparable<Node>{

    int idx, distance;

    public Node(int idx, int distance) {
        super();
        this.idx = idx;
        this.distance = distance;
    }

    @Override
    public int compareTo(Node o) {
        return Integer.compare(this.distance, o.distance);
    }

}

```

### 우선순위 큐를 사용한 Dijkstra

```Java
private static void dijkstra() {
	PriorityQueue pq = new PriorityQueue<>();
	visited = new boolean[N+1];
	distance = new int[N+1];

	Arrays.fill(distance, INF);
	distance[X] = 0;
	pq.offer(new Node(X,distance[X]));

	while(!pq.isEmpty()) {
		Node curNode = pq.poll();
		int curNum = curNode.num;
		int curDis = curNode.distance;

		if(curDis == K){ // K == 목적 거리
			// 목적거리만큼 왔으면 할 일
		}

		if(curNum == goal) { //goal == 목적 노드
			// 목적지점에 도착했으면 할 일
		}

		visited[curNum] = true;

		for(int next : adjList[curNum]) {
			if(!visited[next] && distance[next]>curDis+1) {
				distance[next] = curDis+1;
				pq.offer(new Node(next, distance[next]));
			}
		}
	}
}
```

---

## Dijkstra 알고리즘 - 기본구현 문제 풀이

### [백준 - 1753] 최단경로

- [[백준 - 1753] 최단경로](https://www.acmicpc.net/problem/1753)

### 디버깅

- 한 정점에서 연결된 다른 정점까지의 경로가 2개 이상인 점을 고려해야 했다. (사실 시작점에 연결된 곳을 따로 처리해주지 않았다면, 상관 없었다. / 아래 코드는 따로 처리해 주지 않은 코드이다.)
- step2에서 기준으로 다뤘던 노드 중에 가장 가까운 정점을 그 다음 step1에서 고르는 것이 아니라, 시작점에서 방문처리하지 않은 가장 가까운 곳을 골라야 했다.

### Java Code

```Java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class acmicpc_1753_ShortestPath {

	static int INF = Integer.MAX_VALUE;

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		int V = Integer.parseInt(st.nextToken()); // 정점의 갯수
		int E = Integer.parseInt(st.nextToken()); // 간선의 갯수
		int K = Integer.parseInt(br.readLine()); // 시작점
		ArrayList<int[]>[] adjList = new ArrayList[V+1];

		for(int i=1; i<=V; i++) {
			adjList[i] = new ArrayList<>();
		}

		for(int i=0; i<E; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int u = Integer.parseInt(st.nextToken()); //출발
			int v = Integer.parseInt(st.nextToken()); //도착
			int w = Integer.parseInt(st.nextToken()); //가중치

			adjList[u].add(new int[] {v,w});
		}

		int[] distance = new int[V+1];
		boolean[] visited = new boolean[V+1];
		Arrays.fill(distance, INF);

		distance[K] = 0;

		for(int i=1; i<=V; i++) {
			int min = INF;
			int next = 0;
			for(int j=1; j<=V; j++) {
				if(!visited[j] && distance[j] < min) {
					min = distance[j];
					next = j;
				}
			}

			visited[next] = true;
			if(next == 0) break;

			for(int[] temp : adjList[next]) {
				if(!visited[temp[0]] && distance[temp[0]] > distance[next] + temp[1]) {
					distance[temp[0]] = distance[next] + temp[1];
				}
			}

		}

		StringBuilder sb = new StringBuilder();
		for(int i=1; i<=V; i++) {
			if(distance[i] != INF) sb.append(distance[i]).append("\n");
			else sb.append("INF").append("\n");
		}


		System.out.print(sb);

	}

}


```
