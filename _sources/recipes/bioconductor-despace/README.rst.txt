:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-despace'
.. highlight: bash

bioconductor-despace
====================

.. conda:recipe:: bioconductor-despace
   :replaces_section_title:
   :noindex:

   DESpace\: a framework to discover spatially variable genes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DESpace.html
   :license: GPL-3
   :recipe: /`bioconductor-despace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-despace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-despace/meta.yaml>`_

   Intuitive framework for identifying spatially variable genes \(SVGs\) via edgeR\, a popular method for performing differential expression analyses. Based on pre\-annotated spatial clusters as summarized spatial information\, DESpace models gene expression using a negative binomial \(NB\)\, via edgeR\, with spatial clusters as covariates. SVGs are then identified by testing the significance of spatial clusters. The method is flexible and robust\, and is faster than the most SV methods. Furthermore\, to the best of our knowledge\, it is the only SV approach that allows\: \- performing a SV test on each individual spatial cluster\, hence identifying the key regions of the tissue affected by spatial variability\; \- jointly fitting multiple samples\, targeting genes with consistent spatial patterns across replicates.


.. conda:package:: bioconductor-despace

   |downloads_bioconductor-despace| |docker_bioconductor-despace|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-scales: 
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

      mamba install bioconductor-despace

   and update with::

      mamba update bioconductor-despace

  To create a new environment, run::

      mamba create --name myenvname bioconductor-despace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-despace:<tag>

   (see `bioconductor-despace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-despace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-despace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-despace
   :alt:   (downloads)
.. |docker_bioconductor-despace| image:: https://quay.io/repository/biocontainers/bioconductor-despace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-despace
.. _`bioconductor-despace/tags`: https://quay.io/repository/biocontainers/bioconductor-despace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-despace";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-despace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-despace/README.html