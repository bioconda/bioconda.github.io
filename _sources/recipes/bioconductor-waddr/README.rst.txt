:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-waddr'
.. highlight: bash

bioconductor-waddr
==================

.. conda:recipe:: bioconductor-waddr
   :replaces_section_title:
   :noindex:

   Statistical tests for detecting differential distributions based on the 2\-Wasserstein distance

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/waddR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-waddr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-waddr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-waddr/meta.yaml>`_

   The package offers statistical tests based on the 2\-Wasserstein distance for detecting and characterizing differences between two distributions given in the form of samples. Functions for calculating the 2\-Wasserstein distance and testing for differential distributions are provided\, as welll as specifically tailored test for differential expression in single\-cell RNA sequencing data.


.. conda:package:: bioconductor-waddr

   |downloads_bioconductor-waddr| |docker_bioconductor-waddr|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-arm: ``>=1.10-1``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcpp: ``>=1.0.1``
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-waddr

   and update with::

      conda update bioconductor-waddr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-waddr:<tag>

   (see `bioconductor-waddr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-waddr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-waddr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-waddr
   :alt:   (downloads)
.. |docker_bioconductor-waddr| image:: https://quay.io/repository/biocontainers/bioconductor-waddr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-waddr
.. _`bioconductor-waddr/tags`: https://quay.io/repository/biocontainers/bioconductor-waddr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-waddr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-waddr/README.html