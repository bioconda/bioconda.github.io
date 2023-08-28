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
      
      

      ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-lipidomer

   and update with::

      mamba update r-lipidomer

  To create a new environment, run::

      mamba create --name myenvname r-lipidomer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.1.2","0.1.2","0.1.2"];
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