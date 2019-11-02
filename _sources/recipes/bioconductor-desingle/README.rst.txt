:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-desingle'
.. highlight: bash

bioconductor-desingle
=====================

.. conda:recipe:: bioconductor-desingle
   :replaces_section_title:

   DEsingle is an R package for differential expression \(DE\) analysis of single\-cell RNA\-seq \(scRNA\-seq\) data. It defines and detects 3 types of differentially expressed genes between two groups of single cells\, with regard to different expression status \(DEs\)\, differential expression abundance \(DEa\)\, and general differential expression \(DEg\). DEsingle employs Zero\-Inflated Negative Binomial model to estimate the proportion of real and dropout zeros and to define and detect the 3 types of DE genes. Results showed that DEsingle outperforms existing methods for scRNA\-seq DE analysis\, and can reveal different types of DE genes that are enriched in different biological functions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DEsingle.html
   :license: GPL-2
   :recipe: /`bioconductor-desingle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle/meta.yaml>`_

   


.. conda:package:: bioconductor-desingle

   |downloads_bioconductor-desingle| |docker_bioconductor-desingle|

   :versions: 1.6.0-0, 1.4.0-1, 1.4.0-0, 1.2.1-0
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bbmle: >=1.0.18
   :depends r-gamlss: >=4.4-0
   :depends r-mass: >=7.3-45
   :depends r-matrix: >=1.2-14
   :depends r-maxlik: >=1.3-4
   :depends r-pscl: >=1.4.9
   :depends r-vgam: >=1.0-2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-desingle

   and update with::

      conda update bioconductor-desingle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-desingle:<tag>

   (see `bioconductor-desingle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-desingle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desingle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-desingle
   :alt:   (downloads)
.. |docker_bioconductor-desingle| image:: https://quay.io/repository/biocontainers/bioconductor-desingle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desingle
.. _`bioconductor-desingle/tags`: https://quay.io/repository/biocontainers/bioconductor-desingle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desingle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desingle/README.html