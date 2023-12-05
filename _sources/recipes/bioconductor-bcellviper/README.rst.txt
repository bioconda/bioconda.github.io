:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bcellviper'
.. highlight: bash

bioconductor-bcellviper
=======================

.. conda:recipe:: bioconductor-bcellviper
   :replaces_section_title:
   :noindex:

   Human B\-cell transcriptional interactome and normal human B\-cell expression data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/bcellViper.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-bcellviper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcellviper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcellviper/meta.yaml>`_

   This package provides a human B\-cell context\-specific transcriptional regulatory network and a human normal B\-cells dataset for the examples in package viper.


.. conda:package:: bioconductor-bcellviper

   |downloads_bioconductor-bcellviper| |docker_bioconductor-bcellviper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-bcellviper

   and update with::

      mamba update bioconductor-bcellviper

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bcellviper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bcellviper:<tag>

   (see `bioconductor-bcellviper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bcellviper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bcellviper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bcellviper
   :alt:   (downloads)
.. |docker_bioconductor-bcellviper| image:: https://quay.io/repository/biocontainers/bioconductor-bcellviper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bcellviper
.. _`bioconductor-bcellviper/tags`: https://quay.io/repository/biocontainers/bioconductor-bcellviper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bcellviper";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcellviper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcellviper/README.html