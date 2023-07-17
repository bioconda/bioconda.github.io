:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ssnappy'
.. highlight: bash

bioconductor-ssnappy
====================

.. conda:recipe:: bioconductor-ssnappy
   :replaces_section_title:
   :noindex:

   Single Sample directioNAl Pathway Perturbation analYsis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/sSNAPPY.html
   :license: GPL-3
   :recipe: /`bioconductor-ssnappy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssnappy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ssnappy/meta.yaml>`_

   A single sample pathway perturbation testing method for RNA\-seq data. The method propagates changes in gene expression down gene\-set topologies to compute single\-sample directional pathway perturbation scores that reflect potential directions of changes.Perturbation scores can be used to test significance of pathway perturbation at both individual\-sample and treatment levels.


.. conda:package:: bioconductor-ssnappy

   |downloads_bioconductor-ssnappy| |docker_bioconductor-ssnappy|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-graphite: ``>=1.46.0,<1.47.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=1.1``
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ssnappy

   and update with::

      conda update bioconductor-ssnappy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ssnappy:<tag>

   (see `bioconductor-ssnappy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ssnappy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ssnappy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ssnappy
   :alt:   (downloads)
.. |docker_bioconductor-ssnappy| image:: https://quay.io/repository/biocontainers/bioconductor-ssnappy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ssnappy
.. _`bioconductor-ssnappy/tags`: https://quay.io/repository/biocontainers/bioconductor-ssnappy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ssnappy";
        var versions = ["1.4.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ssnappy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ssnappy/README.html