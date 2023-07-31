import React, { useState, useRef } from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';
import monaco from "monaco-editor/esm/vs/editor/editor.api";

interface AppProps {}

const ReactMonacoEditor: React.FC<AppProps> = () => {
  
    const code1 = useRef(`# Copyright VMware, Inc.
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
    affinity: {}
  `);  
  
  const code2 = useRef(`# Copyright VMware, Inc.
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
  replicaCount: 10
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
  affinity: {}`);
  const options = {
     renderSideBySide: true
  };
  const theme:string = "light";
  const deploymentEvent:string = "upgrade";

  const [usePackageDefaults, setUsePackageDefaults] = useState(
    deploymentEvent === "upgrade" ? false : true,
  );

  const editorDidMount = (editor: monaco.editor.IStandaloneDiffEditor, m: typeof monaco) => {
    // Add "go to the next change" action
    editor.addAction({
      id: "goToNextChange",
      label: "Go to the next change",
      keybindings: [m.KeyMod.Alt | m.KeyCode.KeyG],
      contextMenuGroupId: "9_cutcopypaste",
      run: () => {
        const lineChanges = editor?.getLineChanges() as monaco.editor.ILineChange[];
        lineChanges.some(lineChange => {
          const currentPosition = editor?.getPosition() as monaco.Position;
          if (currentPosition.lineNumber < lineChange.modifiedEndLineNumber) {
            // Set the cursor to the next change
            editor?.setPosition({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Scroll to the next change
            editor?.revealPositionInCenter({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Return true to stop the loop
            return true;
          }
          return false;
        });
      },
    });
    // Add "go to the previous change" action
    editor.addAction({
      id: "goToPreviousChange",
      label: "Go to the previous change",
      keybindings: [m.KeyMod.Alt | m.KeyCode.KeyF],
      contextMenuGroupId: "9_cutcopypaste",
      run: () => {
        const lineChanges = editor?.getLineChanges() as monaco.editor.ILineChange[];
        lineChanges.some(lineChange => {
          const currentPosition = editor?.getPosition() as monaco.Position;
          if (currentPosition.lineNumber > lineChange.modifiedEndLineNumber) {
            // Set the cursor to the next change
            editor?.setPosition({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Scroll to the next change
            editor?.revealPositionInCenter({
              lineNumber: lineChange.modifiedEndLineNumber,
              column: 1,
            });
            // Return true to stop the loop
            return true;
          }
          return false;
        });
      },
    });

    // Add the "toggle deployed/package default values" action
    if (deploymentEvent === "upgrade") {
      editor.addAction({
        id: "useDefaultsFalse",
        label: "Use default values",
        keybindings: [m.KeyMod.Alt | m.KeyCode.KeyD],
        contextMenuGroupId: "9_cutcopypaste",
        run: () => {
          setUsePackageDefaults(false);
        },
      });
      editor.addAction({
        id: "useDefaultsTrue",
        label: "Use package values",
        keybindings: [m.KeyMod.Alt | m.KeyCode.KeyV],
        contextMenuGroupId: "9_cutcopypaste",
        run: () => {
          setUsePackageDefaults(true);
        },
      });
    }
  };

const diffEditorOptions = {
    renderSideBySide: false,
    enableSplitViewResizing: true,
    automaticLayout: true,
  };

  return (
    <MonacoDiffEditor
      width="100vw"
      height="90vh"
      language="yaml"
      theme={theme === "dark" ? "vs-dark" : "light"}
      original={code1.current}
      value={code2.current}
      options={diffEditorOptions}
      editorDidMount={editorDidMount}
    />
  );
};

export default ReactMonacoEditor;
