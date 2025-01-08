:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidyflowcore'
.. highlight: bash

bioconductor-tidyflowcore
=========================

.. conda:recipe:: bioconductor-tidyflowcore
   :replaces_section_title:
   :noindex:

   tidyFlowCore\: Bringing flowCore to the tidyverse

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidyFlowCore.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tidyflowcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyflowcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidyflowcore/meta.yaml>`_

   tidyFlowCore bridges the gap between flow cytometry analysis using the flowCore Bioconductor package and the tidy data principles advocated by the tidyverse. It provides a suite of dplyr\-\, ggplot2\-\, and tidyr\-like verbs specifically designed for working with flowFrame and flowSet objects as if they were tibbles\; however\, your data remain flowCore data structures under this layer of abstraction. tidyFlowCore enables intuitive and streamlined analysis workflows that can leverage both the Bioconductor and tidyverse ecosystems for cytometry data.


.. conda:package:: bioconductor-tidyflowcore

   |downloads_bioconductor-tidyflowcore| |docker_bioconductor-tidyflowcore|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-tidyflowcore

   and update with::

      mamba update bioconductor-tidyflowcore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidyflowcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidyflowcore:<tag>

   (see `bioconductor-tidyflowcore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidyflowcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidyflowcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidyflowcore
   :alt:   (downloads)
.. |docker_bioconductor-tidyflowcore| image:: https://quay.io/repository/biocontainers/bioconductor-tidyflowcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidyflowcore
.. _`bioconductor-tidyflowcore/tags`: https://quay.io/repository/biocontainers/bioconductor-tidyflowcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidyflowcore";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidyflowcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidyflowcore/README.html