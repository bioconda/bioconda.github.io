:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-guitar'
.. highlight: bash

bioconductor-guitar
===================

.. conda:recipe:: bioconductor-guitar
   :replaces_section_title:

   The package is designed for visualization of RNA\-related genomic features with respect to the landmarks of RNA transcripts\, i.e.\, transcription starting site\, start codon\, stop codon and transcription ending site.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Guitar.html
   :license: GPL-2
   :recipe: /`bioconductor-guitar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guitar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guitar/meta.yaml>`_

   


.. conda:package:: bioconductor-guitar

   |downloads_bioconductor-guitar| |docker_bioconductor-guitar|

   :versions: 1.20.1-0, 1.20.0-0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-guitar

   and update with::

      conda update bioconductor-guitar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-guitar:<tag>

   (see `bioconductor-guitar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-guitar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-guitar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-guitar| image:: https://quay.io/repository/biocontainers/bioconductor-guitar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-guitar
.. _`bioconductor-guitar/tags`: https://quay.io/repository/biocontainers/bioconductor-guitar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-guitar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-guitar/README.html