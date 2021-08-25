:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-batchelor'
.. highlight: bash

bioconductor-batchelor
======================

.. conda:recipe:: bioconductor-batchelor
   :replaces_section_title:
   :noindex:

   Single\-Cell Batch Correction Methods

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/batchelor.html
   :license: GPL-3
   :recipe: /`bioconductor-batchelor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchelor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchelor/meta.yaml>`_

   Implements a variety of methods for batch correction of single\-cell \(RNA sequencing\) data. This includes methods based on detecting mutually nearest neighbors\, as well as several efficient variants of linear regression of the log\-expression values. Functions are also provided to perform global rescaling to remove differences in depth between batches\, and to perform a principal components analysis that is robust to differences in the numbers of cells across batches.


.. conda:package:: bioconductor-batchelor

   |downloads_bioconductor-batchelor| |docker_bioconductor-batchelor|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-beachmat: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocneighbors: ``>=1.10.0,<1.11.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biocsingular: ``>=1.8.0,<1.9.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-residualmatrix: ``>=1.2.0,<1.3.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-scaledmatrix: ``>=1.0.0,<1.1.0``
   :depends bioconductor-scuttle: ``>=1.2.0,<1.3.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-batchelor

   and update with::

      conda update bioconductor-batchelor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-batchelor:<tag>

   (see `bioconductor-batchelor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-batchelor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-batchelor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-batchelor
   :alt:   (downloads)
.. |docker_bioconductor-batchelor| image:: https://quay.io/repository/biocontainers/bioconductor-batchelor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-batchelor
.. _`bioconductor-batchelor/tags`: https://quay.io/repository/biocontainers/bioconductor-batchelor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-batchelor";
        var versions = ["1.8.0","1.6.2","1.6.0","1.4.0","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-batchelor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-batchelor/README.html