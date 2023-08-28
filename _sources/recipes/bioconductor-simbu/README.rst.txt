:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simbu'
.. highlight: bash

bioconductor-simbu
==================

.. conda:recipe:: bioconductor-simbu
   :replaces_section_title:
   :noindex:

   Simulate Bulk RNA\-seq Datasets from Single\-Cell Datasets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SimBu.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-simbu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbu/meta.yaml>`_

   SimBu can be used to simulate bulk RNA\-seq datasets with known cell type fractions. You can either use your own single\-cell study for the simulation or the sfaira database. Different pre\-defined simulation scenarios exist\, as are options to run custom simulations. Additionally\, expression values can be adapted by adding an mRNA bias\, which produces more biologically relevant simulations.


.. conda:package:: bioconductor-simbu

   |downloads_bioconductor-simbu| |docker_bioconductor-simbu|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-phyloseq: ``>=1.44.0,<1.45.0``
   :depends bioconductor-sparsematrixstats: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-matrix: ``>=1.3.3``
   :depends r-proxyc: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-reticulate: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-simbu

   and update with::

      mamba update bioconductor-simbu

  To create a new environment, run::

      mamba create --name myenvname bioconductor-simbu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simbu:<tag>

   (see `bioconductor-simbu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simbu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simbu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simbu
   :alt:   (downloads)
.. |docker_bioconductor-simbu| image:: https://quay.io/repository/biocontainers/bioconductor-simbu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simbu
.. _`bioconductor-simbu/tags`: https://quay.io/repository/biocontainers/bioconductor-simbu?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simbu";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simbu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simbu/README.html