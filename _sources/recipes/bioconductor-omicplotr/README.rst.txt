:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicplotr'
.. highlight: bash

bioconductor-omicplotr
======================

.. conda:recipe:: bioconductor-omicplotr
   :replaces_section_title:
   :noindex:

   Visual Exploration of Omic Datasets Using a Shiny App

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/omicplotR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicplotr/meta.yaml>`_

   A Shiny app for visual exploration of omic datasets as compositions\, and differential abundance analysis using ALDEx2. Useful for exploring RNA\-seq\, meta\-RNA\-seq\, 16s rRNA gene sequencing with visualizations such as principal component analysis biplots \(coloured using metadata for visualizing each variable\)\, dendrograms and stacked bar plots\, and effect plots \(ALDEx2\). Input is a table of counts and metadata file \(if metadata exists\)\, with options to filter data by count or by metadata to remove low counts\, or to visualize select samples according to selected metadata.


.. conda:package:: bioconductor-omicplotr

   |downloads_bioconductor-omicplotr| |docker_bioconductor-omicplotr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-aldex2: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-compositions: 
   :depends r-dt: 
   :depends r-jsonlite: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
   :depends r-vegan: 
   :depends r-zcompositions: 
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

      mamba install bioconductor-omicplotr

   and update with::

      mamba update bioconductor-omicplotr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omicplotr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicplotr:<tag>

   (see `bioconductor-omicplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicplotr
   :alt:   (downloads)
.. |docker_bioconductor-omicplotr| image:: https://quay.io/repository/biocontainers/bioconductor-omicplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicplotr
.. _`bioconductor-omicplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-omicplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicplotr";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicplotr/README.html