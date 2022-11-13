:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pareg'
.. highlight: bash

bioconductor-pareg
==================

.. conda:recipe:: bioconductor-pareg
   :replaces_section_title:
   :noindex:

   Pathway enrichment using a regularized regression approach

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/pareg.html
   :license: GPL-3
   :recipe: /`bioconductor-pareg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pareg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pareg/meta.yaml>`_

   Compute pathway enrichment scores while accounting for term\-term relations. This package uses a regularized multiple linear regression to regress differential expression p\-values obtained from multi\-condition experiments on a pathway membership matrix. By doing so\, it is able to incorporate additional biological knowledge into the enrichment analysis and to estimate pathway enrichment scores more robustly.


.. conda:package:: bioconductor-pareg

   |downloads_bioconductor-pareg| |docker_bioconductor-pareg|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-dose: ``>=3.24.0,<3.25.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-furrr: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-glue: 
   :depends r-igraph: 
   :depends r-keras: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixlaplacian: 
   :depends r-nloptr: 
   :depends r-progress: 
   :depends r-proxy: 
   :depends r-purrr: 
   :depends r-reticulate: 
   :depends r-rlang: 
   :depends r-shadowtext: 
   :depends r-stringr: 
   :depends r-tensorflow: ``>=2.2.0``
   :depends r-tfprobability: ``>=0.10.0``
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pareg

   and update with::

      conda update bioconductor-pareg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pareg:<tag>

   (see `bioconductor-pareg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pareg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pareg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pareg
   :alt:   (downloads)
.. |docker_bioconductor-pareg| image:: https://quay.io/repository/biocontainers/bioconductor-pareg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pareg
.. _`bioconductor-pareg/tags`: https://quay.io/repository/biocontainers/bioconductor-pareg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pareg";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pareg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pareg/README.html