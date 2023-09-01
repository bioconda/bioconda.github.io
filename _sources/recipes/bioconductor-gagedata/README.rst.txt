:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gagedata'
.. highlight: bash

bioconductor-gagedata
=====================

.. conda:recipe:: bioconductor-gagedata
   :replaces_section_title:
   :noindex:

   Auxillary data for gage package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/gageData.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-gagedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gagedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gagedata/meta.yaml>`_

   This is a supportive data package for the software package\, gage. However\, the data supplied here are also useful for gene set or pathway analysis or microarray data analysis in general. In this package\, we provide two demo microarray dataset\: GSE16873 \(a breast cancer dataset from GEO\) and BMP6 \(originally published as an demo dataset for GAGE\, also registered as GSE13604 in GEO\). This package also includes commonly used gene set data based on KEGG pathways and GO terms for major research species\, including human\, mouse\, rat and budding yeast. Mapping data between common gene IDs for budding yeast are also included.


.. conda:package:: bioconductor-gagedata

   |downloads_bioconductor-gagedata| |docker_bioconductor-gagedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.38.0-0</code>,  <code>2.35.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.28.0-0</code>,  <code>2.27.0-0</code>,  <code>2.26.0-0</code>,  </span></summary>
      

      ``2.38.0-0``,  ``2.35.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-gagedata

   and update with::

      mamba update bioconductor-gagedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gagedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gagedata:<tag>

   (see `bioconductor-gagedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gagedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gagedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gagedata
   :alt:   (downloads)
.. |docker_bioconductor-gagedata| image:: https://quay.io/repository/biocontainers/bioconductor-gagedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gagedata
.. _`bioconductor-gagedata/tags`: https://quay.io/repository/biocontainers/bioconductor-gagedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gagedata";
        var versions = ["2.38.0","2.35.0","2.32.0","2.32.0","2.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gagedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gagedata/README.html