:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromstardata'
.. highlight: bash

bioconductor-chromstardata
==========================

.. conda:recipe:: bioconductor-chromstardata
   :replaces_section_title:
   :noindex:

   ChIP\-seq data for Demonstration Purposes

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/chromstaRData.html
   :license: GPL-3
   :recipe: /`bioconductor-chromstardata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstardata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstardata/meta.yaml>`_

   ChIP\-seq data for demonstration purposes in the chromstaR package.


.. conda:package:: bioconductor-chromstardata

   |downloads_bioconductor-chromstardata| |docker_bioconductor-chromstardata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.23.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.23.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
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

      mamba install bioconductor-chromstardata

   and update with::

      mamba update bioconductor-chromstardata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chromstardata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromstardata:<tag>

   (see `bioconductor-chromstardata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromstardata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromstardata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromstardata
   :alt:   (downloads)
.. |docker_bioconductor-chromstardata| image:: https://quay.io/repository/biocontainers/bioconductor-chromstardata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromstardata
.. _`bioconductor-chromstardata/tags`: https://quay.io/repository/biocontainers/bioconductor-chromstardata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromstardata";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromstardata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromstardata/README.html