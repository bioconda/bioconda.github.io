:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-davidtiling'
.. highlight: bash

bioconductor-davidtiling
========================

.. conda:recipe:: bioconductor-davidtiling
   :replaces_section_title:
   :noindex:

   Data and analysis scripts for David\, Huber et al. yeast tiling array paper

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/davidTiling.html
   :license: LGPL
   :recipe: /`bioconductor-davidtiling <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-davidtiling>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-davidtiling/meta.yaml>`_

   This package contains the data for the paper by L. David et al. in PNAS 2006 \(PMID 16569694\)\: 8 CEL files of Affymetrix genechips\, an ExpressionSet object with the raw feature data\, a probe annotation data structure for the chip and the yeast genome annotation \(GFF file\) that was used. In addition\, some custom\-written analysis functions are provided\, as well as R scripts in the scripts directory.


.. conda:package:: bioconductor-davidtiling

   |downloads_bioconductor-davidtiling| |docker_bioconductor-davidtiling|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-tilingarray: ``>=1.78.0,<1.79.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-davidtiling

   and update with::

      mamba update bioconductor-davidtiling

  To create a new environment, run::

      mamba create --name myenvname bioconductor-davidtiling

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-davidtiling:<tag>

   (see `bioconductor-davidtiling/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-davidtiling| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-davidtiling.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-davidtiling
   :alt:   (downloads)
.. |docker_bioconductor-davidtiling| image:: https://quay.io/repository/biocontainers/bioconductor-davidtiling/status
   :target: https://quay.io/repository/biocontainers/bioconductor-davidtiling
.. _`bioconductor-davidtiling/tags`: https://quay.io/repository/biocontainers/bioconductor-davidtiling?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-davidtiling";
        var versions = ["1.40.0","1.38.0","1.34.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-davidtiling/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-davidtiling/README.html