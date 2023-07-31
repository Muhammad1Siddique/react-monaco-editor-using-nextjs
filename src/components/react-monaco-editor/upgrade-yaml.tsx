import { useEffect, useState, useRef } from "react";
import * as jsonpatch from "fast-json-patch";
import { deleteValue, parseToJS, setValue } from "../../shared/yamlutils";
import ReactMonacoEditor from './diff-editor';

export interface IApplyModificationsProps {
  defaultValues: string;
  valuesApplied: string;
}

function ApplyModifications() {
  
const packageValue = useRef(`# Copyright VMware, Inc.
  # SPDX-License-Identifier: APACHE-2.0
  
  ## @section Global parameters
  ## Global Docker image parameters
  ## Please, note that this will override the image parameters, including dependencies, configured to use the global value
  ## Current available global Docker image parameters: imageRegistry, imagePullSecrets and storageClass
  ##
  
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
  ##
  
  ## @param kubeVersion Force target Kubernetes version (using Helm capabilities if not set)
  ##
  kubeVersion: ""
  ## @param nameOverride String to partially override gitea.fullname template (will maintain the release name)
  ##
  nameOverride: ""
  ## @param fullnameOverride String to fully override gitea.fullname template
  ##
  fullnameOverride: ""
  ## @param namespaceOverride String to fully override common.names.namespace
  ##
  namespaceOverride: ""
  ## @param commonAnnotations Common annotations to add to all Gitea resources (sub-charts are not considered). Evaluated as a template
  ##
  commonAnnotations: {}
  ## @param commonLabels Common labels to add to all Gitea resources (sub-charts are not considered). Evaluated as a template
  ##
  commonLabels: {}
  
  ## @param extraDeploy Array of extra objects to deploy with the release (evaluated as a template).
  ##
  extraDeploy: []
  
  ## @section Gitea parameters
  ##
  
  ## Bitnami Gitea image version
  ## ref: https://hub.docker.com/r/bitnami/gitea/tags/
  ## @param image.registry Gitea image registry
  ## @param image.repository Gitea Image name
  ## @param image.tag Gitea Image tag
  ## @param image.digest Gitea image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag
  ## @param image.pullPolicy Gitea image pull policy
  ## @param image.pullSecrets Specify docker-registry secret names as an array
  ## @param image.debug Specify if debug logs should be enabled
  ##
  image:
    registry: docker.io
    repository: bitnami/gitea
    tag: 1.20.2-debian-11-r0
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
    ## Set to true if you would like to see extra information on logs
    ##
    debug: false
  ## @param replicaCount Number of Gitea Pods to run (requires ReadWriteMany PVC support)
  ##
  replicaCount: 1
  ## @param adminUsername User of the application
  ## ref: https://github.com/bitnami/containers/tree/main/bitnami/gitea#configuration
  ##
  adminUsername: bn_user
  ## @param adminPassword Application password
  ## Defaults to a random 10-character alphanumeric string if not set
  ## ref: https://github.com/bitnami/containers/tree/main/bitnami/gitea#configuration
  ##
  adminPassword: ""
  ## @param adminEmail Admin email
  ## ref: https://github.com/bitnami/containers/tree/main/bitnami/gitea#configuration
  ##
  adminEmail: user@example.com
  ## @param appName Gitea application name
  ## ref: https://github.com/bitnami/containers/tree/main/bitnami/gitea#configuration
  ##
  appName: example
  ## @param runMode Gitea application host
  ## ref: https://github.com/bitnami/containers/tree/main/bitnami/gitea#configuration
  ##
  runMode: prod
  ## @param exposeSSH Make the SSH server accesible
  ##
  exposeSSH: true
  ## @param rootURL UI Root URL (for link generation)
  ##
  rootURL: ""
  ## @param command Override default container command (useful when using custom images)
  ##
  command: []
  ## @param args Override default container args (useful when using custom images)
  ##
  args: []
  ## @param updateStrategy.type Update strategy - only really applicable for deployments with RWO PVs attached
  ## If replicas = 1, an update can get "stuck", as the previous pod remains attached to the
  ## PV, and the "incoming" pod can never start. Changing the strategy to "Recreate" will
  ## terminate the single previous pod, so that the new, incoming pod can attach to the PV
  ##
  updateStrategy:
    type: RollingUpdate
  ## @param priorityClassName Gitea pods' priorityClassName
  ##
  priorityClassName: ""
  ## @param schedulerName Name of the k8s scheduler (other than default)
  ## ref: https://kubernetes.io/docs/tasks/administer-cluster/configure-multiple-schedulers/
  ##
  schedulerName: ""
  ## @param topologySpreadConstraints Topology Spread Constraints for pod assignment
  ## https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
  ## The value is evaluated as a template
  ##
  topologySpreadConstraints: []
  ## @param hostAliases [array] Add deployment host aliases
  ## https://kubernetes.io/docs/concepts/services-networking/add-entries-to-pod-etc-hosts-with-host-aliases/
  ##
  hostAliases: []
  ## @param extraEnvVars Extra environment variables
  ## For example:
  ##
  extraEnvVars: []
  #  - name: BEARER_AUTH
  #    value: true
  ## @param extraEnvVarsCM ConfigMap containing extra env vars
  ##
  extraEnvVarsCM: ""
  ## @param extraEnvVarsSecret Secret containing extra env vars (in case of sensitive data)
  ##
  extraEnvVarsSecret: ""
  ## @param extraVolumes Array of extra volumes to be added to the deployment (evaluated as template). Requires setting \`extraVolumeMounts\`
  ##
  extraVolumes: []
  ## @param extraVolumeMounts Array of extra volume mounts to be added to the container (evaluated as template). Normally used with \`extraVolumes\`.
  ##
  extraVolumeMounts: []
  ## @param initContainers Add additional init containers to the pod (evaluated as a template)
  ##
  initContainers: []
  ## @param sidecars Attach additional containers to the pod (evaluated as a template)
  ##
  sidecars: []
  ## @param tolerations Tolerations for pod assignment
  ## Ref: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
  ##
  tolerations: []
  ## @param existingSecret Name of a secret with the application password
  ##
  existingSecret: ""
  ## @param existingSecretKey Key inside the existing secret containing the password
  ##
  existingSecretKey: "admin-password"
  ## SMTP mail delivery configuration
  ## ref: https://github.com/bitnami/containers/tree/main/bitnami/gitea/#smtp-configuration
  ## @param smtpHost SMTP host
  ## @param smtpPort SMTP port
  ## @param smtpUser SMTP user
  ## @param smtpPassword SMTP password
  ##
  smtpHost: ""
  smtpPort: ""
  smtpUser: ""
  smtpPassword: ""
  ## @param smtpExistingSecret The name of an existing secret with SMTP credentials
  ## NOTE: Must contain key \`smtp-password\`
  ## NOTE: When it's set, the \`smtpPassword\` parameter is ignored
  ##
  smtpExistingSecret: ""
  ## @param containerPorts [object] Container ports
  ##
  containerPorts:
    http: 3000
    ssh: 2222
  ## Enable persistence using Persistent Volume Claims
  ## ref: https://kubernetes.io/docs/user-guide/persistent-volumes/
  ##
  persistence:
    ## @param persistence.enabled Enable persistence using PVC
    ##
    enabled: true
    ## @param persistence.storageClass PVC Storage Class for Gitea volume
    ## If defined, storageClassName: <storageClass>
    ## If set to "-", storageClassName: "", which disables dynamic provisioning
    ## If undefined (the default) or set to null, no storageClassName spec is
    ##   set, choosing the default provisioner.  (gp2 on AWS, standard on
    ##   GKE, AWS & OpenStack)
    ##
    storageClass: ""
    ## @param persistence.accessModes PVC Access Mode for Gitea volume
    ## Requires persistence.enabled: true
    ## If defined, PVC must be created manually before volume will be bound
    ##
    accessModes:
      - ReadWriteOnce
    ## @param persistence.size PVC Storage Request for Gitea volume
    ##
    size: 8Gi
    ## @param persistence.dataSource Custom PVC data source
    ##
    dataSource: {}
    ## @param persistence.existingClaim A manually managed Persistent Volume Claim
    ## Requires persistence.enabled: true
    ## If defined, PVC must be created manually before volume will be bound
    ##
    existingClaim: ""
    ## @param persistence.hostPath If defined, the gitea-data volume will mount to the specified hostPath.
    ## Requires persistence.enabled: true
    ## Requires persistence.existingClaim: nil|false
    ## Default: nil.
    ##
    hostPath: ""
    ## @param persistence.annotations Persistent Volume Claim annotations
    ##
    annotations: {}
    ## @param persistence.selector Selector to match an existing Persistent Volume for Gitea data PVC
    ## If set, the PVC can't have a PV dynamically provisioned for it
    ## E.g.
    ## selector:
    ##   matchLabels:
    ##     app: my-app
    ##
    selector: {}
  
  ## @param podAffinityPreset Pod affinity preset. Ignored if \`affinity\` is set. Allowed values: \`soft\` or \`hard\`
  ## ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
  ##
  podAffinityPreset: ""
  ## @param podAntiAffinityPreset Pod anti-affinity preset. Ignored if \`affinity\` is set. Allowed values: \`soft\` or \`hard\`
  ## Ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity
  ##
  podAntiAffinityPreset: soft
  ## Node affinity preset
  ## Ref: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity
  ## @param nodeAffinityPreset.type Node affinity preset type. Ignored if \`affinity\` is set. Allowed values: \`soft\` or \`hard\`
  ## @param nodeAffinityPreset.key Node label key to match Ignored if \`affinity\` is set.
  ## @param nodeAffinityPreset.values Node label values to match. Ignored if \`affinity\` is set.
  ##
  nodeAffinityPreset:
    type: ""
    ## E.g.
    ## key: "kubernetes.io/e2e-az-name"
    ##
    key: ""
    ## E.g.
    ## values:
    ##   - e2e-az1
    ##   - e2e-az2
    ##
    values: []
  ## @param affinity Affinity for pod assignment
  ## Ref: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#affinity-and-anti-affinity
  ## Note: podAffinityPreset, podAntiAffinityPreset, and nodeAffinityPreset will be ignored when it's set
  ##
  affinity: {}
  ## @param nodeSelector Node labels for pod assignment. Evaluated as a template.
  ## ref: https://kubernetes.io/docs/user-guide/node-selection/
  ##
  nodeSelector: {}
  ## Gitea container's resource requests and limits
  ## ref: http://kubernetes.io/docs/user-guide/compute-resources/
  ## @param resources.requests [object] The requested resources for the init container
  ## @param resources.limits The resources limits for the init container
  ##
  resources:
    limits: {}
    requests: {}
  ## Configure Pods Security Context
  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-pod
  ## @param podSecurityContext.enabled Enable Gitea pods' Security Context
  ## @param podSecurityContext.fsGroup Gitea pods' group ID
  ##
  podSecurityContext:
    enabled: true
    fsGroup: 1001
  ## Configure Container Security Context (only main container)
  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container
  ## @param containerSecurityContext.enabled Enable Gitea containers' Security Context
  ## @param containerSecurityContext.runAsUser Gitea containers' Security Context
  ## @param containerSecurityContext.runAsNonRoot Set Controller container's Security Context runAsNonRoot
  ##
  containerSecurityContext:
    enabled: true
    runAsUser: 1001
    runAsNonRoot: true
  ## Configure extra options for startup probe
  ## Gitea core exposes / to unauthenticated requests, making it a good
  ## default startup and readiness path. However, that may not always be the
  ## case. For example, if the image value is overridden to an image containing a
  ## module that alters that route, or an image that does not auto-install Gitea.
  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/#configure-probes
  ## @param startupProbe.enabled Enable startupProbe
  ## @param startupProbe.path Request path for startupProbe
  ## @param startupProbe.initialDelaySeconds Initial delay seconds for startupProbe
  ## @param startupProbe.periodSeconds Period seconds for startupProbe
  ## @param startupProbe.timeoutSeconds Timeout seconds for startupProbe
  ## @param startupProbe.failureThreshold Failure threshold for startupProbe
  ## @param startupProbe.successThreshold Success threshold for startupProbe
  ##
  startupProbe:
    enabled: false
    path: /
    initialDelaySeconds: 600
    periodSeconds: 10
    timeoutSeconds: 5
    failureThreshold: 5
    successThreshold: 1
  ## Configure extra options for liveness probe
  ## Gitea core exposes / to unauthenticated requests, making it a good
  ## default liveness and readiness path. However, that may not always be the
  ## case. For example, if the image value is overridden to an image containing a
  ## module that alters that route, or an image that does not auto-install Gitea.
  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/#configure-probes
  ## @param livenessProbe.enabled Enable livenessProbe
  ## @param livenessProbe.path Request path for livenessProbe
  ## @param livenessProbe.initialDelaySeconds Initial delay seconds for livenessProbe
  ## @param livenessProbe.periodSeconds Period seconds for livenessProbe
  ## @param livenessProbe.timeoutSeconds Timeout seconds for livenessProbe
  ## @param livenessProbe.failureThreshold Failure threshold for livenessProbe
  ## @param livenessProbe.successThreshold Success threshold for livenessProbe
  ##
  livenessProbe:
    enabled: true
    path: /
    initialDelaySeconds: 600
    periodSeconds: 10
    timeoutSeconds: 5
    failureThreshold: 5
    successThreshold: 1
  ## Configure extra options for readiness probe
  ## Gitea core exposes / to unauthenticated requests, making it a good
  ## default liveness and readiness path. However, that may not always be the
  ## case. For example, if the image value is overridden to an image containing a
  ## module that alters that route, or an image that does not auto-install Gitea.
  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/#configure-probes
  ## @param readinessProbe.enabled Enable readinessProbe
  ## @param readinessProbe.path Request path for readinessProbe
  ## @param readinessProbe.initialDelaySeconds Initial delay seconds for readinessProbe
  ## @param readinessProbe.periodSeconds Period seconds for readinessProbe
  ## @param readinessProbe.timeoutSeconds Timeout seconds for readinessProbe
  ## @param readinessProbe.failureThreshold Failure threshold for readinessProbe
  ## @param readinessProbe.successThreshold Success threshold for readinessProbe
  ##
  readinessProbe:
    enabled: true
    path: /
    initialDelaySeconds: 30
    periodSeconds: 5
    timeoutSeconds: 1
    failureThreshold: 5
    successThreshold: 1
  ## @param customStartupProbe Override default startup probe
  ##
  customStartupProbe: {}
  ## @param customLivenessProbe Override default liveness probe
  ##
  customLivenessProbe: {}
  ## @param customReadinessProbe Override default readiness probe
  ##
  customReadinessProbe: {}
  ## @param lifecycleHooks LifecycleHook to set additional configuration at startup Evaluated as a template
  ##
  lifecycleHooks: {}
  ## @param podAnnotations Pod annotations
  ## ref: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/
  ##
  podAnnotations: {}
  ## @param podLabels Add additional labels to the pod (evaluated as a template)
  ## ref: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
  ##
  podLabels: {}
  
  ## @section Traffic Exposure Parameters
  ##
  
  ## Kubernetes configuration. For minikube, set this to NodePort, elsewhere use LoadBalancer
  ##
  service:
    ## @param service.type Kubernetes Service type
    ##
    type: LoadBalancer
    ## @param service.ports.http Service HTTP port
    ## @param service.ports.ssh Service SSH port
    ##
    ports:
      http: 80
      ssh: 22
    ## @param service.loadBalancerSourceRanges Restricts access for LoadBalancer (only with \`service.type: LoadBalancer\`)
    ## e.g:
    ## loadBalancerSourceRanges:
    ##   - 0.0.0.0/0
    ##
    loadBalancerSourceRanges: []
    ## @param service.loadBalancerIP loadBalancerIP for the Gitea Service (optional, cloud specific)
    ## ref: https://kubernetes.io/docs/user-guide/services/#type-loadbalancer
    ##
    loadBalancerIP: ""
    ## @param service.nodePorts [object] Kubernetes node port
    ## nodePorts:
    ##   http: <to set explicitly, choose port between 30000-32767>
    ##   https: <to set explicitly, choose port between 30000-32767>
    ##
    nodePorts:
      http: ""
      ssh: ""
    ## @param service.externalTrafficPolicy Enable client source IP preservation
    ## ref https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip
    ##
    externalTrafficPolicy: Cluster
    ## @param service.clusterIP Gitea service Cluster IP
    ## e.g.:
    ## clusterIP: None
    ##
    clusterIP: ""
    ## @param service.extraPorts Extra ports to expose (normally used with the \`sidecar\` value)
    ##
    extraPorts: []
    ## @param service.annotations Additional custom annotations for Gitea service
    ##
    annotations: {}
    ## @param service.sessionAffinity Session Affinity for Kubernetes service, can be "None" or "ClientIP"
    ## If "ClientIP", consecutive client requests will be directed to the same Pod
    ## ref: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies
    ##
    sessionAffinity: None
    ## @param service.sessionAffinityConfig Additional settings for the sessionAffinity
    ## sessionAffinityConfig:
    ##   clientIP:
    ##     timeoutSeconds: 300
    ##
    sessionAffinityConfig: {}
  ## Configure the ingress resource that allows you to access the
  ## Gitea installation. Set up the URL
  ## ref: https://kubernetes.io/docs/user-guide/ingress/
  ##
  ingress:
    ## @param ingress.enabled Enable ingress controller resource
    ##
    enabled: false
  
    ## @param ingress.pathType Ingress Path type
    ##
    pathType: ImplementationSpecific
    ## @param ingress.apiVersion Override API Version (automatically detected if not set)
    ##
    apiVersion: ""
    ## @param ingress.ingressClassName IngressClass that will be be used to implement the Ingress (Kubernetes 1.18+)
    ## This is supported in Kubernetes 1.18+ and required if you have more than one IngressClass marked as the default for your cluster .
    ## ref: https://kubernetes.io/blog/2020/04/02/improvements-to-the-ingress-api-in-kubernetes-1.18/
    ##
    ingressClassName: ""
    ## @param ingress.hostname Default host for the ingress resource
    ##
    hostname: "gitea.local"
    ## @param ingress.path The Path to Gitea. You may need to set this to '/*' in order to use this
    ## with ALB ingress controllers.
    ##
    path: /
    ## @param ingress.annotations Additional annotations for the Ingress resource. To enable certificate autogeneration, place here your cert-manager annotations.
    ## For a full list of possible ingress annotations, please see
    ## ref: https://github.com/kubernetes/ingress-nginx/blob/master/docs/user-guide/nginx-configuration/annotations.md
    ## Use this parameter to set the required annotations for cert-manager, see
    ## ref: https://cert-manager.io/docs/usage/ingress/#supported-annotations
    ##
    ## e.g:
    ## annotations:
    ##   kubernetes.io/ingress.class: nginx
    ##   cert-manager.io/cluster-issuer: cluster-issuer-name
    ##
    annotations: {}
    ## @param ingress.tls Enable TLS configuration for the hostname defined at ingress.hostname parameter
    ## TLS certificates will be retrieved from a TLS secret with name: {{- printf "%s-tls" .Values.ingress.hostname }}
    ## You can use the ingress.secrets parameter to create this TLS secret or relay on cert-manager to create it
    ##
    tls: false
    ## @param ingress.selfSigned Create a TLS secret for this ingress record using self-signed certificates generated by Helm
    ##
    selfSigned: false
    ## @param ingress.extraHosts The list of additional hostnames to be covered with this ingress record.
    ## Most likely the hostname above will be enough, but in the event more hosts are needed, this is an array
    ## extraHosts:
    ## - name: gitea.local
    ##   path: /
    ##
    extraHosts: []
    ## @param ingress.extraPaths Any additional arbitrary paths that may need to be added to the ingress under the main host.
    ## For example: The ALB ingress controller requires a special rule for handling SSL redirection.
    ## extraPaths:
    ## - path: /*
    ##   backend:
    ##     serviceName: ssl-redirect
    ##     servicePort: use-annotation
    ##
    extraPaths: []
    ## @param ingress.extraTls The tls configuration for additional hostnames to be covered with this ingress record.
    ## see: https://kubernetes.io/docs/concepts/services-networking/ingress/#tls
    ## extraTls:
    ## - hosts:
    ##     - gitea.local
    ##   secretName: gitea.local-tls
    ##
    extraTls: []
    ## @param ingress.secrets If you're providing your own certificates, please use this to add the certificates as secrets
    ## key and certificate should start with -----BEGIN CERTIFICATE----- or
    ## -----BEGIN RSA PRIVATE KEY-----
    ##
    ## name should line up with a tlsSecret set further up
    ## If you're using cert-manager, this is unneeded, as it will create the secret for you if it is not set
    ##
    ## It is also possible to create and manage the certificates outside of this helm chart
    ## Please see README.md for more information
    ## Example:
    ## - name: gitea.local-tls
    ##   key:
    ##   certificate:
    ##
    secrets: []
    ## @param ingress.extraRules Additional rules to be covered with this ingress record
    ## ref: https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-rules
    ## e.g:
    ## extraRules:
    ## - host: example.local
    ##     http:
    ##       path: /
    ##       backend:
    ##         service:
    ##           name: example-svc
    ##           port:
    ##             name: http
    ##
    extraRules: []
  
  ## @section Other Parameters
  ##
  
  ## Service account for Gitea to use.
  ## ref: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
  ##
  serviceAccount:
    ## @param serviceAccount.create Enable creation of ServiceAccount for Gitea pod
    ##
    create: true
    ## @param serviceAccount.name The name of the ServiceAccount to use.
    ## If not set and create is true, a name is generated using the common.names.fullname template
    ##
    name: ""
    ## @param serviceAccount.automountServiceAccountToken Allows auto mount of ServiceAccountToken on the serviceAccount created
    ## Can be set to false if pods using this serviceAccount do not need to use K8s API
    ##
    automountServiceAccountToken: true
    ## @param serviceAccount.annotations Additional custom annotations for the ServiceAccount
    ##
    annotations: {}
  
  ## @section Database parameters
  ##
  
  ## PostgreSQL chart configuration
  ## ref: https://github.com/bitnami/charts/blob/main/bitnami/postgresql/values.yaml
  ## @param postgresql.enabled Switch to enable or disable the PostgreSQL helm chart
  ## @param postgresql.auth.username Name for a custom user to create
  ## @param postgresql.auth.password Password for the custom user to create
  ## @param postgresql.auth.database Name for a custom database to create
  ## @param postgresql.auth.existingSecret Name of existing secret to use for PostgreSQL credentials
  ## @param postgresql.architecture PostgreSQL architecture (\`standalone\` or \`replication\`)
  ## @param postgresql.service.ports.postgresql PostgreSQL service port
  ##
  postgresql:
    enabled: true
    auth:
      username: bn_gitea
      password: ""
      database: bitnami_gitea
      existingSecret: ""
    architecture: standalone
    service:
      ports:
        postgresql: 5432
  
  ## External PostgreSQL configuration
  ## All of these values are only used when postgresql.enabled is set to false
  ## @param externalDatabase.host Database host
  ## @param externalDatabase.port Database port number
  ## @param externalDatabase.user Non-root username for JupyterHub
  ## @param externalDatabase.password Password for the non-root username for JupyterHub
  ## @param externalDatabase.database JupyterHub database name
  ## @param externalDatabase.existingSecret Name of an existing secret resource containing the database credentials
  ## @param externalDatabase.existingSecretPasswordKey Name of an existing secret key containing the database credentials
  ##
  externalDatabase:
    host: ""
    port: 5432
    user: postgres
    database: gitea
    password: ""
    existingSecret: ""
    existingSecretPasswordKey: "db-password"
  
  ## @section Volume Permissions parameters
  ##
  
  ## Init containers parameters:
  ## volumePermissions: Change the owner and group of the persistent volume mountpoint to runAsUser:fsGroup values from the securityContext section.
  ##
  volumePermissions:
    ## @param volumePermissions.enabled Enable init container that changes volume permissions in the data directory (for cases where the default k8s \`runAsUser\` and \`fsUser\` values do not work)
    ##
    enabled: false
    ## @param volumePermissions.image.registry Init container volume-permissions image registry
    ## @param volumePermissions.image.repository Init container volume-permissions image name
    ## @param volumePermissions.image.tag Init container volume-permissions image tag
    ## @param volumePermissions.image.digest Init container volume-permissions image digest in the way sha256:aa.... Please note this parameter, if set, will override the tag
    ## @param volumePermissions.image.pullPolicy Init container volume-permissions image pull policy
    ## @param volumePermissions.image.pullSecrets Specify docker-registry secret names as an array
    ##
    image:
      registry: docker.io
      repository: bitnami/os-shell
      tag: 11-debian-11-r22
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
    ## Init containers' resource requests and limits
    ## ref: https://kubernetes.io/docs/user-guide/compute-resources/
    ## We usually recommend not to specify default resources and to leave this as a conscious
    ## choice for the user. This also increases chances charts run on environments with little
    ## resources, such as Minikube. If you do want to specify resources, uncomment the following
    ## lines, adjust them as necessary, and remove the curly braces after 'resources:'.
    ## @param volumePermissions.resources.limits The resources limits for the container
    ## @param volumePermissions.resources.requests The requested resources for the container
    ##
    resources:
      ## Example:
      ## limits:
      ##    cpu: 100m
      ##    memory: 128Mi
      ##
      limits: {}
      ## Examples:
      ## requests:
      ##    cpu: 100m
      ##    memory: 128Mi
      ##
      requests: {}
  `);

const appliedValue = useRef(`{"adminEmail":"user@example.com","adminPassword":"","adminUsername":"bn_user","affinity":{name: "Mussa"},"appName":"example","args":[],"command":[],"commonAnnotations":{},"commonLabels":{},"containerPorts":{"http":3000,"ssh":2222},"containerSecurityContext":{"enabled":true,"runAsNonRoot":true,"runAsUser":1001},"customLivenessProbe":{},"customReadinessProbe":{},"customStartupProbe":{},"existingSecret":"","existingSecretKey":"admin-password","exposeSSH":true,"externalDatabase":{"database":"gitea","existingSecret":"","existingSecretPasswordKey":"db-password","host":"","password":"","port":5432,"user":"postgres"},"extraDeploy":[],"extraEnvVars":[],"extraEnvVarsCM":"","extraEnvVarsSecret":"","extraVolumeMounts":[],"extraVolumes":[],"fullnameOverride":"","global":{"imagePullSecrets":[],"imageRegistry":"","storageClass":""},"hostAliases":[],"image":{"debug":false,"digest":"","pullPolicy":"IfNotPresent","pullSecrets":[],"registry":"docker.io","repository":"bitnami/gitea","tag":"1.20.2-debian-11-r0"},"ingress":{"annotations":{},"apiVersion":"","enabled":false,"extraHosts":[],"extraPaths":[],"extraRules":[],"extraTls":[],"hostname":"gitea.local","ingressClassName":"","path":"/","pathType":"ImplementationSpecific","secrets":[],"selfSigned":false,"tls":false},"initContainers":[],"kubeVersion":"","lifecycleHooks":{},"livenessProbe":{"enabled":true,"failureThreshold":5,"initialDelaySeconds":600,"path":"/","periodSeconds":10,"successThreshold":1,"timeoutSeconds":5},"nameOverride":"","namespaceOverride":"","nodeAffinityPreset":{"key":"","type":"","values":[]},"nodeSelector":{},"persistence":{"accessModes":["ReadWriteOnce"],"annotations":{},"dataSource":{},"enabled":true,"existingClaim":"","hostPath":"","selector":{},"size":"8Gi","storageClass":""},"podAffinityPreset":"","podAnnotations":{},"podAntiAffinityPreset":"soft","podLabels":{},"podSecurityContext":{"enabled":true,"fsGroup":1001},"postgresql":{"architecture":"standalone","auth":{"database":"bitnami_gitea","existingSecret":"","password":"","username":"bn_gitea"},"enabled":true,"service":{"ports":{"postgresql":5432}}},"priorityClassName":"","readinessProbe":{"enabled":true,"failureThreshold":5,"initialDelaySeconds":30,"path":"/","periodSeconds":5,"successThreshold":1,"timeoutSeconds":1},"replicaCount":1,"resources":{"limits":{},"requests":{}},"rootURL":"","runMode":"prod","schedulerName":"","service":{"annotations":{},"clusterIP":"","externalTrafficPolicy":"Cluster","extraPorts":[],"loadBalancerIP":"","loadBalancerSourceRanges":[],"nodePorts":{"http":"","ssh":""},"ports":{"http":80,"ssh":22},"sessionAffinity":"None","sessionAffinityConfig":{},"type":"LoadBalancer"},"serviceAccount":{"annotations":{},"automountServiceAccountToken":true,"create":true,"name":""},"sidecars":[],"smtpExistingSecret":"","smtpHost":"","smtpPassword":"","smtpPort":"","smtpUser":"","startupProbe":{"enabled":false,"failureThreshold":5,"initialDelaySeconds":600,"path":"/","periodSeconds":11,"successThreshold":1,"timeoutSeconds":5},"tolerations":[],"topologySpreadConstraints":[],"updateStrategy":{"type":"RollingUpdate"},"volumePermissions":{"enabled":false,"image":{"digest":"","pullPolicy":"IfNotPresent","pullSecrets":[],"registry":"docker.io","repository":"bitnami/os-shell","tag":"11-debian-11-r22"},"resources":{"limits":{},"requests":{}}}}`);

  
    const [modifications, setModifications] = useState<jsonpatch.Operation[] | undefined>(
    undefined
  );
  const [values, setValues] = useState<string>(packageValue.current);

  useEffect(() => {
    if (
        packageValue.current &&
        appliedValue.current &&
        appliedValue.current !== "null" &&
      !modifications
    ) {
      // Calculate modifications from the default values
      const defaultValuesObj = parseToJS(packageValue.current);
      const deployedValuesObj = parseToJS(appliedValue.current);
      const newModifications = jsonpatch.compare(defaultValuesObj as any, deployedValuesObj as any);
      const values = applyModifications(newModifications, packageValue.current);
      setModifications(newModifications);
      setValues(values);
    }

  }, [packageValue.current, appliedValue.current, modifications]);

  const applyModifications = (mods: jsonpatch.Operation[], values: string) => {
    // And we add any possible change made to the original version
    if (mods.length) {
      mods.forEach((modification) => {
        if (modification.op === "remove") {
          values = deleteValue(values, modification.path);
        } else {
          // Transform the modification as a ReplaceOperation to read its value
          const value = (modification as jsonpatch.ReplaceOperation<any>).value;
          values = setValue(values, modification.path, value);
        }
      });
    }
    return values;
  };

  return (
    <>
    {packageValue.current && values && (<ReactMonacoEditor defaultValue={packageValue.current} appliedValue={values}/>)}
    </>
  );
}

export default ApplyModifications;