:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enhancerhomologsearch'
.. highlight: bash

bioconductor-enhancerhomologsearch
==================================

.. conda:recipe:: bioconductor-enhancerhomologsearch
   :replaces_section_title:
   :noindex:

   Identification of putative mammalian orthologs to given enhancer

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/enhancerHomologSearch.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-enhancerhomologsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancerhomologsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enhancerhomologsearch/meta.yaml>`_

   Get ENCODE data of enhancer region via H3K4me1 peaks and search homolog regions for given sequences. The candidates of enhancer homolog regions can be filtered by distance to target TSS. The top candidates from human and mouse will be aligned to each other and then exported as multiple alignments with given enhancer.


.. conda:package:: bioconductor-enhancerhomologsearch

   |downloads_bioconductor-enhancerhomologsearch| |docker_bioconductor-enhancerhomologsearch|

   :versions:
      
      

      ``1.6.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-motifmatchr: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-rcpp: 
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

      mamba install bioconductor-enhancerhomologsearch

   and update with::

      mamba update bioconductor-enhancerhomologsearch

  To create a new environment, run::

      mamba create --name myenvname bioconductor-enhancerhomologsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.6.1","1.4.0","1.4.0","1.0.1","1.0.0"];
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