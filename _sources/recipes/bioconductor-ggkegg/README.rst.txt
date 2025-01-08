:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggkegg'
.. highlight: bash

bioconductor-ggkegg
===================

.. conda:recipe:: bioconductor-ggkegg
   :replaces_section_title:
   :noindex:

   Analyzing and visualizing KEGG information using the grammar of graphics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ggkegg.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ggkegg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggkegg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggkegg/meta.yaml>`_

   This package aims to import\, parse\, and analyze KEGG data such as KEGG PATHWAY and KEGG MODULE. The package supports visualizing KEGG information using ggplot2 and ggraph through using the grammar of graphics. The package enables the direct visualization of the results from various omics analysis packages.


.. conda:package:: bioconductor-ggkegg

   |downloads_bioconductor-ggkegg| |docker_bioconductor-ggkegg|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-getoptlong: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-gtable: 
   :depends r-igraph: 
   :depends r-magick: 
   :depends r-patchwork: 
   :depends r-shadowtext: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-xml: 
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

      mamba install bioconductor-ggkegg

   and update with::

      mamba update bioconductor-ggkegg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggkegg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggkegg:<tag>

   (see `bioconductor-ggkegg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggkegg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggkegg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggkegg
   :alt:   (downloads)
.. |docker_bioconductor-ggkegg| image:: https://quay.io/repository/biocontainers/bioconductor-ggkegg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggkegg
.. _`bioconductor-ggkegg/tags`: https://quay.io/repository/biocontainers/bioconductor-ggkegg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggkegg";
        var versions = ["1.4.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggkegg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggkegg/README.html