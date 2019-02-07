.. title:: Package Recipe 'bioconductor-specl'
.. highlight: bash


bioconductor-specl
==================

.. conda:recipe:: bioconductor-specl
   :replaces_section_title:

   provides a function for generating spectra libraries which can be used for MRM SRM MS workflows in proteomics. The package provides a BiblioSpec reader\, a function which can add the protein information using a FASTA formatted amino acid file\, and an export method for using the created library in the Spectronaut software.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/specL.html
   :license: GPL-3
   :recipe: /`bioconductor-specl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specl/meta.yaml>`_
   :links: biotools: :biotools:`specl`

   


.. conda:package:: bioconductor-specl

   |downloads_bioconductor-specl| |docker_bioconductor-specl|

   :versions: 1.16.1, 1.14.0, 1.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi` >=0.5.1 :conda:package:`r-protviz` >=0.2.45 :conda:package:`r-rsqlite` >=1.1.2 :conda:package:`r-seqinr` >=3.3.3 

   :required~by: |required_by_bioconductor-specl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-specl

   and update with::

      conda update bioconductor-specl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-specl


.. |required_by_bioconductor-specl| conda:required_by:: bioconductor-specl
.. |downloads_bioconductor-specl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-specl.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-specl| image:: https://quay.io/repository/biocontainers/bioconductor-specl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-specl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-specl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-specl/README.html

