:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rpx'
.. highlight: bash

bioconductor-rpx
================

.. conda:recipe:: bioconductor-rpx
   :replaces_section_title:
   :noindex:

   R Interface to the ProteomeXchange Repository

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rpx.html
   :license: GPL-2
   :recipe: /`bioconductor-rpx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpx/meta.yaml>`_
   :links: biotools: :biotools:`rpx`, doi: :doi:`10.1038/nbt.2839`

   The rpx package implements an interface to proteomics data submitted to the ProteomeXchange consortium.


.. conda:package:: bioconductor-rpx

   |downloads_bioconductor-rpx| |docker_bioconductor-rpx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.1.12-0</code>,  <code>2.0.0-0</code>,  <code>1.26.2-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.1.12-0``,  ``2.0.0-0``,  ``1.26.2-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
   :depends r-jsonlite: 
   :depends r-rcurl: 
   :depends r-xml2: 
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

      mamba install bioconductor-rpx

   and update with::

      mamba update bioconductor-rpx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rpx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rpx:<tag>

   (see `bioconductor-rpx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rpx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rpx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rpx
   :alt:   (downloads)
.. |docker_bioconductor-rpx| image:: https://quay.io/repository/biocontainers/bioconductor-rpx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rpx
.. _`bioconductor-rpx/tags`: https://quay.io/repository/biocontainers/bioconductor-rpx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rpx";
        var versions = ["2.14.0","2.10.0","2.8.0","2.6.0","2.1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rpx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rpx/README.html