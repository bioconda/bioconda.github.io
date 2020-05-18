:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqpattern'
.. highlight: bash

bioconductor-seqpattern
=======================

.. conda:recipe:: bioconductor-seqpattern
   :replaces_section_title:

   Visualising oligonucleotide patterns and motif occurrences across a set of sorted sequences

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/seqPattern.html
   :license: GPL-3
   :recipe: /`bioconductor-seqpattern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern/meta.yaml>`_
   :links: biotools: :biotools:`seqpattern`, doi: :doi:`10.1038/nmeth.3252`

   Visualising oligonucleotide patterns and sequence motifs occurrences across a large set of sequences centred at a common reference point and sorted by a user defined feature.


.. conda:package:: bioconductor-seqpattern

   |downloads_bioconductor-seqpattern| |docker_bioconductor-seqpattern|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.2.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-kernsmooth: 
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqpattern

   and update with::

      conda update bioconductor-seqpattern

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqpattern:<tag>

   (see `bioconductor-seqpattern/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqpattern| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqpattern.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqpattern
   :alt:   (downloads)
.. |docker_bioconductor-seqpattern| image:: https://quay.io/repository/biocontainers/bioconductor-seqpattern/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqpattern
.. _`bioconductor-seqpattern/tags`: https://quay.io/repository/biocontainers/bioconductor-seqpattern?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqpattern/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqpattern/README.html