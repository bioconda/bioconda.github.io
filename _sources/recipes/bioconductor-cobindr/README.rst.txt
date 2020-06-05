:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cobindr'
.. highlight: bash

bioconductor-cobindr
====================

.. conda:recipe:: bioconductor-cobindr
   :replaces_section_title:
   :noindex:

   Finding Co\-occuring motifs of transcription factor binding sites

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/cobindR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cobindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cobindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cobindr/meta.yaml>`_

   Finding and analysing co\-occuring motifs of transcription factor binding sites in groups of genes


.. conda:package:: bioconductor-cobindr

   |downloads_bioconductor-cobindr| |docker_bioconductor-cobindr|

   :versions:
      
      

      ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-biomart: ``>=2.44.0,<2.45.0``
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-bsgenome: ``>=1.56.0,<1.57.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gmp: 
   :depends r-gplots: 
   :depends r-mclust: 
   :depends r-rtfbs: 
   :depends r-seqinr: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cobindr

   and update with::

      conda update bioconductor-cobindr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cobindr:<tag>

   (see `bioconductor-cobindr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cobindr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cobindr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cobindr
   :alt:   (downloads)
.. |docker_bioconductor-cobindr| image:: https://quay.io/repository/biocontainers/bioconductor-cobindr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cobindr
.. _`bioconductor-cobindr/tags`: https://quay.io/repository/biocontainers/bioconductor-cobindr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cobindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cobindr/README.html