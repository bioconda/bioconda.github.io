:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-specl'
.. highlight: bash

bioconductor-specl
==================

.. conda:recipe:: bioconductor-specl
   :replaces_section_title:
   :noindex:

   specL \- Prepare Peptide Spectrum Matches for Use in Targeted Proteomics

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/specL.html
   :license: GPL-3
   :recipe: /`bioconductor-specl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specl/meta.yaml>`_
   :links: biotools: :biotools:`specl`

   provides a functions for generating spectra libraries that can be used for MRM SRM MS workflows in proteomics. The package provides a BiblioSpec reader\, a function which can add the protein information using a FASTA formatted amino acid file\, and an export method for using the created library in the Spectronaut software. The package is developed\, tested and used at the Functional Genomics Center Zurich \<http\:\/\/www.fgcz.ethz.ch\>.


.. conda:package:: bioconductor-specl

   |downloads_bioconductor-specl| |docker_bioconductor-specl|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dbi: ``>=0.5``
   :depends r-protviz: ``>=0.5``
   :depends r-rsqlite: ``>=1.1``
   :depends r-seqinr: ``>=3.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-specl

   and update with::

      conda update bioconductor-specl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-specl:<tag>

   (see `bioconductor-specl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-specl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-specl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-specl
   :alt:   (downloads)
.. |docker_bioconductor-specl| image:: https://quay.io/repository/biocontainers/bioconductor-specl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-specl
.. _`bioconductor-specl/tags`: https://quay.io/repository/biocontainers/bioconductor-specl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-specl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-specl/README.html