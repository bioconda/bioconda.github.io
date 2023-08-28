:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bigpint'
.. highlight: bash

bioconductor-bigpint
====================

.. conda:recipe:: bioconductor-bigpint
   :replaces_section_title:
   :noindex:

   Big multivariate data plotted interactively

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/bigPint.html
   :license: GPL-3
   :recipe: /`bioconductor-bigpint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigpint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigpint/meta.yaml>`_

   Methods for visualizing large multivariate datasets using static and interactive scatterplot matrices\, parallel coordinate plots\, volcano plots\, and litre plots. Includes examples for visualizing RNA\-sequencing datasets and differentially expressed genes.


.. conda:package:: bioconductor-bigpint

   |downloads_bioconductor-bigpint| |docker_bioconductor-bigpint|

   :versions:
      
      

      ``1.15.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.7.2``
   :depends r-ggally: ``>=1.3.2``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-gridextra: ``>=2.3``
   :depends r-hexbin: ``>=1.27.1``
   :depends r-hmisc: ``>=4.0.3``
   :depends r-htmlwidgets: ``>=0.9``
   :depends r-plotly: ``>=4.7.1``
   :depends r-plyr: ``>=1.8.4``
   :depends r-rcolorbrewer: ``>=1.1.2``
   :depends r-reshape: ``>=0.8.7``
   :depends r-shiny: ``>=1.0.5``
   :depends r-shinycssloaders: ``>=0.2.0``
   :depends r-shinydashboard: ``>=0.6.1``
   :depends r-stringr: ``>=1.3.1``
   :depends r-tidyr: ``>=0.7.0``
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

      mamba install bioconductor-bigpint

   and update with::

      mamba update bioconductor-bigpint

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bigpint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bigpint:<tag>

   (see `bioconductor-bigpint/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bigpint| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bigpint.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bigpint
   :alt:   (downloads)
.. |docker_bioconductor-bigpint| image:: https://quay.io/repository/biocontainers/bioconductor-bigpint/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bigpint
.. _`bioconductor-bigpint/tags`: https://quay.io/repository/biocontainers/bioconductor-bigpint?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bigpint";
        var versions = ["1.15.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bigpint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bigpint/README.html