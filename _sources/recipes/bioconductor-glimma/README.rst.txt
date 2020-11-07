:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-glimma'
.. highlight: bash

bioconductor-glimma
===================

.. conda:recipe:: bioconductor-glimma
   :replaces_section_title:
   :noindex:

   Interactive HTML graphics

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Glimma.html
   :license: GPL-3
   :recipe: /`bioconductor-glimma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glimma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-glimma/meta.yaml>`_
   :links: biotools: :biotools:`glimma`, doi: :doi:`10.1101/096107`

   This package generates interactive visualisations for analysis of RNA\-sequencing data using output from limma\, edgeR or DESeq2 packages in an HTML page. The interactions are built on top of the popular static representations of analysis results in order to provide additional information.


.. conda:package:: bioconductor-glimma

   |downloads_bioconductor-glimma| |docker_bioconductor-glimma|

   :versions:
      
      

      ``2.0.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.6.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.30.0,<1.31.0``
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-htmlwidgets: 
   :depends r-jsonlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-glimma

   and update with::

      conda update bioconductor-glimma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-glimma:<tag>

   (see `bioconductor-glimma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-glimma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-glimma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-glimma
   :alt:   (downloads)
.. |docker_bioconductor-glimma| image:: https://quay.io/repository/biocontainers/bioconductor-glimma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-glimma
.. _`bioconductor-glimma/tags`: https://quay.io/repository/biocontainers/bioconductor-glimma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-glimma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-glimma/README.html