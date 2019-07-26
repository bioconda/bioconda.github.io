:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqpattern'
.. highlight: bash

bioconductor-seqpattern
=======================

.. conda:recipe:: bioconductor-seqpattern
   :replaces_section_title:

   Visualising oligonucleotide patterns and sequence motifs occurrences across a large set of sequences centred at a common reference point and sorted by a user defined feature.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/seqPattern.html
   :license: GPL-3
   :recipe: /`bioconductor-seqpattern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqpattern/meta.yaml>`_
   :links: biotools: :biotools:`seqpattern`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-seqpattern

   |downloads_bioconductor-seqpattern| |docker_bioconductor-seqpattern|

   :versions: 1.16.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.2.0-0
   
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends r-base: >=3.6,<3.7.0a0
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