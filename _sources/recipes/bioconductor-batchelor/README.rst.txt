:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-batchelor'
.. highlight: bash

bioconductor-batchelor
======================

.. conda:recipe:: bioconductor-batchelor
   :replaces_section_title:

   Implements a variety of methods for batch correction of single\-cell \(RNA sequencing\) data. This includes methods based on detecting mutually nearest neighbors as well as a simple sparsity\-preserving translation of the population means. Functions are also provided for global rescaling to remove differences in depth between batches\, and to perform a principal components analysis that is robust to differences in the numbers of cells across different batches.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/batchelor.html
   :license: GPL-3
   :recipe: /`bioconductor-batchelor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchelor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchelor/meta.yaml>`_

   


.. conda:package:: bioconductor-batchelor

   |downloads_bioconductor-batchelor| |docker_bioconductor-batchelor|

   :versions: 1.2.1-0, 1.0.1-0
   
   :depends bioconductor-beachmat: >=2.2.0,<2.3.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocneighbors: >=1.4.0,<1.5.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biocsingular: >=1.2.0,<1.3.0
   :depends bioconductor-delayedarray: >=0.12.0,<0.13.0
   :depends bioconductor-delayedmatrixstats: >=1.8.0,<1.9.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-scater: >=1.14.0,<1.15.0
   :depends bioconductor-singlecellexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-batchelor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-batchelor/README.html