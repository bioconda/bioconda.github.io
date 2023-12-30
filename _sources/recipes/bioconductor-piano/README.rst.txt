:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-piano'
.. highlight: bash

bioconductor-piano
==================

.. conda:recipe:: bioconductor-piano
   :replaces_section_title:
   :noindex:

   Platform for integrative analysis of omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/piano.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-piano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-piano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-piano/meta.yaml>`_
   :links: biotools: :biotools:`piano`

   Piano performs gene set analysis using various statistical methods\, from different gene level statistics and a wide range of gene\-set collections. Furthermore\, the Piano package contains functions for combining the results of multiple runs of gene set analyses.


.. conda:package:: bioconductor-piano

   |downloads_bioconductor-piano| |docker_bioconductor-piano|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.2-0``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``,  ``1.16.4-0``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-gplots: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-relations: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-shinyjs: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-piano

   and update with::

      mamba update bioconductor-piano

  To create a new environment, run::

      mamba create --name myenvname bioconductor-piano

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-piano:<tag>

   (see `bioconductor-piano/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-piano| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-piano.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-piano
   :alt:   (downloads)
.. |docker_bioconductor-piano| image:: https://quay.io/repository/biocontainers/bioconductor-piano/status
   :target: https://quay.io/repository/biocontainers/bioconductor-piano
.. _`bioconductor-piano/tags`: https://quay.io/repository/biocontainers/bioconductor-piano?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-piano";
        var versions = ["2.18.0","2.16.0","2.14.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-piano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-piano/README.html