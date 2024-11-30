:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpastainr'
.. highlight: bash

bioconductor-hpastainr
======================

.. conda:recipe:: bioconductor-hpastainr
   :replaces_section_title:
   :noindex:

   Queries the Human Protein Atlas Staining Data for Multiple Proteins and Genes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HPAStainR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hpastainr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpastainr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpastainr/meta.yaml>`_

   This package is built around the HPAStainR function. The purpose of the HPAStainR function is to query the visual staining data in the Human Protein Atlas to return a table of staining ranked cell types. The function also has multiple arguments to personalize to output as well to include cancer data\, csv readable names\, modify the confidence levels of the results and more. The other functions exist exclusively to easily acquire the data required to run HPAStainR.


.. conda:package:: bioconductor-hpastainr

   |downloads_bioconductor-hpastainr| |docker_bioconductor-hpastainr|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-stringr: 
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

      mamba install bioconductor-hpastainr

   and update with::

      mamba update bioconductor-hpastainr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hpastainr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hpastainr:<tag>

   (see `bioconductor-hpastainr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hpastainr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpastainr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpastainr
   :alt:   (downloads)
.. |docker_bioconductor-hpastainr| image:: https://quay.io/repository/biocontainers/bioconductor-hpastainr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpastainr
.. _`bioconductor-hpastainr/tags`: https://quay.io/repository/biocontainers/bioconductor-hpastainr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpastainr";
        var versions = ["1.9.0","1.8.0","1.4.0","1.2.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpastainr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpastainr/README.html