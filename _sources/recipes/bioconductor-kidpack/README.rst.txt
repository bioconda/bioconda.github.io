:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kidpack'
.. highlight: bash

bioconductor-kidpack
====================

.. conda:recipe:: bioconductor-kidpack
   :replaces_section_title:
   :noindex:

   DKFZ kidney package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/kidpack.html
   :license: GPL-2
   :recipe: /`bioconductor-kidpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kidpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kidpack/meta.yaml>`_

   kidney microarray data


.. conda:package:: bioconductor-kidpack

   |downloads_bioconductor-kidpack| |docker_bioconductor-kidpack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.31.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.31.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
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

      mamba install bioconductor-kidpack

   and update with::

      mamba update bioconductor-kidpack

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kidpack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kidpack:<tag>

   (see `bioconductor-kidpack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kidpack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kidpack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kidpack
   :alt:   (downloads)
.. |docker_bioconductor-kidpack| image:: https://quay.io/repository/biocontainers/bioconductor-kidpack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kidpack
.. _`bioconductor-kidpack/tags`: https://quay.io/repository/biocontainers/bioconductor-kidpack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kidpack";
        var versions = ["1.44.0","1.42.0","1.40.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kidpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kidpack/README.html