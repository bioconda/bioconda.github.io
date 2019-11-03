:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dss'
.. highlight: bash

bioconductor-dss
================

.. conda:recipe:: bioconductor-dss
   :replaces_section_title:

   DSS is an R library performing differntial analysis for count\-based sequencing data. It detectes differentially expressed genes \(DEGs\) from RNA\-seq\, and differentially methylated loci or regions \(DML\/DMRs\) from bisulfite sequencing \(BS\-seq\). The core of DSS is a new dispersion shrinkage method for estimating the dispersion parameter from Gamma\-Poisson or Beta\-Binomial distributions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/DSS.html
   :license: GPL
   :recipe: /`bioconductor-dss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dss/meta.yaml>`_
   :links: biotools: :biotools:`dss`

   


.. conda:package:: bioconductor-dss

   |downloads_bioconductor-dss| |docker_bioconductor-dss|

   :versions: 2.34.0-0, 2.32.0-1, 2.30.0-0, 2.28.0-0, 2.26.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-bsseq: >=1.22.0,<1.23.0
   :depends bioconductor-delayedarray: >=0.12.0,<0.13.0
   :depends r-base: >=3.6,<3.7.0a0
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