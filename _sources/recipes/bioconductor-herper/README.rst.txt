:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-herper'
.. highlight: bash

bioconductor-herper
===================

.. conda:recipe:: bioconductor-herper
   :replaces_section_title:
   :noindex:

   The Herper package is a simple toolset to install and manage conda packages and environments from R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Herper.html
   :license: GPL-3
   :recipe: /`bioconductor-herper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-herper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-herper/meta.yaml>`_

   Many tools for data analysis are not available in R\, but are present in public repositories like conda. The Herper package provides a comprehensive set of functions to interact with the conda package managament system. With Herper users can install\, manage and run conda packages from the comfort of their R session. Herper also provides an ad\-hoc approach to handling external system requirements for R packages. For people developing packages with python conda dependencies we recommend using basilisk \(https\:\/\/bioconductor.org\/packages\/release\/bioc\/html\/basilisk.html\) to internally support these system requirments pre\-hoc.


.. conda:package:: bioconductor-herper

   |downloads_bioconductor-herper| |docker_bioconductor-herper|

   :versions:
      
      

      ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.7.2-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.2-0``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-reticulate: 
   :depends r-rjson: 
   :depends r-withr: 
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

      mamba install bioconductor-herper

   and update with::

      mamba update bioconductor-herper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-herper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-herper:<tag>

   (see `bioconductor-herper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-herper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-herper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-herper
   :alt:   (downloads)
.. |docker_bioconductor-herper| image:: https://quay.io/repository/biocontainers/bioconductor-herper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-herper
.. _`bioconductor-herper/tags`: https://quay.io/repository/biocontainers/bioconductor-herper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-herper";
        var versions = ["1.12.0","1.12.0","1.10.0","1.7.2","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-herper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-herper/README.html