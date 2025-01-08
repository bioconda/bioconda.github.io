:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metacyto'
.. highlight: bash

bioconductor-metacyto
=====================

.. conda:recipe:: bioconductor-metacyto
   :replaces_section_title:
   :noindex:

   MetaCyto\: A package for meta\-analysis of cytometry data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetaCyto.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-metacyto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metacyto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metacyto/meta.yaml>`_

   This package provides functions for preprocessing\, automated gating and meta\-analysis of cytometry data. It also provides functions that facilitate the collection of cytometry data from the ImmPort database.


.. conda:package:: bioconductor-metacyto

   |downloads_bioconductor-metacyto| |docker_bioconductor-metacyto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-flowsom: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-fastcluster: 
   :depends r-ggplot2: 
   :depends r-metafor: 
   :depends r-tidyr: ``>=0.7``
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

      mamba install bioconductor-metacyto

   and update with::

      mamba update bioconductor-metacyto

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metacyto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metacyto:<tag>

   (see `bioconductor-metacyto/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metacyto| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metacyto.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metacyto
   :alt:   (downloads)
.. |docker_bioconductor-metacyto| image:: https://quay.io/repository/biocontainers/bioconductor-metacyto/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metacyto
.. _`bioconductor-metacyto/tags`: https://quay.io/repository/biocontainers/bioconductor-metacyto?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metacyto";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metacyto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metacyto/README.html