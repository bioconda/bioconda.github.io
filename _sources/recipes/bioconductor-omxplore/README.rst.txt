:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omxplore'
.. highlight: bash

bioconductor-omxplore
=====================

.. conda:recipe:: bioconductor-omxplore
   :replaces_section_title:
   :noindex:

   Vizualization tools for \'omics\' datasets with R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/omXplore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-omxplore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omxplore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omxplore/meta.yaml>`_

   This package contains a collection of functions \(written as shiny modules\) for the visualisation and the statistical analysis of omics data. These plots can be displayed individually or embedded in a global Shiny module. Additionaly\, it is possible to integrate third party modules to the main interface of the package omXplore.


.. conda:package:: bioconductor-omxplore

   |downloads_bioconductor-omxplore| |docker_bioconductor-omxplore|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-psmatch: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-factoextra: 
   :depends r-factominer: 
   :depends r-gplots: 
   :depends r-highcharter: 
   :depends r-htmlwidgets: 
   :depends r-rcolorbrewer: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinyjqui: 
   :depends r-shinyjs: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-vioplot: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-omxplore

   and update with::

      mamba update bioconductor-omxplore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omxplore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omxplore:<tag>

   (see `bioconductor-omxplore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omxplore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omxplore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omxplore
   :alt:   (downloads)
.. |docker_bioconductor-omxplore| image:: https://quay.io/repository/biocontainers/bioconductor-omxplore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omxplore
.. _`bioconductor-omxplore/tags`: https://quay.io/repository/biocontainers/bioconductor-omxplore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omxplore";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omxplore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omxplore/README.html