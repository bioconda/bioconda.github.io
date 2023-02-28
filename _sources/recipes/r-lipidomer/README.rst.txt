:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-lipidomer'
.. highlight: bash

r-lipidomer
===========

.. conda:recipe:: r-lipidomer
   :replaces_section_title:
   :noindex:

   Create lipidome\-wide heatmaps of statistics with the \'lipidomeR\'. The \'lipidomeR\' provides a streamlined pipeline for the systematic interpretation of the lipidome through publication\-ready visualizations of regression models fitted on lipidomics data. With \'lipidomeR\'\, associations between covariates and the lipidome can be interpreted systematically and intuitively through heatmaps\, where lipids are categorized by the lipid class and are presented on two\-dimensional maps organized by the lipid size and level of saturation. This way\, the \'lipidomeR\' helps you gain an immediate understanding of the multivariate patterns in the lipidome already at first glance. You can create lipidome\-wide heatmaps of statistical associations\, changes\, differences\, variation\, or other lipid\-specific values. The heatmaps are provided with publication\-ready quality and the results behind the visualizations are based on rigorous statistical models.

   :homepage: https://tommi-s.github.io/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-lipidomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lipidomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-lipidomer/meta.yaml>`_

   


.. conda:package:: r-lipidomer

   |downloads_r-lipidomer| |docker_r-lipidomer|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-reshape2: 
   :depends r-shadowtext: 
   :depends r-stringr: 
   :depends r-tableone: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-lipidomer

   and update with::

      conda update r-lipidomer

   or use the docker container::

      docker pull quay.io/biocontainers/r-lipidomer:<tag>

   (see `r-lipidomer/tags`_ for valid values for ``<tag>``)


.. |downloads_r-lipidomer| image:: https://img.shields.io/conda/dn/bioconda/r-lipidomer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-lipidomer
   :alt:   (downloads)
.. |docker_r-lipidomer| image:: https://quay.io/repository/biocontainers/r-lipidomer/status
   :target: https://quay.io/repository/biocontainers/r-lipidomer
.. _`r-lipidomer/tags`: https://quay.io/repository/biocontainers/r-lipidomer?tab=tags


.. raw:: html

    <script>
        var package = "r-lipidomer";
        var versions = ["0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-lipidomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-lipidomer/README.html