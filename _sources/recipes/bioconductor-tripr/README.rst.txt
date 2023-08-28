:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tripr'
.. highlight: bash

bioconductor-tripr
==================

.. conda:recipe:: bioconductor-tripr
   :replaces_section_title:
   :noindex:

   T\-cell Receptor\/Immunoglobulin Profiler \(TRIP\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tripr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tripr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tripr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tripr/meta.yaml>`_

   TRIP is a software framework that provides analytics services on antigen receptor \(B cell receptor immunoglobulin\, BcR IG \| T cell receptor\, TR\) gene sequence data. It is a web application written in R Shiny. It takes as input the output files of the IMGT\/HighV\-Quest tool. Users can select to analyze the data from each of the input samples separately\, or the combined data files from all samples and visualize the results accordingly.


.. conda:package:: bioconductor-tripr

   |downloads_bioconductor-tripr| |docker_bioconductor-tripr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-config: ``>=0.3.1``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-golem: ``>=0.3.1``
   :depends r-gridextra: 
   :depends r-plot3d: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-shiny: ``>=1.6.0``
   :depends r-shinybs: 
   :depends r-shinyfiles: 
   :depends r-shinyjs: 
   :depends r-stringdist: 
   :depends r-stringr: 
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

      mamba install bioconductor-tripr

   and update with::

      mamba update bioconductor-tripr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tripr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tripr:<tag>

   (see `bioconductor-tripr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tripr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tripr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tripr
   :alt:   (downloads)
.. |docker_bioconductor-tripr| image:: https://quay.io/repository/biocontainers/bioconductor-tripr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tripr
.. _`bioconductor-tripr/tags`: https://quay.io/repository/biocontainers/bioconductor-tripr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tripr";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tripr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tripr/README.html