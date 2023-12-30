:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hippo'
.. highlight: bash

bioconductor-hippo
==================

.. conda:recipe:: bioconductor-hippo
   :replaces_section_title:
   :noindex:

   Heterogeneity\-Induced Pre\-Processing tOol

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HIPPO.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-hippo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hippo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hippo/meta.yaml>`_

   For scRNA\-seq data\, it selects features and clusters the cells simultaneously for single\-cell UMI data. It has a novel feature selection method using the zero inflation instead of gene variance\, and computationally faster than other existing methods since it only relies on PCA\+Kmeans rather than graph\-clustering or consensus clustering.


.. conda:package:: bioconductor-hippo

   |downloads_bioconductor-hippo| |docker_bioconductor-hippo|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-irlba: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-umap: 
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

      mamba install bioconductor-hippo

   and update with::

      mamba update bioconductor-hippo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hippo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hippo:<tag>

   (see `bioconductor-hippo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hippo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hippo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hippo
   :alt:   (downloads)
.. |docker_bioconductor-hippo| image:: https://quay.io/repository/biocontainers/bioconductor-hippo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hippo
.. _`bioconductor-hippo/tags`: https://quay.io/repository/biocontainers/bioconductor-hippo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hippo";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hippo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hippo/README.html