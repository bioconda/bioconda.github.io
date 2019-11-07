:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rariant'
.. highlight: bash

bioconductor-rariant
====================

.. conda:recipe:: bioconductor-rariant
   :replaces_section_title:

   Identification and Assessment of Single Nucleotide Variants through Shifts in Non\-Consensus Base Call Frequencies

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/Rariant.html
   :license: GPL-3
   :recipe: /`bioconductor-rariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rariant/meta.yaml>`_
   :links: biotools: :biotools:`rariant`, doi: :doi:`10.1038/nmeth.3252`

   The \'Rariant\' package identifies single nucleotide variants from sequencing data based on the difference of binomially distributed mismatch rates between matched samples.


.. conda:package:: bioconductor-rariant

   |downloads_bioconductor-rariant| |docker_bioconductor-rariant|

   :versions: 1.22.0-0, 1.20.0-1, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-exomecopy: >=1.32.0,<1.33.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-ggbio: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-somaticsignatures: >=2.22.0,<2.23.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rariant

   and update with::

      conda update bioconductor-rariant

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rariant:<tag>

   (see `bioconductor-rariant/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rariant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rariant.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rariant
   :alt:   (downloads)
.. |docker_bioconductor-rariant| image:: https://quay.io/repository/biocontainers/bioconductor-rariant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rariant
.. _`bioconductor-rariant/tags`: https://quay.io/repository/biocontainers/bioconductor-rariant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rariant/README.html