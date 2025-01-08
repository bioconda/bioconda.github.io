:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathlinkr'
.. highlight: bash

bioconductor-pathlinkr
======================

.. conda:recipe:: bioconductor-pathlinkr
   :replaces_section_title:
   :noindex:

   Analyze and interpret RNA\-Seq results

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pathlinkR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-pathlinkr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathlinkr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathlinkr/meta.yaml>`_

   pathlinkR is an R package designed to facilitate analysis of RNA\-Seq results. Specifically\, our aim with pathlinkR was to provide a number of tools which take a list of DE genes and perform different analyses on them\, aiding with the interpretation of results. Functions are included to perform pathway enrichment\, with muliplte databases supported\, and tools for visualizing these results. Genes can also be used to create and plot protein\-protein interaction networks\, all from inside of R.


.. conda:package:: bioconductor-pathlinkr

   |downloads_bioconductor-pathlinkr| |docker_bioconductor-pathlinkr|

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

      mamba install bioconductor-pathlinkr

   and update with::

      mamba update bioconductor-pathlinkr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathlinkr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathlinkr:<tag>

   (see `bioconductor-pathlinkr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathlinkr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathlinkr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathlinkr
   :alt:   (downloads)
.. |docker_bioconductor-pathlinkr| image:: https://quay.io/repository/biocontainers/bioconductor-pathlinkr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathlinkr
.. _`bioconductor-pathlinkr/tags`: https://quay.io/repository/biocontainers/bioconductor-pathlinkr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathlinkr";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathlinkr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathlinkr/README.html