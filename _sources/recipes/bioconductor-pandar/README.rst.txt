:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pandar'
.. highlight: bash

bioconductor-pandar
===================

.. conda:recipe:: bioconductor-pandar
   :replaces_section_title:
   :noindex:

   PANDA Algorithm

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/pandaR.html
   :license: GPL-2
   :recipe: /`bioconductor-pandar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pandar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pandar/meta.yaml>`_
   :links: biotools: :biotools:`pandar`

   Runs PANDA\, an algorithm for discovering novel network structure by combining information from multiple complementary data sources.


.. conda:package:: bioconductor-pandar

   |downloads_bioconductor-pandar| |docker_bioconductor-pandar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-plyr: 
   :depends r-reshape: 
   :depends r-runit: 
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

      mamba install bioconductor-pandar

   and update with::

      mamba update bioconductor-pandar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pandar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pandar:<tag>

   (see `bioconductor-pandar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pandar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pandar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pandar
   :alt:   (downloads)
.. |docker_bioconductor-pandar| image:: https://quay.io/repository/biocontainers/bioconductor-pandar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pandar
.. _`bioconductor-pandar/tags`: https://quay.io/repository/biocontainers/bioconductor-pandar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pandar";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pandar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pandar/README.html