:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-probamr'
.. highlight: bash

bioconductor-probamr
====================

.. conda:recipe:: bioconductor-probamr
   :replaces_section_title:
   :noindex:

   Generating SAM file for PSMs in shotgun proteomics data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/proBAMr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-probamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-probamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-probamr/meta.yaml>`_
   :links: biotools: :biotools:`probamr`, doi: :doi:`10.1074/mcp.M115.052860`

   Mapping PSMs back to genome. The package builds SAM file from shotgun proteomics data The package also provides function to prepare annotation from GTF file.


.. conda:package:: bioconductor-probamr

   |downloads_bioconductor-probamr| |docker_bioconductor-probamr|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-probamr

   and update with::

      conda update bioconductor-probamr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-probamr:<tag>

   (see `bioconductor-probamr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-probamr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-probamr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-probamr
   :alt:   (downloads)
.. |docker_bioconductor-probamr| image:: https://quay.io/repository/biocontainers/bioconductor-probamr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-probamr
.. _`bioconductor-probamr/tags`: https://quay.io/repository/biocontainers/bioconductor-probamr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-probamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-probamr/README.html