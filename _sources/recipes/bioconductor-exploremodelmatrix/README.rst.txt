:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exploremodelmatrix'
.. highlight: bash

bioconductor-exploremodelmatrix
===============================

.. conda:recipe:: bioconductor-exploremodelmatrix
   :replaces_section_title:
   :noindex:

   Graphical Exploration of Design Matrices

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ExploreModelMatrix.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-exploremodelmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exploremodelmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exploremodelmatrix/meta.yaml>`_

   Given a sample data table and a design formula\, ExploreModelMatrix generates an interactive application for exploration of the resulting design matrix. This can be helpful for interpreting model coefficients and constructing appropriate contrasts in \(generalized\) linear models. Static visualizations can also be generated.


.. conda:package:: bioconductor-exploremodelmatrix

   |downloads_bioconductor-exploremodelmatrix| |docker_bioconductor-exploremodelmatrix|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-rintrojs: 
   :depends r-scales: 
   :depends r-shiny: ``>=1.5.0``
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
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

      mamba install bioconductor-exploremodelmatrix

   and update with::

      mamba update bioconductor-exploremodelmatrix

  To create a new environment, run::

      mamba create --name myenvname bioconductor-exploremodelmatrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-exploremodelmatrix:<tag>

   (see `bioconductor-exploremodelmatrix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-exploremodelmatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-exploremodelmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-exploremodelmatrix
   :alt:   (downloads)
.. |docker_bioconductor-exploremodelmatrix| image:: https://quay.io/repository/biocontainers/bioconductor-exploremodelmatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-exploremodelmatrix
.. _`bioconductor-exploremodelmatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-exploremodelmatrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-exploremodelmatrix";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-exploremodelmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-exploremodelmatrix/README.html