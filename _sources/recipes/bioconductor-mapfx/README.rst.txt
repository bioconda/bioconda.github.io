:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mapfx'
.. highlight: bash

bioconductor-mapfx
==================

.. conda:recipe:: bioconductor-mapfx
   :replaces_section_title:
   :noindex:

   MAssively Parallel Flow cytometry Xplorer \(MAPFX\)\: A Toolbox for Analysing Data from the Massively\-Parallel Cytometry Experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MAPFX.html
   :license: GPL-2
   :recipe: /`bioconductor-mapfx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapfx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapfx/meta.yaml>`_

   MAPFX is an end\-to\-end toolbox that pre\-processes the raw data from MPC experiments \(e.g.\, BioLegend\'s LEGENDScreen and BD Lyoplates assays\)\, and further imputes the ‘missing’ infinity markers in the wells without those measurements. The pipeline starts by performing background correction on raw intensities to remove the noise from electronic baseline restoration and fluorescence compensation by adapting a normal\-exponential convolution model. Unwanted technical variation\, from sources such as well effects\, is then removed using a log\-normal model with plate\, column\, and row factors\, after which infinity markers are imputed using the informative backbone markers as predictors. The completed dataset can then be used for clustering and other statistical analyses. Additionally\, MAPFX can be used to normalise data from FFC assays as well.


.. conda:package:: bioconductor-mapfx

   |downloads_bioconductor-mapfx| |docker_bioconductor-mapfx|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-mapfx

   and update with::

      mamba update bioconductor-mapfx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mapfx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mapfx:<tag>

   (see `bioconductor-mapfx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mapfx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapfx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mapfx
   :alt:   (downloads)
.. |docker_bioconductor-mapfx| image:: https://quay.io/repository/biocontainers/bioconductor-mapfx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapfx
.. _`bioconductor-mapfx/tags`: https://quay.io/repository/biocontainers/bioconductor-mapfx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mapfx";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapfx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapfx/README.html