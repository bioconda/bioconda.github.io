:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-peakpick'
.. highlight: bash

r-peakpick
==========

.. conda:recipe:: r-peakpick
   :replaces_section_title:
   :noindex:

   Peak Picking Methods Inspired by Biological Data

   :homepage: https://github.com/cran/peakPick
   :license: MIT / MIT
   :recipe: /`r-peakpick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-peakpick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-peakpick/meta.yaml>`_

   Biologically inspired methods for
   detecting peaks in one\-dimensional data\, such as time series or genomics data.
   The algorithms were originally designed by Weber\, Ramachandran\, and Henikoff\,
   see documentation.



.. conda:package:: r-peakpick

   |downloads_r-peakpick| |docker_r-peakpick|

   :versions:
      
      

      ``0.11-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-matrixstats: 
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

      mamba install r-peakpick

   and update with::

      mamba update r-peakpick

  To create a new environment, run::

      mamba create --name myenvname r-peakpick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-peakpick:<tag>

   (see `r-peakpick/tags`_ for valid values for ``<tag>``)


.. |downloads_r-peakpick| image:: https://img.shields.io/conda/dn/bioconda/r-peakpick.svg?style=flat
   :target: https://anaconda.org/bioconda/r-peakpick
   :alt:   (downloads)
.. |docker_r-peakpick| image:: https://quay.io/repository/biocontainers/r-peakpick/status
   :target: https://quay.io/repository/biocontainers/r-peakpick
.. _`r-peakpick/tags`: https://quay.io/repository/biocontainers/r-peakpick?tab=tags


.. raw:: html

    <script>
        var package = "r-peakpick";
        var versions = ["0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-peakpick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-peakpick/README.html