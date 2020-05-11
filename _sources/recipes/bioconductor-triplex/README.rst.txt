:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-triplex'
.. highlight: bash

bioconductor-triplex
====================

.. conda:recipe:: bioconductor-triplex
   :replaces_section_title:

   Search and visualize intramolecular triplex\-forming sequences in DNA

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/triplex.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-triplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-triplex/meta.yaml>`_
   :links: biotools: :biotools:`triplex`

   This package provides functions for identification and visualization of potential intramolecular triplex patterns in DNA sequence. The main functionality is to detect the positions of subsequences capable of folding into an intramolecular triplex \(H\-DNA\) in a much larger sequence. The potential H\-DNA \(triplexes\) should be made of as many cannonical nucleotide triplets as possible. The package includes visualization showing the exact base\-pairing in 1D\, 2D or 3D.


.. conda:package:: bioconductor-triplex

   |downloads_bioconductor-triplex| |docker_bioconductor-triplex|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-xvector: >=0.28.0,<0.29.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-triplex

   and update with::

      conda update bioconductor-triplex

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-triplex:<tag>

   (see `bioconductor-triplex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-triplex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-triplex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-triplex
   :alt:   (downloads)
.. |docker_bioconductor-triplex| image:: https://quay.io/repository/biocontainers/bioconductor-triplex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-triplex
.. _`bioconductor-triplex/tags`: https://quay.io/repository/biocontainers/bioconductor-triplex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-triplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-triplex/README.html