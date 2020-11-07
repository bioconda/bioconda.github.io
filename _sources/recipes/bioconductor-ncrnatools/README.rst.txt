:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncrnatools'
.. highlight: bash

bioconductor-ncrnatools
=======================

.. conda:recipe:: bioconductor-ncrnatools
   :replaces_section_title:
   :noindex:

   An R toolkit for non\-coding RNA

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ncRNAtools.html
   :license: GPL-3
   :recipe: /`bioconductor-ncrnatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncrnatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncrnatools/meta.yaml>`_

   ncRNAtools provides a set of basic tools for handling and analyzing non\-coding RNAs. These include tools to access the RNAcentral database and to predict and visualize the secondary structure of non\-coding RNAs. The package also provides tools to read\, write and interconvert the file formats most commonly used for representing such secondary structures.


.. conda:package:: bioconductor-ncrnatools

   |downloads_bioconductor-ncrnatools| |docker_bioconductor-ncrnatools|

   :versions:
      
      

      ``1.0.0-1``

      

   
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ncrnatools

   and update with::

      conda update bioconductor-ncrnatools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncrnatools:<tag>

   (see `bioconductor-ncrnatools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncrnatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncrnatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncrnatools
   :alt:   (downloads)
.. |docker_bioconductor-ncrnatools| image:: https://quay.io/repository/biocontainers/bioconductor-ncrnatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncrnatools
.. _`bioconductor-ncrnatools/tags`: https://quay.io/repository/biocontainers/bioconductor-ncrnatools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncrnatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncrnatools/README.html