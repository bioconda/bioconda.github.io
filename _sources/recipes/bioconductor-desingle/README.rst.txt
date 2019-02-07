.. title:: Package Recipe 'bioconductor-desingle'
.. highlight: bash


bioconductor-desingle
=====================

.. conda:recipe:: bioconductor-desingle
   :replaces_section_title:

   DEsingle is an R package for differential expression \(DE\) analysis of single\-cell RNA\-seq \(scRNA\-seq\) data. It defines and detects 3 types of differentially expressed genes between two groups of single cells\, with regard to different expression status \(DEs\)\, differential expression abundance \(DEa\)\, and general differential expression \(DEg\). DEsingle employs Zero\-Inflated Negative Binomial model to estimate the proportion of real and dropout zeros and to define and detect the 3 types of DE genes. Results showed that DEsingle outperforms existing methods for scRNA\-seq DE analysis\, and can reveal different types of DE genes that are enriched in different biological functions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DEsingle.html
   :license: GPL-2
   :recipe: /`bioconductor-desingle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-desingle/meta.yaml>`_

   


.. conda:package:: bioconductor-desingle

   |downloads_bioconductor-desingle| |docker_bioconductor-desingle|

   :versions: 1.2.1

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bbmle` >=1.0.18 :conda:package:`r-gamlss` >=4.4-0 :conda:package:`r-mass` >=7.3-45 :conda:package:`r-matrix` >=1.2-14 :conda:package:`r-maxlik` >=1.3-4 :conda:package:`r-pscl` >=1.4.9 :conda:package:`r-vgam` >=1.0-2 

   :required~by: |required_by_bioconductor-desingle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-desingle

   and update with::

      conda update bioconductor-desingle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-desingle


.. |required_by_bioconductor-desingle| conda:required_by:: bioconductor-desingle
.. |downloads_bioconductor-desingle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-desingle.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-desingle| image:: https://quay.io/repository/biocontainers/bioconductor-desingle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-desingle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-desingle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-desingle/README.html

