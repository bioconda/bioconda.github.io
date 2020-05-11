:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dss'
.. highlight: bash

bioconductor-dss
================

.. conda:recipe:: bioconductor-dss
   :replaces_section_title:

   Dispersion shrinkage for sequencing data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/DSS.html
   :license: GPL
   :recipe: /`bioconductor-dss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss/meta.yaml>`_
   :links: biotools: :biotools:`dss`

   DSS is an R library performing differntial analysis for count\-based sequencing data. It detectes differentially expressed genes \(DEGs\) from RNA\-seq\, and differentially methylated loci or regions \(DML\/DMRs\) from bisulfite sequencing \(BS\-seq\). The core of DSS is a new dispersion shrinkage method for estimating the dispersion parameter from Gamma\-Poisson or Beta\-Binomial distributions.


.. conda:package:: bioconductor-dss

   |downloads_bioconductor-dss| |docker_bioconductor-dss|

   :versions: 2.36.0-0, 2.34.0-0, 2.32.0-1, 2.30.0-0, 2.28.0-0, 2.26.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-bsseq: >=1.24.0,<1.25.0
   :depends bioconductor-delayedarray: >=0.14.0,<0.15.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dss

   and update with::

      conda update bioconductor-dss

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dss:<tag>

   (see `bioconductor-dss/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dss
   :alt:   (downloads)
.. |docker_bioconductor-dss| image:: https://quay.io/repository/biocontainers/bioconductor-dss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dss
.. _`bioconductor-dss/tags`: https://quay.io/repository/biocontainers/bioconductor-dss?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dss/README.html