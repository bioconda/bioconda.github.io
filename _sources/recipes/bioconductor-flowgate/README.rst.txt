:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowgate'
.. highlight: bash

bioconductor-flowgate
=====================

.. conda:recipe:: bioconductor-flowgate
   :replaces_section_title:
   :noindex:

   Interactive Cytometry Gating in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/flowGate.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-flowgate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgate/meta.yaml>`_

   flowGate adds an interactive Shiny app to allow manual GUI\-based gating of flow cytometry data in R. Using flowGate\, you can draw 1D and 2D span\/rectangle gates\, quadrant gates\, and polygon gates on flow cytometry data by interactively drawing the gates on a plot of your data\, rather than by specifying gate coordinates. This package is especially geared toward wet\-lab cytometerists looking to take advantage of R for cytometry analysis\, without necessarily having a lot of R experience.


.. conda:package:: bioconductor-flowgate

   |downloads_bioconductor-flowgate| |docker_bioconductor-flowgate|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowworkspace: ``>=4.14.0,<4.15.0``
   :depends bioconductor-ggcyto: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: ``>=1.30.10``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-ggplot2: ``>=3.3.2``
   :depends r-purrr: 
   :depends r-rlang: ``>=0.4.7``
   :depends r-shiny: ``>=1.5.0``
   :depends r-tibble: 
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

      mamba install bioconductor-flowgate

   and update with::

      mamba update bioconductor-flowgate

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowgate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowgate:<tag>

   (see `bioconductor-flowgate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowgate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowgate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowgate
   :alt:   (downloads)
.. |docker_bioconductor-flowgate| image:: https://quay.io/repository/biocontainers/bioconductor-flowgate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowgate
.. _`bioconductor-flowgate/tags`: https://quay.io/repository/biocontainers/bioconductor-flowgate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowgate";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowgate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowgate/README.html