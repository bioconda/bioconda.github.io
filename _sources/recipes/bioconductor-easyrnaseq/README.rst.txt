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

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.1-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.18.2-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.2-0``,  ``2.16.0-0``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeintervals: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-shortread: ``>=1.60.0,<1.61.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-locfit: 
   :depends r-lsd: ``>=4.1-0``
   :depends r-rappdirs: ``>=0.3.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-easyrnaseq

   and update with::

      mamba update bioconductor-easyrnaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-easyrnaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["2.38.0","2.36.0","2.34.0","2.30.0","2.28.0"];
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