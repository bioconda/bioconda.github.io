:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-orfik'
.. highlight: bash

bioconductor-orfik
==================

.. conda:recipe:: bioconductor-orfik
   :replaces_section_title:
   :noindex:

   Open Reading Frames in Genomics

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ORFik.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-orfik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-orfik/meta.yaml>`_

   R package for analysis of transcript and translation features through manipulation of sequence data and NGS data like Ribo\-Seq\, RNA\-Seq\, TCP\-Seq and CAGE. It is generalized in the sense that any transcript region can be analysed\, as the name hints to it was made with investigation of ribosomal patterns over Open Reading Frames \(ORFs\) as it\'s primary use case. ORFik is extremely fast through use of C\+\+\, data.table and GenomicRanges. Package allows to reassign starts of the transcripts with the use of CAGE\-Seq data\, automatic shifting of RiboSeq reads\, finding of Open Reading Frames for whole genomes and much more.


.. conda:package:: bioconductor-orfik

   |downloads_bioconductor-orfik| |docker_bioconductor-orfik|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.7-1</code>,  <code>1.14.7-0</code>,  <code>1.14.5-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.7-1``,  ``1.14.7-0``,  ``1.14.5-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biomartr: ``>=1.0.7``
   :depends r-biomartr: ``>=1.0.7,<2.0a0``
   :depends r-cowplot: ``>=1.0.0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-fst: ``>=0.9.2``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-gridextra: ``>=2.3``
   :depends r-httr: ``>=1.3.0``
   :depends r-jsonlite: 
   :depends r-r.utils: 
   :depends r-rcpp: ``>=1.0.0``
   :depends r-withr: 
   :depends r-xml: 
   :depends r-xml2: ``>=1.2.0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-orfik

   and update with::

      mamba update bioconductor-orfik

  To create a new environment, run::

      mamba create --name myenvname bioconductor-orfik

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.18.0"];
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