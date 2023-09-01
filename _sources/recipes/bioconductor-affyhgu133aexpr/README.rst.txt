:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyhgu133aexpr'
.. highlight: bash

bioconductor-affyhgu133aexpr
============================

.. conda:recipe:: bioconductor-affyhgu133aexpr
   :replaces_section_title:
   :noindex:

   Affymetrix Human hgu133a Array \(GPL96\) Expression Data Package

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/Affyhgu133aExpr.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-affyhgu133aexpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyhgu133aexpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyhgu133aexpr/meta.yaml>`_

   Contains pre\-built human \(GPL96\) database of gene expression profiles. The gene expression data was downloaded from NCBI GEO\, preprocessed and normalized consistently. The biological context of each sample was recorded and manually verified based on the sample description in GEO.


.. conda:package:: bioconductor-affyhgu133aexpr

   |downloads_bioconductor-affyhgu133aexpr| |docker_bioconductor-affyhgu133aexpr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.20.0-0``

      
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

      mamba install bioconductor-affyhgu133aexpr

   and update with::

      mamba update bioconductor-affyhgu133aexpr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affyhgu133aexpr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyhgu133aexpr:<tag>

   (see `bioconductor-affyhgu133aexpr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyhgu133aexpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyhgu133aexpr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyhgu133aexpr
   :alt:   (downloads)
.. |docker_bioconductor-affyhgu133aexpr| image:: https://quay.io/repository/biocontainers/bioconductor-affyhgu133aexpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyhgu133aexpr
.. _`bioconductor-affyhgu133aexpr/tags`: https://quay.io/repository/biocontainers/bioconductor-affyhgu133aexpr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affyhgu133aexpr";
        var versions = ["1.38.0","1.35.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyhgu133aexpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyhgu133aexpr/README.html