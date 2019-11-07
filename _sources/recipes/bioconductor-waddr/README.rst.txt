:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-waddr'
.. highlight: bash

bioconductor-waddr
==================

.. conda:recipe:: bioconductor-waddr
   :replaces_section_title:

   Statistical Test for Detecting Differential Distributions Based on the Wasserstein Metric

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/waddR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-waddr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-waddr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-waddr/meta.yaml>`_

   Wasserstein distance based statistical test for detecting and describing differential distributions in one\-dimensional data. Functions for wasserstein distance calculation\, differential distribution testing\, and a specialized test for differential expression in scRNA data are provided.


.. conda:package:: bioconductor-waddr

   |downloads_bioconductor-waddr| |docker_bioconductor-waddr|

   :versions: 1.0.0-0
   
   :depends bioconductor-biocfilecache: >=1.10.0,<1.11.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-singlecellexperiment: >=1.8.0,<1.9.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-arm: >=1.10-1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-eva: >=0.2.5
   :depends r-rcpp: >=1.0.1
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