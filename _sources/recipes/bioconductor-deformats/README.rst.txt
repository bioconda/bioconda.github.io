:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deformats'
.. highlight: bash

bioconductor-deformats
======================

.. conda:recipe:: bioconductor-deformats
   :replaces_section_title:
   :noindex:

   Differential gene expression data formats converter

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/DEFormats.html
   :license: GPL-3
   :recipe: /`bioconductor-deformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deformats/meta.yaml>`_
   :links: biotools: :biotools:`deformats`, doi: :doi:`10.1038/nmeth.3252`

   Convert between different data formats used by differential gene expression analysis tools.


.. conda:package:: bioconductor-deformats

   |downloads_bioconductor-deformats| |docker_bioconductor-deformats|

   :versions:
      
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``

      

   
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deformats

   and update with::

      conda update bioconductor-deformats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deformats:<tag>

   (see `bioconductor-deformats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deformats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deformats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deformats
   :alt:   (downloads)
.. |docker_bioconductor-deformats| image:: https://quay.io/repository/biocontainers/bioconductor-deformats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deformats
.. _`bioconductor-deformats/tags`: https://quay.io/repository/biocontainers/bioconductor-deformats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deformats/README.html