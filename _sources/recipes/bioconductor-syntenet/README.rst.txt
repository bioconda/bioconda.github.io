:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-syntenet'
.. highlight: bash

bioconductor-syntenet
=====================

.. conda:recipe:: bioconductor-syntenet
   :replaces_section_title:
   :noindex:

   Inference And Analysis Of Synteny Networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/syntenet.html
   :license: GPL-3
   :recipe: /`bioconductor-syntenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-syntenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-syntenet/meta.yaml>`_

   syntenet can be used to infer synteny networks from whole\-genome protein sequences and analyze them. Anchor pairs are detected with the MCScanX algorithm\, which was ported to this package with the Rcpp framework for R and C\+\+ integration. Anchor pairs from synteny analyses are treated as an undirected unweighted graph \(i.e.\, a synteny network\)\, and users can perform\: i. network clustering\; ii. phylogenomic profiling \(by identifying which species contain which clusters\) and\; iii. microsynteny\-based phylogeny reconstruction with maximum likelihood.


.. conda:package:: bioconductor-syntenet

   |downloads_bioconductor-syntenet| |docker_bioconductor-syntenet|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.4-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggnetwork: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-intergraph: 
   :depends r-networkd3: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=1.0.8``
   :depends r-rlang: 
   :depends r-testthat: 
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

      mamba install bioconductor-syntenet

   and update with::

      mamba update bioconductor-syntenet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-syntenet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-syntenet:<tag>

   (see `bioconductor-syntenet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-syntenet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-syntenet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-syntenet
   :alt:   (downloads)
.. |docker_bioconductor-syntenet| image:: https://quay.io/repository/biocontainers/bioconductor-syntenet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-syntenet
.. _`bioconductor-syntenet/tags`: https://quay.io/repository/biocontainers/bioconductor-syntenet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-syntenet";
        var versions = ["1.4.0","1.2.4","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-syntenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-syntenet/README.html