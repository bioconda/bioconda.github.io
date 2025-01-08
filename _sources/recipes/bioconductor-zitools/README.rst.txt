:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zitools'
.. highlight: bash

bioconductor-zitools
====================

.. conda:recipe:: bioconductor-zitools
   :replaces_section_title:
   :noindex:

   Analysis of zero\-inflated count data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/zitools.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-zitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zitools/meta.yaml>`_

   zitools allows for zero inflated count data analysis by either using down\-weighting of excess zeros or by replacing an appropriate proportion of excess zeros with NA. Through overloading frequently used statistical functions \(such as mean\, median\, standard deviation\)\, plotting functions \(such as boxplots or heatmap\) or differential abundance tests\, it allows a wide range of downstream analyses for zero\-inflated data in a less biased manner. This becomes applicable in the context of microbiome analyses\, where the data is often overdispersed and zero\-inflated\, therefore making data analysis extremly challenging.


.. conda:package:: bioconductor-zitools

   |downloads_bioconductor-zitools| |docker_bioconductor-zitools|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-phyloseq: ``>=1.50.0,<1.51.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-pscl: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vgam: 
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

      mamba install bioconductor-zitools

   and update with::

      mamba update bioconductor-zitools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-zitools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zitools:<tag>

   (see `bioconductor-zitools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zitools
   :alt:   (downloads)
.. |docker_bioconductor-zitools| image:: https://quay.io/repository/biocontainers/bioconductor-zitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zitools
.. _`bioconductor-zitools/tags`: https://quay.io/repository/biocontainers/bioconductor-zitools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zitools";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zitools/README.html