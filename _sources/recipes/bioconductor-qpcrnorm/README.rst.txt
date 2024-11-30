:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qpcrnorm'
.. highlight: bash

bioconductor-qpcrnorm
=====================

.. conda:recipe:: bioconductor-qpcrnorm
   :replaces_section_title:
   :noindex:

   Data\-driven normalization strategies for high\-throughput qPCR data.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/qpcrNorm.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-qpcrnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpcrnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qpcrnorm/meta.yaml>`_
   :links: biotools: :biotools:`qpcrnorm`, doi: :doi:`10.1186/1471-2105-10-110`

   The package contains functions to perform normalization of high\-throughput qPCR data. Basic functions for processing raw Ct data plus functions to generate diagnostic plots are also available.


.. conda:package:: bioconductor-qpcrnorm

   |downloads_bioconductor-qpcrnorm| |docker_bioconductor-qpcrnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-qpcrnorm

   and update with::

      mamba update bioconductor-qpcrnorm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qpcrnorm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qpcrnorm:<tag>

   (see `bioconductor-qpcrnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qpcrnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qpcrnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qpcrnorm
   :alt:   (downloads)
.. |docker_bioconductor-qpcrnorm| image:: https://quay.io/repository/biocontainers/bioconductor-qpcrnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qpcrnorm
.. _`bioconductor-qpcrnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-qpcrnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qpcrnorm";
        var versions = ["1.60.0","1.58.0","1.56.0","1.52.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qpcrnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qpcrnorm/README.html