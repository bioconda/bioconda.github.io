:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidysinglecellexperiment'
.. highlight: bash

bioconductor-tidysinglecellexperiment
=====================================

.. conda:recipe:: bioconductor-tidysinglecellexperiment
   :replaces_section_title:
   :noindex:

   Brings SingleCellExperiment to the Tidyverse

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/tidySingleCellExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-tidysinglecellexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysinglecellexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysinglecellexperiment/meta.yaml>`_

   tidySingleCellExperiment is an adapter that abstracts the \'SingleCellExperiment\' container in the form of tibble and allows the data manipulation\, plotting and nesting using \'tidyverse\'


.. conda:package:: bioconductor-tidysinglecellexperiment

   |downloads_bioconductor-tidysinglecellexperiment| |docker_bioconductor-tidysinglecellexperiment|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-ellipsis: 
   :depends r-fansi: 
   :depends r-ggplot2: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-pillar: 
   :depends r-plotly: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-ttservice: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tidysinglecellexperiment

   and update with::

      conda update bioconductor-tidysinglecellexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidysinglecellexperiment:<tag>

   (see `bioconductor-tidysinglecellexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidysinglecellexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidysinglecellexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidysinglecellexperiment
   :alt:   (downloads)
.. |docker_bioconductor-tidysinglecellexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-tidysinglecellexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidysinglecellexperiment
.. _`bioconductor-tidysinglecellexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-tidysinglecellexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidysinglecellexperiment";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidysinglecellexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidysinglecellexperiment/README.html