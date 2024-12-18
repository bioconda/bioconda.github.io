:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affymoe4302expr'
.. highlight: bash

bioconductor-affymoe4302expr
============================

.. conda:recipe:: bioconductor-affymoe4302expr
   :replaces_section_title:
   :noindex:

   Affymetrix Mouse Genome 430 2.0 Array \(GPL1261\) Expression Data Package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/Affymoe4302Expr.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-affymoe4302expr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymoe4302expr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymoe4302expr/meta.yaml>`_

   Contains pre\-built mouse \(GPL1261\) database of gene expression profiles. The gene expression data was downloaded from NCBI GEO\, preprocessed and normalized consistently. The biological context of each sample was recorded and manually verified based on the sample description in GEO.


.. conda:package:: bioconductor-affymoe4302expr

   |downloads_bioconductor-affymoe4302expr| |docker_bioconductor-affymoe4302expr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-affymoe4302expr

   and update with::

      mamba update bioconductor-affymoe4302expr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affymoe4302expr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affymoe4302expr:<tag>

   (see `bioconductor-affymoe4302expr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affymoe4302expr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affymoe4302expr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affymoe4302expr
   :alt:   (downloads)
.. |docker_bioconductor-affymoe4302expr| image:: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr
.. _`bioconductor-affymoe4302expr/tags`: https://quay.io/repository/biocontainers/bioconductor-affymoe4302expr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affymoe4302expr";
        var versions = ["1.44.0","1.40.0","1.38.0","1.35.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affymoe4302expr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affymoe4302expr/README.html