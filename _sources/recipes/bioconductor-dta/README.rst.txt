:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dta'
.. highlight: bash

bioconductor-dta
================

.. conda:recipe:: bioconductor-dta
   :replaces_section_title:

   Dynamic Transcriptome Analysis \(DTA\) can monitor the cellular response to perturbations with higher sensitivity and temporal resolution than standard transcriptomics. The package implements the underlying kinetic modeling approach capable of the precise determination of synthesis\- and decay rates from individual microarray or RNAseq measurements.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DTA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dta/meta.yaml>`_
   :links: biotools: :biotools:`dta`, doi: :doi:`10.1093/bioinformatics/bts052`

   


.. conda:package:: bioconductor-dta

   |downloads_bioconductor-dta| |docker_bioconductor-dta|

   :versions: 2.28.0-0, 2.26.0-0, 2.24.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-lsd: 
   :depends r-scatterplot3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dta

   and update with::

      conda update bioconductor-dta

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dta:<tag>

   (see `bioconductor-dta/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dta
   :alt:   (downloads)
.. |docker_bioconductor-dta| image:: https://quay.io/repository/biocontainers/bioconductor-dta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dta
.. _`bioconductor-dta/tags`: https://quay.io/repository/biocontainers/bioconductor-dta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dta/README.html