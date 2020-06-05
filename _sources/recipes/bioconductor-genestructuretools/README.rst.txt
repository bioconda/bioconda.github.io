:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genestructuretools'
.. highlight: bash

bioconductor-genestructuretools
===============================

.. conda:recipe:: bioconductor-genestructuretools
   :replaces_section_title:
   :noindex:

   Tools for spliced gene structure manipulation and analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GeneStructureTools.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-genestructuretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genestructuretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genestructuretools/meta.yaml>`_

   GeneStructureTools can be used to create in silico alternative splicing events\, and analyse potential effects this has on functional gene products.


.. conda:package:: bioconductor-genestructuretools

   |downloads_bioconductor-genestructuretools| |docker_bioconductor-genestructuretools|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.56.0,<2.57.0``
   :depends bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-gviz: ``>=1.32.0,<1.33.0``
   :depends bioconductor-iranges: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.48.0,<1.49.0``
   :depends bioconductor-s4vectors: ``>=0.26.0,<0.27.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-plyr: 
   :depends r-stringdist: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genestructuretools

   and update with::

      conda update bioconductor-genestructuretools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genestructuretools:<tag>

   (see `bioconductor-genestructuretools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genestructuretools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genestructuretools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genestructuretools
   :alt:   (downloads)
.. |docker_bioconductor-genestructuretools| image:: https://quay.io/repository/biocontainers/bioconductor-genestructuretools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genestructuretools
.. _`bioconductor-genestructuretools/tags`: https://quay.io/repository/biocontainers/bioconductor-genestructuretools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genestructuretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genestructuretools/README.html