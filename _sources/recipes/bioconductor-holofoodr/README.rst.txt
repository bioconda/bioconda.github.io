:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-holofoodr'
.. highlight: bash

bioconductor-holofoodr
======================

.. conda:recipe:: bioconductor-holofoodr
   :replaces_section_title:
   :noindex:

   R interface to EBI HoloFood resource

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HoloFoodR.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-holofoodr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-holofoodr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-holofoodr/meta.yaml>`_

   Utility package to facilitate integration and analysis of EBI HoloFood data in R. This package streamlines access to the resource\, allowing for direct loading of data into formats optimized for downstream analytics.


.. conda:package:: bioconductor-holofoodr

   |downloads_bioconductor-holofoodr| |docker_bioconductor-holofoodr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-httr2: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-holofoodr

   and update with::

      mamba update bioconductor-holofoodr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-holofoodr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-holofoodr:<tag>

   (see `bioconductor-holofoodr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-holofoodr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-holofoodr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-holofoodr
   :alt:   (downloads)
.. |docker_bioconductor-holofoodr| image:: https://quay.io/repository/biocontainers/bioconductor-holofoodr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-holofoodr
.. _`bioconductor-holofoodr/tags`: https://quay.io/repository/biocontainers/bioconductor-holofoodr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-holofoodr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-holofoodr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-holofoodr/README.html