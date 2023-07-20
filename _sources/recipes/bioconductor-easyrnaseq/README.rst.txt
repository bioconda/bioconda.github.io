:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easyrnaseq'
.. highlight: bash

bioconductor-easyrnaseq
=======================

.. conda:recipe:: bioconductor-easyrnaseq
   :replaces_section_title:
   :noindex:

   Count summarization and normalization for RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/easyRNASeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-easyrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyrnaseq/meta.yaml>`_

   Calculates the coverage of high\-throughput short\-reads against a genome of reference and summarizes it per feature of interest \(e.g. exon\, gene\, transcript\). The data can be normalized as \'RPKM\' or by the \'DESeq\' or \'edgeR\' package.


.. conda:package:: bioconductor-easyrnaseq

   |downloads_bioconductor-easyrnaseq| |docker_bioconductor-easyrnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.1-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.18.2-0</code>,  <code>2.16.0-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.2-0``,  ``2.16.0-0``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomeintervals: ``>=1.56.0,<1.57.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-locfit: 
   :depends r-lsd: ``>=4.1-0``
   :depends r-rappdirs: ``>=0.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-easyrnaseq

   and update with::

      conda update bioconductor-easyrnaseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-easyrnaseq:<tag>

   (see `bioconductor-easyrnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-easyrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easyrnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easyrnaseq
   :alt:   (downloads)
.. |docker_bioconductor-easyrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-easyrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easyrnaseq
.. _`bioconductor-easyrnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-easyrnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easyrnaseq";
        var versions = ["2.36.0","2.34.0","2.30.0","2.28.0","2.24.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easyrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easyrnaseq/README.html