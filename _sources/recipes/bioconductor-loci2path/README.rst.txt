:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-loci2path'
.. highlight: bash

bioconductor-loci2path
======================

.. conda:recipe:: bioconductor-loci2path
   :replaces_section_title:
   :noindex:

   Loci2path\: regulatory annotation of genomic intervals based on tissue\-specific expression QTLs

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/loci2path.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-loci2path <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loci2path>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-loci2path/meta.yaml>`_

   loci2path performs statistics\-rigorous enrichment analysis of eQTLs in genomic regions of interest. Using eQTL collections provided by the Genotype\-Tissue Expression \(GTEx\) project and pathway collections from MSigDB.


.. conda:package:: bioconductor-loci2path

   |downloads_bioconductor-loci2path| |docker_bioconductor-loci2path|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-wordcloud: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-loci2path

   and update with::

      conda update bioconductor-loci2path

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-loci2path:<tag>

   (see `bioconductor-loci2path/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-loci2path| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-loci2path.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-loci2path
   :alt:   (downloads)
.. |docker_bioconductor-loci2path| image:: https://quay.io/repository/biocontainers/bioconductor-loci2path/status
   :target: https://quay.io/repository/biocontainers/bioconductor-loci2path
.. _`bioconductor-loci2path/tags`: https://quay.io/repository/biocontainers/bioconductor-loci2path?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-loci2path/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-loci2path/README.html