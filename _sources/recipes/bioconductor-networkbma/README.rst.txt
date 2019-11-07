:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-networkbma'
.. highlight: bash

bioconductor-networkbma
=======================

.. conda:recipe:: bioconductor-networkbma
   :replaces_section_title:

   Regression\-based network inference using Bayesian Model Averaging

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/networkBMA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-networkbma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-networkbma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-networkbma/meta.yaml>`_
   :links: biotools: :biotools:`networkbma`, doi: :doi:`10.1186/1752-0509-8-47`

   An extension of Bayesian Model Averaging \(BMA\) for network construction using time series gene expression data. Includes assessment functions and sample test data.


.. conda:package:: bioconductor-networkbma

   |downloads_bioconductor-networkbma| |docker_bioconductor-networkbma|

   :versions: 2.26.0-0, 2.24.0-1, 2.24.0-0, 2.22.0-0, 2.20.0-0, 2.18.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bh: 
   :depends r-bma: 
   :depends r-leaps: 
   :depends r-rcpp: >=0.10.3
   :depends r-rcpparmadillo: >=0.3.810.2
   :depends r-rcppeigen: >=0.3.1.2.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-networkbma

   and update with::

      conda update bioconductor-networkbma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-networkbma:<tag>

   (see `bioconductor-networkbma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-networkbma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-networkbma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-networkbma
   :alt:   (downloads)
.. |docker_bioconductor-networkbma| image:: https://quay.io/repository/biocontainers/bioconductor-networkbma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-networkbma
.. _`bioconductor-networkbma/tags`: https://quay.io/repository/biocontainers/bioconductor-networkbma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-networkbma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-networkbma/README.html