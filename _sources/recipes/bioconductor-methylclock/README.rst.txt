:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylclock'
.. highlight: bash

bioconductor-methylclock
========================

.. conda:recipe:: bioconductor-methylclock
   :replaces_section_title:
   :noindex:

   Methylclock \- DNA methylation\-based clocks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/methylclock.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-methylclock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclock/meta.yaml>`_

   This package allows to estimate chronological and gestational DNA methylation \(DNAm\) age as well as biological age using different methylation clocks. Chronological DNAm age \(in years\) \: Horvath\'s clock\, Hannum\'s clock\, BNN\, Horvath\'s skin\+blood clock\, PedBE clock and Wu\'s clock. Gestational DNAm age \: Knight\'s clock\, Bohlin\'s clock\, Mayne\'s clock and Lee\'s clocks. Biological DNAm clocks \: Levine\'s clock and Telomere Length\'s clock.


.. conda:package:: bioconductor-methylclock

   |downloads_bioconductor-methylclock| |docker_bioconductor-methylclock|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-methylclockdata: ``>=1.8.0,<1.9.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends bioconductor-planet: ``>=1.8.0,<1.9.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-ggplot2: 
   :depends r-ggpmisc: 
   :depends r-ggpubr: 
   :depends r-gridextra: 
   :depends r-performanceanalytics: 
   :depends r-quadprog: 
   :depends r-rcpp: ``>=1.0.6``
   :depends r-rpmm: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyverse: 
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

      mamba install bioconductor-methylclock

   and update with::

      mamba update bioconductor-methylclock

  To create a new environment, run::

      mamba create --name myenvname bioconductor-methylclock

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylclock:<tag>

   (see `bioconductor-methylclock/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylclock| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylclock.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylclock
   :alt:   (downloads)
.. |docker_bioconductor-methylclock| image:: https://quay.io/repository/biocontainers/bioconductor-methylclock/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylclock
.. _`bioconductor-methylclock/tags`: https://quay.io/repository/biocontainers/bioconductor-methylclock?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylclock";
        var versions = ["1.6.0","1.4.0","1.4.0","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylclock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylclock/README.html