:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytokernel'
.. highlight: bash

bioconductor-cytokernel
=======================

.. conda:recipe:: bioconductor-cytokernel
   :replaces_section_title:
   :noindex:

   Differential expression using kernel\-based score test

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cytoKernel.html
   :license: GPL-3
   :recipe: /`bioconductor-cytokernel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytokernel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytokernel/meta.yaml>`_

   cytoKernel implements a kernel\-based score test to identify differentially expressed features in high\-dimensional biological experiments. This approach can be applied across many different high\-dimensional biological data including gene expression data and dimensionally reduced cytometry\-based marker expression data. In this R package\, we implement functions that compute the feature\-wise p values and their corresponding adjusted p values. Additionally\, it also computes the feature\-wise shrunk effect sizes and their corresponding shrunken effect size. Further\, it calculates the percent of differentially expressed features and plots user\-friendly heatmap of the top differentially expressed features on the rows and samples on the columns.


.. conda:package:: bioconductor-cytokernel

   |downloads_bioconductor-cytokernel| |docker_bioconductor-cytokernel|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends __osx: ``>=10.9``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-ashr: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rcpp: 
   :depends r-rlang: 
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

      mamba install bioconductor-cytokernel

   and update with::

      mamba update bioconductor-cytokernel

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytokernel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytokernel:<tag>

   (see `bioconductor-cytokernel/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytokernel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytokernel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytokernel
   :alt:   (downloads)
.. |docker_bioconductor-cytokernel| image:: https://quay.io/repository/biocontainers/bioconductor-cytokernel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytokernel
.. _`bioconductor-cytokernel/tags`: https://quay.io/repository/biocontainers/bioconductor-cytokernel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytokernel";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytokernel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytokernel/README.html