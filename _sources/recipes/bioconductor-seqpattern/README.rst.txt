.. title:: Package Recipe 'bioconductor-seqpattern'
.. highlight: bash


bioconductor-seqpattern
=======================

.. conda:recipe:: bioconductor-seqpattern
   :replaces_section_title:

   Visualising oligonucleotide patterns and sequence motifs occurrences across a large set of sequences centred at a common reference point and sorted by a user defined feature.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/seqPattern.html
   :license: GPL-3
   :recipe: /`bioconductor-seqpattern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern/meta.yaml>`_
   :links: biotools: :biotools:`seqpattern`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-seqpattern

   |downloads_bioconductor-seqpattern| |docker_bioconductor-seqpattern|

   :versions: 1.14.0, 1.12.0, 1.10.0, 1.8.0, 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-kernsmooth`  :conda:package:`r-plotrix`  

   :required~by: |required_by_bioconductor-seqpattern|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqpattern

   and update with::

      conda update bioconductor-seqpattern

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqpattern


.. |required_by_bioconductor-seqpattern| conda:required_by:: bioconductor-seqpattern
.. |downloads_bioconductor-seqpattern| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqpattern.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqpattern| image:: https://quay.io/repository/biocontainers/bioconductor-seqpattern/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqpattern







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqpattern/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqpattern/README.html

