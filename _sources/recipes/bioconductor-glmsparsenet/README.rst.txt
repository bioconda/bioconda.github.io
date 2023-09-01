:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-glmsparsenet'
.. highlight: bash

bioconductor-glmsparsenet
=========================

.. conda:recipe:: bioconductor-glmsparsenet
   :replaces_section_title:
   :noindex:

   Network Centrality Metrics for Elastic\-Net Regularized Models

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/glmSparseNet.html
   :license: GPL-3
   :recipe: /`bioconductor-glmsparsenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glmsparsenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glmsparsenet/meta.yaml>`_

   glmSparseNet is an R\-package that generalizes sparse regression models when the features \(e.g. genes\) have a graph structure \(e.g. protein\-protein interactions\)\, by including network\-based regularizers. glmSparseNet uses the glmnet R\-package\, by including centrality measures of the network as penalty weights in the regularization. The current version implements regularization based on node degree\, i.e. the strength and\/or number of its associated edges\, either by promoting hubs in the solution or orphan genes in the solution. All the glmnet distribution families are supported\, namely \"gaussian\"\, \"poisson\"\, \"binomial\"\, \"multinomial\"\, \"cox\"\, and \"mgaussian\".


.. conda:package:: bioconductor-glmsparsenet

   |downloads_bioconductor-glmsparsenet| |docker_bioconductor-glmsparsenet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-futile.logger: 
   :depends r-futile.options: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-glue: 
   :depends r-httr: 
   :depends r-matrix: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-survminer: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-glmsparsenet

   and update with::

      mamba update bioconductor-glmsparsenet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-glmsparsenet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-glmsparsenet:<tag>

   (see `bioconductor-glmsparsenet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-glmsparsenet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-glmsparsenet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-glmsparsenet
   :alt:   (downloads)
.. |docker_bioconductor-glmsparsenet| image:: https://quay.io/repository/biocontainers/bioconductor-glmsparsenet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-glmsparsenet
.. _`bioconductor-glmsparsenet/tags`: https://quay.io/repository/biocontainers/bioconductor-glmsparsenet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-glmsparsenet";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-glmsparsenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-glmsparsenet/README.html