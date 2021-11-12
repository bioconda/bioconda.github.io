:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cfdnapro'
.. highlight: bash

bioconductor-cfdnapro
=====================

.. conda:recipe:: bioconductor-cfdnapro
   :replaces_section_title:
   :noindex:

   cfDNAPro Helps Characterise and Visualise Whole Genome Sequencing Data from Liquid Biopsy

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cfDNAPro.html
   :license: GPL-3
   :recipe: /`bioconductor-cfdnapro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnapro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnapro/meta.yaml>`_

   cfDNA fragment size metrics are important features for utilizing liquid biopsy in tumor early detection\, diagnosis\, therapy personlization and monitoring. Analyzing and visualizing insert size metrics could be time intensive. This package intends to simplify this exploration process\, and it offers two sets of functions for data characterization and data visualization.


.. conda:package:: bioconductor-cfdnapro

   |downloads_bioconductor-cfdnapro| |docker_bioconductor-cfdnapro|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: ``>=0.8.3``
   :depends r-ggplot2: ``>=3.2.1``
   :depends r-magrittr: ``>=1.5.0``
   :depends r-quantmod: ``>=0.4``
   :depends r-rlang: ``>=0.4.0``
   :depends r-stringr: ``>=1.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cfdnapro

   and update with::

      conda update bioconductor-cfdnapro

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cfdnapro:<tag>

   (see `bioconductor-cfdnapro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cfdnapro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cfdnapro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cfdnapro
   :alt:   (downloads)
.. |docker_bioconductor-cfdnapro| image:: https://quay.io/repository/biocontainers/bioconductor-cfdnapro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cfdnapro
.. _`bioconductor-cfdnapro/tags`: https://quay.io/repository/biocontainers/bioconductor-cfdnapro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cfdnapro";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cfdnapro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cfdnapro/README.html