"use client"
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import {Container, Button} from 'react-bootstrap'

const DiffEditor = dynamic(() => import("../components/monaco-editor/diff-editor"), {
  ssr: false,
});

const Editor = dynamic(() => import("../components/monaco-editor/editor"), {
  ssr: false,
});

const ReactMonacoEditor = dynamic(()=> import("../components/react-monaco-editor/diff-editor"),{
    ssr: false,
});

const Home: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [chartValue, setChartValue] = useState<string>('');
  const MonanoData = useRef<string>(`global:
  imagePullSecrets: []
  imageRegistry: ""
  storageClass: ""
kubeVersion: ""
nameOverride: ""
fullnameOverride: ""
commonLabels: {}
commonAnnotations: {}
extraDeploy: []
image:
  debug: false
  digest: ""
  pullPolicy: "IfNotPresent"
  pullSecrets: []
  registry: "docker.io"
  repository: "bitnami/apache"
  tag: "2.4.57-debian-11-r36"
git:
  digest: ""
  pullPolicy: "IfNotPresent"
  pullSecrets: []
  registry: "docker.io"
  repository: "bitnami/git"
  tag: "2.41.0-debian-11-r14"
replicaCount: 2
revisionHistoryLimit: 10
podAffinityPreset: ""
podAntiAffinityPreset: "soft"
nodeAffinityPreset:
  key: ""
  type: ""
  values: []
affinity: {}
nodeSelector: {}
tolerations: []
topologySpreadConstraints: []
extraPodSpec: {}
cloneHtdocsFromGit:
  branch: ""
  enableAutoRefresh: true
  enabled: false
  extraVolumeMounts: []
  interval: 60
  repository: ""
  resources: {}
htdocsConfigMap: ""
htdocsPVC: ""
vhostsConfigMap: ""
httpdConfConfigMap: ""
podLabels: {}
podAnnotations: {}
hostAliases:
  - hostnames:
      - "status.localhost"
    ip: "127.0.0.1"
priorityClassName: ""
schedulerName: ""
podSecurityContext:
  enabled: true
  fsGroup: 1001
containerSecurityContext:
  enabled: true
  runAsNonRoot: true
  runAsUser: 1001
command: []
args: []
lifecycleHooks: {}
resources:
  limits: {}
  requests: {}
startupProbe:
  enabled: false
  failureThreshold: 6
  initialDelaySeconds: 180
  path: "/"
  periodSeconds: 20
  port: "http"
  successThreshold: 1
  timeoutSeconds: 5
livenessProbe:
  enabled: true
  failureThreshold: 6
  initialDelaySeconds: 180
  path: "/"
  periodSeconds: 20
  port: "http"
  successThreshold: 1
  timeoutSeconds: 5
readinessProbe:
  enabled: true
  failureThreshold: 6
  initialDelaySeconds: 30
  path: "/"
  periodSeconds: 10
  port: "http"
  successThreshold: 1
  timeoutSeconds: 5
customStartupProbe: {}
customLivenessProbe: {}
customReadinessProbe: {}
extraVolumes: []
extraVolumeMounts: []
extraEnvVars: []
extraEnvVarsCM: ""
extraEnvVarsSecret: ""
containerPorts:
  http: 8080
  https: 8443
initContainers: []
sidecars: []
updateStrategy:
  type: "RollingUpdate"
pdb:
  create: false
  maxUnavailable: ""
  minAvailable: 1
autoscaling:
  enabled: false
  maxReplicas: 11
  minReplicas: 1
  targetCPU: 50
  targetMemory: 50
service:
  annotations: {}
  clusterIP: ""
  externalTrafficPolicy: "Cluster"
  extraPorts: []
  loadBalancerIP: ""
  loadBalancerSourceRanges: []
  nodePorts:
      http: ""
      https: ""
  ports:
      http: 80
      https: 443
  sessionAffinity: "None"
  sessionAffinityConfig: {}
  type: "LoadBalancer"
ingress:
  annotations: {}
  apiVersion: ""
  enabled: false
  extraHosts: []
  extraPaths: []
  extraRules: []
  extraTls: []
  hostname: "example.local"
  ingressClassName: ""
  path: "/"
  pathType: "ImplementationSpecific"
  secrets: []
  selfSigned: false
  tls: false
metrics:
  enabled: false
  image:
      debug: false
      digest: ""
      pullPolicy: "IfNotPresent"
      pullSecrets: []
      registry: "docker.io"
      repository: "bitnami/apache-exporter"
      tag: "0.13.4-debian-11-r14"
  podAnnotations:
      "prometheus.io/port": "9117"
      "prometheus.io/scrape": "true"
  prometheusRule:
      enabled: false
      labels: {}
      namespace: ""
      rules: []
  resources:
      limits: {}
      requests: {}
  service:
      annotations:
          "prometheus.io/port": "{{ .Values.metrics.service.port }}"
          "prometheus.io/scrape": "true"
      port: 9117
  serviceMonitor:
      enabled: false
      interval: ""
      labels: {}
      metricRelabelings: []
      namespace: ""
      relabelings: []
      scrapeTimeout: ""`);

  const MonacoDiff = useRef<string>(`    # Copyright VMware, Inc.
  # SPDX-License-Identifier: APACHE-2.0
  
  ## @section Global parameters
  ## Global Docker image parameters
  ## Please, note that this will override the image parameters, including dependencies, configured to use the global value
  ## Current available global Docker image parameters: imageRegistry, imagePullSecrets and storageClass
  
  ## @param global.imageRegistry Global Docker image registry
  ## @param global.imagePullSecrets Global Docker registry secret names as an array
  ## @param global.storageClass Global StorageClass for Persistent Volume(s)
  ##
  global:
    imageRegistry: ""
    ## E.g.
    ## imagePullSecrets:
    ##   - myRegistryKeySecretName
    ##
    imagePullSecrets: []
    storageClass: ""
  ## @section Common parameters
  
  ## @param kubeVersion Override Kubernetes version
  ##
  kubeVersion: ""
  ## @param nameOverride String to partially override common.names.fullname
  ##
  nameOverride: ""
  ## @param fullnameOverride String to fully override common.names.fullname
  ##
  fullnameOverride: ""
  ## @param commonLabels Labels to add to all deployed objects
  ##
  commonLabels: {}
  ## @param commonAnnotations Annotations to add to all deployed objects
  ##
  commonAnnotations: {}
  ## @param extraDeploy Array of extra objects to deploy with the release
  ##
  extraDeploy: []
  ## @section Apache parameters
  
  ## Bitnami Apache image
  ## ref: https://hub.docker.com/r/bitnami/apache/tags/
  ## @param image.registry Apache image registry
  ## @param image.repository Apache image repository
  ## @param image.tag Apache image tag (immutable tags are recommended)
  ## @param image.digest Apache image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag
  ## @param image.pullPolicy Apache image pull policy
  ## @param image.pullSecrets Apache image pull secrets
  ## @param image.debug Enable image debug mode
  ##
  image:
    registry: docker.io
    repository: bitnami/apache
    tag: 2.4.57-debian-11-r36
    digest: ""
    ## Specify a imagePullPolicy
    ## Defaults to 'Always' if image tag is 'latest', else set to 'IfNotPresent'
    ## ref: https://kubernetes.io/docs/user-guide/images/#pre-pulling-images
    ##
    pullPolicy: IfNotPresent
    ## Optionally specify an array of imagePullSecrets.
    ## Secrets must be manually created in the namespace.
    ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/
    ## e.g:
    ## pullSecrets:
    ##   - myRegistryKeySecretName
    ##
    pullSecrets: []
    ## Enable debug mode
    ##
    debug: false
  ## Bitnami Git image version
  ## ref: https://hub.docker.com/r/bitnami/git/tags/
  ## @param git.registry Git image registry
  ## @param git.repository Git image name
  ## @param git.tag Git image tag (immutable tags are recommended)
  ## @param git.digest Git image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag
  ## @param git.pullPolicy Git image pull policy
  ## @param git.pullSecrets Specify docker-registry secret names as an array
  ##
  git:
    registry: docker.io
    repository: bitnami/git
    tag: 2.41.0-debian-11-r14
    digest: ""
    pullPolicy: IfNotPresent
    ## Optionally specify an array of imagePullSecrets.
    ## Secrets must be manually created in the namespace.
    ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/
    ## e.g:
    ## pullSecrets:
    ##   - myRegistryKeySecretName
    ##
    pullSecrets: []
  ## @param replicaCount Number of replicas of the Apache deployment
  ##
  replicaCount: 7
  ## @param revisionHistoryLimit The number of old history to retain to allow rollback
  ##
  revisionHistoryLimit: 10
  ## @param podAffinityPreset Pod affinity preset. Ignored if 'affinity' is set. Allowed values: 'soft' or 'hard'
  ## ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
  ##
  podAffinityPreset: ""
  ## @param podAntiAffinityPreset Pod anti-affinity preset. Ignored if 'affinity' is set. Allowed values: 'soft' or 'hard'
  ## Ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
  ##
  podAntiAffinityPreset: soft
  ## Node affinity preset
  ## Ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity
  ##
  nodeAffinityPreset:
    ## @param nodeAffinityPreset.type Node affinity preset type. Ignored if 'affinity' is set. Allowed values: 'soft' or 'hard'
    ##
    type: ""
    ## @param nodeAffinityPreset.key Node label key to match. Ignored if 'affinity' is set
    ##
    key: ""
    ## @param nodeAffinityPreset.values Node label values to match. Ignored if 'affinity' is set
    ## E.g.
    ## values:
    ##   - e2e-az1
    ##   - e2e-az2
    ##
    values: []
  ## @param affinity Affinity for pod assignment
  ## Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity
  ## NOTE: podAffinityPreset, podAntiAffinityPreset, and nodeAffinityPreset will be ignored when it's set
  ##
  affinity: {}`)

  const FuncYamlfile = async (yamldata:string) =>{
    MonanoData.current = await yamldata;
    const chartvalue = await yamldata;
    
    setChartValue(chartvalue);
} 

  return (
    <Container>
      
      <h1 className={`mb-5`}>Monaco Editor Home <Button className="btn btn-primary" onClick={()=>setDisplay(!display)}>Toogle</Button></h1>
      {/* {display ?<Editor FuncYamlfile={FuncYamlfile} chartvalue={MonanoData.current} />:<DiffEditor FuncYamlfile={FuncYamlfile} chartvalue={MonacoDiff.current} orginalvalue={MonanoData.current}/>} */}
      {/* <DiffEditor FuncYamlfile={FuncYamlfile} chartvalue={MonacoDiff.current} orginalvalue={MonanoData.current}/> */}
      <ReactMonacoEditor />
    </Container>
  );
};

export default Home;
