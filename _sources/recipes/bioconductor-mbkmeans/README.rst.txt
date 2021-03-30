:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbkmeans'
.. highlight: bash

bioconductor-mbkmeans
=====================

.. conda:recipe:: bioconductor-mbkmeans
   :replaces_section_title:
   :noindex:

   Mini\-batch K\-means Clustering for Single\-Cell RNA\-seq

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/mbkmeans.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-mbkmeans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbkmeans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbkmeans/meta.yaml>`_

   Implements the mini\-batch k\-means algorithm for large datasets\, including support for on\-disk data representation.


.. conda:package:: bioconductor-mbkmeans

   |downloads_bioconductor-mbkmeans| |docker_bioconductor-mbkmeans|

   :versions:
      
      

      ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-beachmat: ``>=2.6.0,<2.7.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-bluster: ``>=1.0.0,<1.1.0``
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-rhdf5lib: ``>=1.12.0,<1.13.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-benchmarkme: 
   :depends r-clusterr: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: ``>=0.7.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mbkmeans

   and update with::

      conda update bioconductor-mbkmeans

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbkmeans:<tag>

   (see `bioconductor-mbkmeans/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbkmeans| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbkmeans.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbkmeans
   :alt:   (downloads)
.. |docker_bioconductor-mbkmeans| image:: https://quay.io/repository/biocontainers/bioconductor-mbkmeans/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbkmeans
.. _`bioconductor-mbkmeans/tags`: https://quay.io/repository/biocontainers/bioconductor-mbkmeans?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbkmeans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbkmeans/README.html