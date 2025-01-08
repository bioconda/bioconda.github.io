:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sketchr'
.. highlight: bash

bioconductor-sketchr
====================

.. conda:recipe:: bioconductor-sketchr
   :replaces_section_title:
   :noindex:

   An R interface for python subsampling\/sketching algorithms

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sketchR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sketchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sketchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sketchr/meta.yaml>`_

   Provides an R interface for various subsampling algorithms implemented in python packages. Currently\, interfaces to the geosketch and scSampler python packages are implemented. In addition it also provides diagnostic plots to evaluate the subsampling.


.. conda:package:: bioconductor-sketchr

   |downloads_bioconductor-sketchr| |docker_bioconductor-sketchr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-reticulate: 
   :depends r-rlang: 
   :depends r-scales: 
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

      mamba install bioconductor-sketchr

   and update with::

      mamba update bioconductor-sketchr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sketchr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sketchr:<tag>

   (see `bioconductor-sketchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sketchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sketchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sketchr
   :alt:   (downloads)
.. |docker_bioconductor-sketchr| image:: https://quay.io/repository/biocontainers/bioconductor-sketchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sketchr
.. _`bioconductor-sketchr/tags`: https://quay.io/repository/biocontainers/bioconductor-sketchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sketchr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sketchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sketchr/README.html