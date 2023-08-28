:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellarepertorium'
.. highlight: bash

bioconductor-cellarepertorium
=============================

.. conda:recipe:: bioconductor-cellarepertorium
   :replaces_section_title:
   :noindex:

   Data structures\, clustering and testing for single cell immune receptor repertoires \(scRNAseq RepSeq\/AIRR\-seq\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CellaRepertorium.html
   :license: GPL-3
   :recipe: /`bioconductor-cellarepertorium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellarepertorium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellarepertorium/meta.yaml>`_

   Methods to cluster and analyze high\-throughput single cell immune cell repertoires\, especially from the 10X Genomics VDJ solution. Contains an R interface to CD\-HIT \(Li and Godzik 2006\). Methods to visualize and analyze paired heavy\-light chain data. Tests for specific expansion\, as well as omnibus oligoclonality under hypergeometric models.


.. conda:package:: bioconductor-cellarepertorium

   |downloads_bioconductor-cellarepertorium| |docker_bioconductor-cellarepertorium|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-generics: 
   :depends r-glue: 
   :depends r-matrix: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rlang: ``>=0.3``
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cellarepertorium

   and update with::

      mamba update bioconductor-cellarepertorium

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellarepertorium

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellarepertorium:<tag>

   (see `bioconductor-cellarepertorium/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellarepertorium| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellarepertorium.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellarepertorium
   :alt:   (downloads)
.. |docker_bioconductor-cellarepertorium| image:: https://quay.io/repository/biocontainers/bioconductor-cellarepertorium/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellarepertorium
.. _`bioconductor-cellarepertorium/tags`: https://quay.io/repository/biocontainers/bioconductor-cellarepertorium?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellarepertorium";
        var versions = ["1.10.0","1.8.0","1.8.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellarepertorium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellarepertorium/README.html