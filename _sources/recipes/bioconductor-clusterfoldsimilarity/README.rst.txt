:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterfoldsimilarity'
.. highlight: bash

bioconductor-clusterfoldsimilarity
==================================

.. conda:recipe:: bioconductor-clusterfoldsimilarity
   :replaces_section_title:
   :noindex:

   Calculate similarity of clusters from different single cell samples using foldchanges

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ClusterFoldSimilarity.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterfoldsimilarity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterfoldsimilarity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterfoldsimilarity/meta.yaml>`_

   This package calculates a similarity coefficient using the fold changes of shared features \(e.g. genes\) among clusters of different samples\/batches\/datasets. The similarity coefficient is calculated using the dot\-product \(Hadamard product\) of every pairwise combination of Fold Changes between a source cluster i of sample\/dataset n and all the target clusters j in sample\/dataset m


.. conda:package:: bioconductor-clusterfoldsimilarity

   |downloads_bioconductor-clusterfoldsimilarity| |docker_bioconductor-clusterfoldsimilarity|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-seuratobject: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-clusterfoldsimilarity

   and update with::

      mamba update bioconductor-clusterfoldsimilarity

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clusterfoldsimilarity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterfoldsimilarity:<tag>

   (see `bioconductor-clusterfoldsimilarity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterfoldsimilarity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterfoldsimilarity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterfoldsimilarity
   :alt:   (downloads)
.. |docker_bioconductor-clusterfoldsimilarity| image:: https://quay.io/repository/biocontainers/bioconductor-clusterfoldsimilarity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterfoldsimilarity
.. _`bioconductor-clusterfoldsimilarity/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterfoldsimilarity?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clusterfoldsimilarity";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterfoldsimilarity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterfoldsimilarity/README.html