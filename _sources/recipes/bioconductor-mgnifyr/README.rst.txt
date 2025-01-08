:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgnifyr'
.. highlight: bash

bioconductor-mgnifyr
====================

.. conda:recipe:: bioconductor-mgnifyr
   :replaces_section_title:
   :noindex:

   R interface to EBI MGnify metagenomics resource

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MGnifyR.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-mgnifyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgnifyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgnifyr/meta.yaml>`_

   Utility package to facilitate integration and analysis of EBI MGnify data in R. The package can be used to import microbial data for instance into TreeSummarizedExperiment \(TreeSE\). In TreeSE format\, the data is directly compatible with miaverse framework.


.. conda:package:: bioconductor-mgnifyr

   |downloads_bioconductor-mgnifyr| |docker_bioconductor-mgnifyr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-mia: ``>=1.14.0,<1.15.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-tidyjson: 
   :depends r-urltools: 
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

      mamba install bioconductor-mgnifyr

   and update with::

      mamba update bioconductor-mgnifyr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mgnifyr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mgnifyr:<tag>

   (see `bioconductor-mgnifyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgnifyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgnifyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mgnifyr
   :alt:   (downloads)
.. |docker_bioconductor-mgnifyr| image:: https://quay.io/repository/biocontainers/bioconductor-mgnifyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgnifyr
.. _`bioconductor-mgnifyr/tags`: https://quay.io/repository/biocontainers/bioconductor-mgnifyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mgnifyr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgnifyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgnifyr/README.html