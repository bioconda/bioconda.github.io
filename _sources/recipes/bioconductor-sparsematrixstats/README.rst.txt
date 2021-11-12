:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsematrixstats'
.. highlight: bash

bioconductor-sparsematrixstats
==============================

.. conda:recipe:: bioconductor-sparsematrixstats
   :replaces_section_title:
   :noindex:

   Summary Statistics for Rows and Columns of Sparse Matrices

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/sparseMatrixStats.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sparsematrixstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsematrixstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsematrixstats/meta.yaml>`_

   High performance functions for row and column operations on sparse matrices. For example\: col \/ rowMeans2\, col \/ rowMedians\, col \/ rowVars etc. Currently\, the optimizations are limited to data in the column sparse format. This package is inspired by the matrixStats package by Henrik Bengtsson.


.. conda:package:: bioconductor-sparsematrixstats

   |downloads_bioconductor-sparsematrixstats| |docker_bioconductor-sparsematrixstats|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-matrixgenerics: ``>=1.6.0,<1.7.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-matrixstats: ``>=0.60.0``
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sparsematrixstats

   and update with::

      conda update bioconductor-sparsematrixstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sparsematrixstats:<tag>

   (see `bioconductor-sparsematrixstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sparsematrixstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsematrixstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsematrixstats
   :alt:   (downloads)
.. |docker_bioconductor-sparsematrixstats| image:: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats
.. _`bioconductor-sparsematrixstats/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsematrixstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsematrixstats";
        var versions = ["1.6.0","1.4.0","1.2.1","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsematrixstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsematrixstats/README.html