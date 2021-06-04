:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqvartools'
.. highlight: bash

bioconductor-seqvartools
========================

.. conda:recipe:: bioconductor-seqvartools
   :replaces_section_title:
   :noindex:

   Tools for variant data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/SeqVarTools.html
   :license: GPL-3
   :recipe: /`bioconductor-seqvartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqvartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqvartools/meta.yaml>`_

   An interface to the fast\-access storage format for VCF data provided in SeqArray\, with tools for common operations and analysis.


.. conda:package:: bioconductor-seqvartools

   |downloads_bioconductor-seqvartools| |docker_bioconductor-seqvartools|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-gdsfmt: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-seqarray: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-gwasexacthw: 
   :depends r-logistf: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqvartools

   and update with::

      conda update bioconductor-seqvartools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqvartools:<tag>

   (see `bioconductor-seqvartools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqvartools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqvartools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqvartools
   :alt:   (downloads)
.. |docker_bioconductor-seqvartools| image:: https://quay.io/repository/biocontainers/bioconductor-seqvartools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqvartools
.. _`bioconductor-seqvartools/tags`: https://quay.io/repository/biocontainers/bioconductor-seqvartools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqvartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqvartools/README.html