:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cepo'
.. highlight: bash

bioconductor-cepo
=================

.. conda:recipe:: bioconductor-cepo
   :replaces_section_title:
   :noindex:

   Cepo for the identification of differentially stable genes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Cepo.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cepo/meta.yaml>`_

   Defining the identity of a cell is fundamental to understand the heterogeneity of cells to various environmental signals and perturbations. We present Cepo\, a new method to explore cell identities from single\-cell RNA\-sequencing data using differential stability as a new metric to define cell identity genes. Cepo computes cell\-type specific gene statistics pertaining to differential stable gene expression.


.. conda:package:: bioconductor-cepo

   |downloads_bioconductor-cepo| |docker_bioconductor-cepo|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cepo

   and update with::

      conda update bioconductor-cepo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cepo:<tag>

   (see `bioconductor-cepo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cepo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cepo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cepo
   :alt:   (downloads)
.. |docker_bioconductor-cepo| image:: https://quay.io/repository/biocontainers/bioconductor-cepo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cepo
.. _`bioconductor-cepo/tags`: https://quay.io/repository/biocontainers/bioconductor-cepo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cepo";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cepo/README.html