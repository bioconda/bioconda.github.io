.. title:: Package Recipe 'bioconductor-ichip'
.. highlight: bash


bioconductor-ichip
==================

.. conda:recipe:: bioconductor-ichip
   :replaces_section_title:

   Hidden Ising models are implemented to identify enriched genomic regions in ChIP\-chip data.  They can be used to analyze the data from multiple platforms \(e.g.\, Affymetrix\, Agilent\, and NimbleGen\)\, and the data with single to multiple replicates.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iChip.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ichip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ichip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ichip/meta.yaml>`_
   :links: biotools: :biotools:`ichip`, doi: :doi:`10.1093/bioinformatics/btq032`

   


.. conda:package:: bioconductor-ichip

   |downloads_bioconductor-ichip| |docker_bioconductor-ichip|

   :versions: 1.36.0, 1.34.0, 1.32.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-ichip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ichip

   and update with::

      conda update bioconductor-ichip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ichip


.. |required_by_bioconductor-ichip| conda:required_by:: bioconductor-ichip
.. |downloads_bioconductor-ichip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ichip.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ichip| image:: https://quay.io/repository/biocontainers/bioconductor-ichip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ichip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ichip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ichip/README.html

