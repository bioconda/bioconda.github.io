:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eds'
.. highlight: bash

bioconductor-eds
================

.. conda:recipe:: bioconductor-eds
   :replaces_section_title:
   :noindex:

   eds\: Low\-level reader for Alevin EDS format

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/eds.html
   :license: GPL-2
   :recipe: /`bioconductor-eds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eds/meta.yaml>`_

   This packages provides a single function\, readEDS. This is a low\-level utility for reading in Alevin EDS format into R. This function is not designed for end\-users but instead the package is predominantly for simplifying package dependency graph for other Bioconductor packages.


.. conda:package:: bioconductor-eds

   |downloads_bioconductor-eds| |docker_bioconductor-eds|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-eds

   and update with::

      mamba update bioconductor-eds

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eds

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eds:<tag>

   (see `bioconductor-eds/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eds| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eds.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eds
   :alt:   (downloads)
.. |docker_bioconductor-eds| image:: https://quay.io/repository/biocontainers/bioconductor-eds/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eds
.. _`bioconductor-eds/tags`: https://quay.io/repository/biocontainers/bioconductor-eds?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eds";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eds/README.html