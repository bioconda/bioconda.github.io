:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easyreporting'
.. highlight: bash

bioconductor-easyreporting
==========================

.. conda:recipe:: bioconductor-easyreporting
   :replaces_section_title:
   :noindex:

   Helps creating report for improving Reproducible Computational Research

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/easyreporting.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-easyreporting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyreporting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyreporting/meta.yaml>`_

   An S4 class for facilitating the automated creation of rmarkdown files inside other packages\/software even without knowing rmarkdown language. Best if implemented in functions as \"recursive\" style programming.


.. conda:package:: bioconductor-easyreporting

   |downloads_bioconductor-easyreporting| |docker_bioconductor-easyreporting|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
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

      mamba install bioconductor-easyreporting

   and update with::

      mamba update bioconductor-easyreporting

  To create a new environment, run::

      mamba create --name myenvname bioconductor-easyreporting

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-easyreporting:<tag>

   (see `bioconductor-easyreporting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-easyreporting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easyreporting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easyreporting
   :alt:   (downloads)
.. |docker_bioconductor-easyreporting| image:: https://quay.io/repository/biocontainers/bioconductor-easyreporting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easyreporting
.. _`bioconductor-easyreporting/tags`: https://quay.io/repository/biocontainers/bioconductor-easyreporting?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easyreporting";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easyreporting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easyreporting/README.html