:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicdoc'
.. highlight: bash

bioconductor-hicdoc
===================

.. conda:recipe:: bioconductor-hicdoc
   :replaces_section_title:
   :noindex:

   A\/B compartment detection and differential analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HiCDOC.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-hicdoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicdoc/meta.yaml>`_

   HiCDOC normalizes intrachromosomal Hi\-C matrices\, uses unsupervised learning to predict A\/B compartments from multiple replicates\, and detects significant compartment changes between experiment conditions. It provides a collection of functions assembled into a pipeline to filter and normalize the data\, predict the compartments and visualize the results. It accepts several type of data\: tabular \`.tsv\` files\, Cooler \`.cool\` or \`.mcool\` files\, Juicer \`.hic\` files or HiC\-Pro \`.matrix\` and \`.bed\` files.


.. conda:package:: bioconductor-hicdoc

   |downloads_bioconductor-hicdoc| |docker_bioconductor-hicdoc|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-interactionset: ``>=1.30.0,<1.31.0``
   :depends bioconductor-interactionset: ``>=1.30.0,<1.31.0a0``
   :depends bioconductor-multihiccompare: ``>=1.20.0,<1.21.0``
   :depends bioconductor-multihiccompare: ``>=1.20.0,<1.21.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-gtools: 
   :depends r-pbapply: 
   :depends r-rcpp: ``>=0.12.8``
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

      mamba install bioconductor-hicdoc

   and update with::

      mamba update bioconductor-hicdoc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicdoc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicdoc:<tag>

   (see `bioconductor-hicdoc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicdoc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicdoc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicdoc
   :alt:   (downloads)
.. |docker_bioconductor-hicdoc| image:: https://quay.io/repository/biocontainers/bioconductor-hicdoc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicdoc
.. _`bioconductor-hicdoc/tags`: https://quay.io/repository/biocontainers/bioconductor-hicdoc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicdoc";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicdoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicdoc/README.html