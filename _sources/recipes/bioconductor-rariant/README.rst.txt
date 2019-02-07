.. title:: Package Recipe 'bioconductor-rariant'
.. highlight: bash


bioconductor-rariant
====================

.. conda:recipe:: bioconductor-rariant
   :replaces_section_title:

   The \'Rariant\' package identifies single nucleotide variants from sequencing data based on the difference of binomially distributed mismatch rates between matched samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Rariant.html
   :license: GPL-3
   :recipe: /`bioconductor-rariant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rariant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rariant/meta.yaml>`_
   :links: biotools: :biotools:`rariant`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rariant

   |downloads_bioconductor-rariant| |docker_bioconductor-rariant|

   :versions: 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-exomecopy` >=1.28.0,<1.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-somaticsignatures` >=2.18.0,<2.19.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-reshape2`  :conda:package:`r-shiny`  :conda:package:`r-vgam`  

   :required~by: |required_by_bioconductor-rariant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rariant

   and update with::

      conda update bioconductor-rariant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rariant


.. |required_by_bioconductor-rariant| conda:required_by:: bioconductor-rariant
.. |downloads_bioconductor-rariant| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rariant.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rariant| image:: https://quay.io/repository/biocontainers/bioconductor-rariant/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rariant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rariant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rariant/README.html

