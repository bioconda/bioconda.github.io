:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-statial'
.. highlight: bash

bioconductor-statial
====================

.. conda:recipe:: bioconductor-statial
   :replaces_section_title:
   :noindex:

   A package to identify changes in cell state relative to spatial associations

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Statial.html
   :license: GPL-3
   :recipe: /`bioconductor-statial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-statial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-statial/meta.yaml>`_

   Statial is a suite of functions for identifying changes in cell state. The functionality provided by Statial provides robust quantification of cell type localisation which are invariant to changes in tissue structure. In addition to this Statial uncovers changes in marker expression associated with varying levels of localisation. These features can be used to explore how the structure and function of different cell types may be altered by the agents they are surrounded with.


.. conda:package:: bioconductor-statial

   |downloads_bioconductor-statial| |docker_bioconductor-statial|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-concaveman: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-spatstat.explore: 
   :depends r-spatstat.geom: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-tidyverse: 
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

      mamba install bioconductor-statial

   and update with::

      mamba update bioconductor-statial

  To create a new environment, run::

      mamba create --name myenvname bioconductor-statial

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-statial:<tag>

   (see `bioconductor-statial/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-statial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-statial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-statial
   :alt:   (downloads)
.. |docker_bioconductor-statial| image:: https://quay.io/repository/biocontainers/bioconductor-statial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-statial
.. _`bioconductor-statial/tags`: https://quay.io/repository/biocontainers/bioconductor-statial?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-statial";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-statial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-statial/README.html