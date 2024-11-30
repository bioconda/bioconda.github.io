:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icobra'
.. highlight: bash

bioconductor-icobra
===================

.. conda:recipe:: bioconductor-icobra
   :replaces_section_title:
   :noindex:

   Comparison and Visualization of Ranking and Assignment Methods

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iCOBRA.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-icobra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icobra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icobra/meta.yaml>`_
   :links: biotools: :biotools:`icobra`

   This package provides functions for calculation and visualization of performance metrics for evaluation of ranking and binary classification \(assignment\) methods. Various types of performance plots can be generated programmatically. The package also contains a shiny application for interactive exploration of results.


.. conda:package:: bioconductor-icobra

   |downloads_bioconductor-icobra| |docker_bioconductor-icobra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: ``>=2.0.0``
   :depends r-markdown: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-scales: 
   :depends r-shiny: ``>=0.9.1.9008``
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-upsetr: 
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

      mamba install bioconductor-icobra

   and update with::

      mamba update bioconductor-icobra

  To create a new environment, run::

      mamba create --name myenvname bioconductor-icobra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icobra:<tag>

   (see `bioconductor-icobra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icobra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icobra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icobra
   :alt:   (downloads)
.. |docker_bioconductor-icobra| image:: https://quay.io/repository/biocontainers/bioconductor-icobra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icobra
.. _`bioconductor-icobra/tags`: https://quay.io/repository/biocontainers/bioconductor-icobra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-icobra";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icobra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icobra/README.html