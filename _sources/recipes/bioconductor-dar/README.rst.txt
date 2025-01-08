:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dar'
.. highlight: bash

bioconductor-dar
================

.. conda:recipe:: bioconductor-dar
   :replaces_section_title:
   :noindex:

   Differential Abundance Analysis by Consensus

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dar.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dar/meta.yaml>`_

   Differential abundance testing in microbiome data challenges both parametric and non\-parametric statistical methods\, due to its sparsity\, high variability and compositional nature. Microbiome\-specific statistical methods often assume classical distribution models or take into account compositional specifics. These produce results that range within the specificity vs sensitivity space in such a way that type I and type II error that are difficult to ascertain in real microbiome data when a single method is used. Recently\, a consensus approach based on multiple differential abundance \(DA\) methods was recently suggested in order to increase robustness. With dar\, you can use dplyr\-like pipeable sequences of DA methods and then apply different consensus strategies. In this way we can obtain more reliable results in a fast\, consistent and reproducible way.


.. conda:package:: bioconductor-dar

   |downloads_bioconductor-dar| |docker_bioconductor-dar|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-mia: ``>=1.14.0,<1.15.0``
   :depends bioconductor-phyloseq: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-generics: 
   :depends r-ggplot2: 
   :depends r-glue: 
   :depends r-gplots: 
   :depends r-heatmaply: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: ``>=0.4.11``
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-upsetr: 
   :depends r-waldo: 
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

      mamba install bioconductor-dar

   and update with::

      mamba update bioconductor-dar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dar:<tag>

   (see `bioconductor-dar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dar
   :alt:   (downloads)
.. |docker_bioconductor-dar| image:: https://quay.io/repository/biocontainers/bioconductor-dar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dar
.. _`bioconductor-dar/tags`: https://quay.io/repository/biocontainers/bioconductor-dar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dar";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dar/README.html