---
description: Kruskal과 Prim 알고리즘
date: 2021-07-04
tags: ["Algorithm"]
---

# Kruskal과 Prim 알고리즘

![img](../images/Algorithm.png)

프림 알고리즘과 크루스칼 알고리즘은 `MST(Minimum Spanning Tree)`를 구하는 알고리즘이다.

## 최소 신장 트리(MST)

- 그래프에서 최소 비용 문제
  1. 모든 정점을 연결하는 간선들의 가중치의 합이 최소가 되는 트리 : 최소 신장 트리
  2. 두 정점 사이의 최소 비용의 경로 찾기
- 신장트리
  - n개의 정점으로 이루어진 무향그래프에서 n개의 정점과 n-1개의 간선으로 이루어진 트리
- 최소 신장 트리(Minimum Spanning Tree)
  - 무향 가중치 그래프에서 신장 트리를 구성하는 간선들의 가중치의 합이 최소인 신장 트리

---

## KRUSKAL 알고리즘(Greedy)

- 그래프

  - 인접 행렬
  - 인접 리스트
  - 간선 리스트(리스트 안에 간선 정보들이 들어간다.)
    - 하나의 클래스(Edge)
      - from
      - to
      - weight(가중치)
    - 즉, Edge형 배열(Edge[])이거나 ArrayList<Edge>

- 간선을 하나씩 선택해서 MST를 찾는 알고리즘

  1. 최초, 모든 간선을 가중치에 따라 오름차순으로 정리
  2. 가중치가 가장 낮은 간선부터 선택(두 정점을 연결)하면서 트리를 증가시킴
     - 사이클이 존재하면 다음으로 가중치가 낮은 간선 선택
     - to에 연결된 간선이 있으면 pass하고 다음 가중치가 낮은 간선 선택!
  3. n-1 개의 간선이 선택될 때까지 2를 반복

- 사이클이 존재하는지 확인하는 방법
  - **UNION**

### Kruskal Java Code

```Java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class MST1_KruskalTest{

   static class Edge implements Comparable<Edge>{
      int from,to,weight;

      public Edge(int from, int to, int weight) {
         super();
         this.from = from;
         this.to = to;
         this.weight = weight;
      }

      @Override
      public int compareTo(Edge o) {
//         return this.weight - o.weight; 음수를 빼면 이상해질 수도 있다.
         return Integer.compare(this.weight, o.weight);
      }

   }

   static int V, E; //Vertex, Edge 갯수
   static int[] parents;
   static Edge[] edgeList;

   static void make() {//크기가 1인 단위집합을 만든다.
      for(int i=0; i<V; i++) {
         parents[i] = i;
      }
   }

   static int findSet(int a) {
      if(parents[a]==a) return a;

      //path compression : 자식 노드들의 ref가 갱신됨.
      //findSet을 하지 않으면 path compression이 완벽하지 않을 수 있음.
      //Rank 관리를 통해서 보완할 수 있는데, 이 또한 완벽하지 않음.
//      return findSet(parents[a]); //path compression 전
      return parents[a] = findSet(parents[a]);//path compression 후
   }

   static boolean union(int a, int b) {
      int aRoot = findSet(a);
      int bRoot = findSet(b);
      if(aRoot == bRoot) return false;

      parents[bRoot] = aRoot;
      return true;
   }

   public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringTokenizer st = new StringTokenizer(br.readLine(), " ");
      V = Integer.parseInt(st.nextToken());
      E = Integer.parseInt(st.nextToken());

      parents = new int[V];
      edgeList = new Edge[E];

      for(int i=0; i<E; i++) {
         st = new StringTokenizer(br.readLine(), " ");
         int from = Integer.parseInt(st.nextToken());
         int to = Integer.parseInt(st.nextToken());
         int weight = Integer.parseInt(st.nextToken());
         edgeList[i] = new Edge(from,to, weight);
      }// 간선리스트

      //1. 간선리스트 가중치 기준 오름차순 정렬
      Arrays.sort(edgeList);

      make();
      int result = 0;
      int count =0; // 선택한 간선수

      for(Edge edge : edgeList) {
         if(union(edge.from, edge.to)) {// 싸이클이 발생하지 않았다면
            result += edge.weight;
            if(++count == V-1) break;//정점-1 갯수
         }
      }

      System.out.println(result);
   }


}

```

---

## PRIM 알고리즘

- 하나의 정점에서 연결된 간선들 중에 하나씩 선택하면서 MST를 반들어가는 방식

  1. 임의 정점을 하나 선택해서 시작
  2. 선택한 정점과 인접하는 정점들 중의 최소 비용의 간선이 존재하는 정점을 선택
  3. 모든 정점이 선택될 때 까지 1,2 과정을 반복

- 서로소인 2개의 집합(2 disjoint-sets) 정보를 유지

  - 트리 정점들(tree vertices) - MST를 만들기 위해 선택된 정점들
  - 비트리 정점들(non-tree vertices) - 선택 되지 않은 정점들

- 정점을 중심으로 해결하는 알고리즘(이다 보니)
  - 그래프 자료구조 : 인접행렬, 인접리스트가 적합
  - N개의 정점을 모두 고립되지 않도록 연결, 가중치의 합 "최소"

### Prim Java Code

```Java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class MST2_PrimTest {

   public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      int N = Integer.parseInt(br.readLine());
      int[][] adjMatrix = new int[N][N];
      boolean[] visited = new boolean[N];
      int[] minEdge = new int[N];
      // 신장트리에 연결된 정점에서 자신으로의 최소 간선 비용

      StringTokenizer st;
      for(int i=0; i<N; i++) {
         st = new StringTokenizer(br.readLine()," ");
         for(int j=0; j<N; j++) {
            adjMatrix[i][j] = Integer.parseInt(st.nextToken());
         }
         minEdge[i] = Integer.MAX_VALUE;
      }

      int result = 0;
      minEdge[0] = 0; // 0을 시작정점으로 처리하기 위해 0 세팅

      for(int c=0; c<N; c++) {
         int min = Integer.MAX_VALUE;
         int minVertex = 0;

         // 신장 트리에 연결되지 않은 정점 중 minEdge비용이 최소인 정점
         for(int i=0; i < N; i++) {
            if(!visited[i] && min > minEdge[i]) {
               min = minEdge[i];
               minVertex = i;
            }
         }

         result += min;
         visited[minVertex] = true;

         for(int i=0; i<N; i++) {
            if(!visited[i] && adjMatrix[minVertex][i] != 0 && minEdge[i] > adjMatrix[minVertex][i]) {
               minEdge[i] = adjMatrix[minVertex][i];
            }
         }
      }

      System.out.println(result);

   }

}

```
