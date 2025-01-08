:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tadcompare'
.. highlight: bash

bioconductor-tadcompare
=======================

.. conda:recipe:: bioconductor-tadcompare
   :replaces_section_title:
   :noindex:

   TADCompare\: Identification and characterization of differential TADs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TADCompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tadcompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadcompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadcompare/meta.yaml>`_

   TADCompare is an R package designed to identify and characterize differential Topologically Associated Domains \(TADs\) between multiple Hi\-C contact matrices. It contains functions for finding differential TADs between two datasets\, finding differential TADs over time and identifying consensus TADs across multiple matrices. It takes all of the main types of HiC input and returns simple\, comprehensive\, easy to analyze results.


.. conda:package:: bioconductor-tadcompare

   |downloads_bioconductor-tadcompare| |docker_bioconductor-tadcompare|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-hiccompare: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-primme: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
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

      mamba install bioconductor-tadcompare

   and update with::

      mamba update bioconductor-tadcompare

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tadcompare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tadcompare:<tag>

   (see `bioconductor-tadcompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tadcompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tadcompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tadcompare
   :alt:   (downloads)
.. |docker_bioconductor-tadcompare| image:: https://quay.io/repository/biocontainers/bioconductor-tadcompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tadcompare
.. _`bioconductor-tadcompare/tags`: https://quay.io/repository/biocontainers/bioconductor-tadcompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tadcompare";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tadcompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tadcompare/README.html