:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpe'
.. highlight: bash

bioconductor-lpe
================

.. conda:recipe:: bioconductor-lpe
   :replaces_section_title:

   This LPE library is used to do significance analysis of microarray data with small number of replicates. It uses resampling based FDR adjustment\, and gives less conservative results than traditional \'BH\' or \'BY\' procedures. Data accepted is raw data in txt format from MAS4\, MAS5 or dChip. Data can also be supplied after normalization. LPE library is primarily used for analyzing data between two conditions. To use it for paired data\, see LPEP library. For using LPE in multiple conditions\, use HEM library.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/LPE.html
   :license: LGPL
   :recipe: /`bioconductor-lpe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpe/meta.yaml>`_
   :links: biotools: :biotools:`lpe`, doi: :doi:`10.1093/bioinformatics/btg264`

   


.. conda:package:: bioconductor-lpe

   |downloads_bioconductor-lpe| |docker_bioconductor-lpe|

   :versions: 1.58.0-1, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lpe

   and update with::

      conda update bioconductor-lpe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lpe:<tag>

   (see `bioconductor-lpe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lpe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpe
   :alt:   (downloads)
.. |docker_bioconductor-lpe| image:: https://quay.io/repository/biocontainers/bioconductor-lpe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpe
.. _`bioconductor-lpe/tags`: https://quay.io/repository/biocontainers/bioconductor-lpe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpe/README.html