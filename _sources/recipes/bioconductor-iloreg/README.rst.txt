:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iloreg'
.. highlight: bash

bioconductor-iloreg
===================

.. conda:recipe:: bioconductor-iloreg
   :replaces_section_title:
   :noindex:

   ILoReg\: a tool for high\-resolution cell population identification from scRNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ILoReg.html
   :license: GPL-3
   :recipe: /`bioconductor-iloreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iloreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iloreg/meta.yaml>`_

   ILoReg is a tool for identification of cell populations from scRNA\-seq data. In particular\, ILoReg is useful for finding cell populations with subtle transcriptomic differences. The method utilizes a self\-supervised learning method\, called Iteratitive Clustering Projection \(ICP\)\, to find cluster probabilities\, which are used in noise reduction prior to PCA and the subsequent hierarchical clustering and t\-SNE steps. Additionally\, functions for differential expression analysis to find gene markers for the populations and gene expression visualization are provided.


.. conda:package:: bioconductor-iloreg

   |downloads_bioconductor-iloreg| |docker_bioconductor-iloreg|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-aricode: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-dendextend: 
   :depends r-desctools: 
   :depends r-dorng: 
   :depends r-dosnow: 
   :depends r-dplyr: 
   :depends r-fastcluster: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-liblinear: 
   :depends r-matrix: 
   :depends r-paralleldist: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rspectra: 
   :depends r-rtsne: 
   :depends r-scales: 
   :depends r-sparsem: 
   :depends r-umap: 
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

      mamba install bioconductor-iloreg

   and update with::

      mamba update bioconductor-iloreg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iloreg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iloreg:<tag>

   (see `bioconductor-iloreg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iloreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iloreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iloreg
   :alt:   (downloads)
.. |docker_bioconductor-iloreg| image:: https://quay.io/repository/biocontainers/bioconductor-iloreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iloreg
.. _`bioconductor-iloreg/tags`: https://quay.io/repository/biocontainers/bioconductor-iloreg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iloreg";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iloreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iloreg/README.html