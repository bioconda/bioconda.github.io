:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enhancerhomologsearch'
.. highlight: bash

bioconductor-enhancerhomologsearch
==================================

.. conda:recipe:: bioconductor-enhancerhomologsearch
   :replaces_section_title:
   :noindex:

   Identification of putative mammalian orthologs to given enhancer

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/enhancerHomologSearch.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-enhancerhomologsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancerhomologsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancerhomologsearch/meta.yaml>`_

   Get ENCODE data of enhancer region via H3K4me1 peaks and search homolog regions for given sequences. The candidates of enhancer homolog regions can be filtered by distance to target TSS. The top candidates from human and mouse will be aligned to each other and then exported as multiple alignments with given enhancer.


.. conda:package:: bioconductor-enhancerhomologsearch

   |downloads_bioconductor-enhancerhomologsearch| |docker_bioconductor-enhancerhomologsearch|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-motifmatchr: ``>=1.20.0,<1.21.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enhancerhomologsearch

   and update with::

      conda update bioconductor-enhancerhomologsearch

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enhancerhomologsearch:<tag>

   (see `bioconductor-enhancerhomologsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enhancerhomologsearch| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enhancerhomologsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enhancerhomologsearch
   :alt:   (downloads)
.. |docker_bioconductor-enhancerhomologsearch| image:: https://quay.io/repository/biocontainers/bioconductor-enhancerhomologsearch/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enhancerhomologsearch
.. _`bioconductor-enhancerhomologsearch/tags`: https://quay.io/repository/biocontainers/bioconductor-enhancerhomologsearch?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enhancerhomologsearch";
        var versions = ["1.4.0","1.4.0","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enhancerhomologsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enhancerhomologsearch/README.html