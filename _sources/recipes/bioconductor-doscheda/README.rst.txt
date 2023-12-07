:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doscheda'
.. highlight: bash

bioconductor-doscheda
=====================

.. conda:recipe:: bioconductor-doscheda
   :replaces_section_title:
   :noindex:

   A DownStream Chemo\-Proteomics Analysis Pipeline

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Doscheda.html
   :license: GPL-3
   :recipe: /`bioconductor-doscheda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doscheda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doscheda/meta.yaml>`_

   Doscheda focuses on quantitative chemoproteomics used to determine protein interaction profiles of small molecules from whole cell or tissue lysates using Mass Spectrometry data. The package provides a shiny application to run the pipeline\, several visualisations and a downloadable report of an experiment.


.. conda:package:: bioconductor-doscheda

   |downloads_bioconductor-doscheda| |docker_bioconductor-doscheda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-calibrate: 
   :depends r-corrgram: 
   :depends r-drc: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-matrixstats: 
   :depends r-prodlim: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-stringr: 
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

      mamba install bioconductor-doscheda

   and update with::

      mamba update bioconductor-doscheda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-doscheda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-doscheda:<tag>

   (see `bioconductor-doscheda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-doscheda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doscheda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doscheda
   :alt:   (downloads)
.. |docker_bioconductor-doscheda| image:: https://quay.io/repository/biocontainers/bioconductor-doscheda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doscheda
.. _`bioconductor-doscheda/tags`: https://quay.io/repository/biocontainers/bioconductor-doscheda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-doscheda";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doscheda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doscheda/README.html