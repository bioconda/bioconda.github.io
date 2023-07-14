:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orfik'
.. highlight: bash

bioconductor-orfik
==================

.. conda:recipe:: bioconductor-orfik
   :replaces_section_title:
   :noindex:

   Open Reading Frames in Genomics

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/ORFik.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-orfik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik/meta.yaml>`_

   R package for analysis of transcript and translation features through manipulation of sequence data and NGS data like Ribo\-Seq\, RNA\-Seq\, TCP\-Seq and CAGE. It is generalized in the sense that any transcript region can be analysed\, as the name hints to it was made with investigation of ribosomal patterns over Open Reading Frames \(ORFs\) as it\'s primary use case. ORFik is extremely fast through use of C\+\+\, data.table and GenomicRanges. Package allows to reassign starts of the transcripts with the use of CAGE\-Seq data\, automatic shifting of RiboSeq reads\, finding of Open Reading Frames for whole genomes and much more.


.. conda:package:: bioconductor-orfik

   |downloads_bioconductor-orfik| |docker_bioconductor-orfik|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.7-1</code>,  <code>1.14.7-0</code>,  <code>1.14.5-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.7-1``,  ``1.14.7-0``,  ``1.14.5-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biomartr: 
   :depends r-cowplot: ``>=1.0.0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-fst: ``>=0.9.2``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-gridextra: ``>=2.3``
   :depends r-httr: ``>=1.3.0``
   :depends r-jsonlite: 
   :depends r-r.utils: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-xml2: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-orfik

   and update with::

      conda update bioconductor-orfik

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-orfik:<tag>

   (see `bioconductor-orfik/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-orfik| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-orfik.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-orfik
   :alt:   (downloads)
.. |docker_bioconductor-orfik| image:: https://quay.io/repository/biocontainers/bioconductor-orfik/status
   :target: https://quay.io/repository/biocontainers/bioconductor-orfik
.. _`bioconductor-orfik/tags`: https://quay.io/repository/biocontainers/bioconductor-orfik?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-orfik";
        var versions = ["1.20.0","1.18.0","1.18.0","1.14.7","1.14.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-orfik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-orfik/README.html