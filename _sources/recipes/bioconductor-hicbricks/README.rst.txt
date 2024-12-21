:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicbricks'
.. highlight: bash

bioconductor-hicbricks
======================

.. conda:recipe:: bioconductor-hicbricks
   :replaces_section_title:
   :noindex:

   Framework for Storing and Accessing Hi\-C Data Through HDF Files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HiCBricks.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicbricks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicbricks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicbricks/meta.yaml>`_

   HiCBricks is a library designed for handling large high\-resolution Hi\-C datasets. Over the years\, the Hi\-C field has experienced a rapid increase in the size and complexity of datasets. HiCBricks is meant to overcome the challenges related to the analysis of such large datasets within the R environment. HiCBricks offers user\-friendly and efficient solutions for handling large high\-resolution Hi\-C datasets. The package provides an R\/Bioconductor framework with the bricks to build more complex data analysis pipelines and algorithms. HiCBricks already incorporates example algorithms for calling domain boundaries and functions for high quality data visualization.


.. conda:package:: bioconductor-hicbricks

   |downloads_bioconductor-hicbricks| |docker_bioconductor-hicbricks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-ggplot2: 
   :depends r-jsonlite: 
   :depends r-r.utils: 
   :depends r-r6: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-viridis: 
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

      mamba install bioconductor-hicbricks

   and update with::

      mamba update bioconductor-hicbricks

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicbricks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicbricks:<tag>

   (see `bioconductor-hicbricks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicbricks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicbricks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicbricks
   :alt:   (downloads)
.. |docker_bioconductor-hicbricks| image:: https://quay.io/repository/biocontainers/bioconductor-hicbricks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicbricks
.. _`bioconductor-hicbricks/tags`: https://quay.io/repository/biocontainers/bioconductor-hicbricks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicbricks";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicbricks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicbricks/README.html