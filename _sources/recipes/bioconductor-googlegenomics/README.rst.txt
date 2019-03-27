:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-googlegenomics'
.. highlight: bash

bioconductor-googlegenomics
===========================

.. conda:recipe:: bioconductor-googlegenomics
   :replaces_section_title:

   Provides an R package to interact with the Google Genomics API.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GoogleGenomics.html
   :license: Apache License (== 2.0) | file LICENSE
   :recipe: /`bioconductor-googlegenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-googlegenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-googlegenomics/meta.yaml>`_

   


.. conda:package:: bioconductor-googlegenomics

   |downloads_bioconductor-googlegenomics| |docker_bioconductor-googlegenomics|

   :versions: 2.4.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-httr: 
   
   :depends r-rjson: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-googlegenomics

   and update with::

      conda update bioconductor-googlegenomics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-googlegenomics:<tag>

   (see `bioconductor-googlegenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-googlegenomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-googlegenomics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-googlegenomics| image:: https://quay.io/repository/biocontainers/bioconductor-googlegenomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-googlegenomics
.. _`bioconductor-googlegenomics/tags`: https://quay.io/repository/biocontainers/bioconductor-googlegenomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-googlegenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-googlegenomics/README.html