:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioconcotk'
.. highlight: bash

bioconductor-bioconcotk
=======================

.. conda:recipe:: bioconductor-bioconcotk
   :replaces_section_title:
   :noindex:

   Bioconductor components for general cancer genomics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocOncoTK.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioconcotk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioconcotk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioconcotk/meta.yaml>`_

   Provide a central interface to various tools for genome\-scale analysis of cancer studies.


.. conda:package:: bioconductor-bioconcotk

   |downloads_bioconductor-bioconcotk| |docker_bioconductor-bioconcotk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-curatedtcgadata: ``>=1.24.0,<1.25.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bigrquery: 
   :depends r-car: 
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-httr: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-rjson: 
   :depends r-scales: 
   :depends r-shiny: 
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

      mamba install bioconductor-bioconcotk

   and update with::

      mamba update bioconductor-bioconcotk

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bioconcotk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioconcotk:<tag>

   (see `bioconductor-bioconcotk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioconcotk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioconcotk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioconcotk
   :alt:   (downloads)
.. |docker_bioconductor-bioconcotk| image:: https://quay.io/repository/biocontainers/bioconductor-bioconcotk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioconcotk
.. _`bioconductor-bioconcotk/tags`: https://quay.io/repository/biocontainers/bioconductor-bioconcotk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioconcotk";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioconcotk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioconcotk/README.html