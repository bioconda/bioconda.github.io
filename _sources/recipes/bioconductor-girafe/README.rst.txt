.. title:: Package Recipe 'bioconductor-girafe'
.. highlight: bash


bioconductor-girafe
===================

.. conda:recipe:: bioconductor-girafe
   :replaces_section_title:

   The package \'girafe\' deals with the genome\-level representation of aligned reads from next\-generation sequencing data. It contains an object class for enabling a detailed description of genome intervals with aligned reads and functions for comparing\, visualising\, exporting and working with such intervals and the aligned reads. As such\, the package interacts with and provides a link between the packages ShortRead\, IRanges and genomeIntervals.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/girafe.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-girafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-girafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-girafe/meta.yaml>`_
   :links: biotools: :biotools:`girafe`

   


.. conda:package:: bioconductor-girafe

   |downloads_bioconductor-girafe| |docker_bioconductor-girafe|

   :versions: 1.34.0, 1.32.0, 1.30.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeintervals` >=1.38.0,<1.39.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-intervals` >=0.13.1 

   :required~by: |required_by_bioconductor-girafe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-girafe

   and update with::

      conda update bioconductor-girafe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-girafe


.. |required_by_bioconductor-girafe| conda:required_by:: bioconductor-girafe
.. |downloads_bioconductor-girafe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-girafe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-girafe| image:: https://quay.io/repository/biocontainers/bioconductor-girafe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-girafe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-girafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-girafe/README.html

