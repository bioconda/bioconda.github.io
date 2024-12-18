:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancerdata'
.. highlight: bash

bioconductor-cancerdata
=======================

.. conda:recipe:: bioconductor-cancerdata
   :replaces_section_title:
   :noindex:

   Development and validation of diagnostic tests from high\-dimensional molecular data\: Datasets

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/cancerdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cancerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerdata/meta.yaml>`_

   Dataset for the R package cancerclass


.. conda:package:: bioconductor-cancerdata

   |downloads_bioconductor-cancerdata| |docker_bioconductor-cancerdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
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

      mamba install bioconductor-cancerdata

   and update with::

      mamba update bioconductor-cancerdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cancerdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancerdata:<tag>

   (see `bioconductor-cancerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancerdata
   :alt:   (downloads)
.. |docker_bioconductor-cancerdata| image:: https://quay.io/repository/biocontainers/bioconductor-cancerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancerdata
.. _`bioconductor-cancerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-cancerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cancerdata";
        var versions = ["1.44.0","1.40.0","1.38.0","1.36.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancerdata/README.html