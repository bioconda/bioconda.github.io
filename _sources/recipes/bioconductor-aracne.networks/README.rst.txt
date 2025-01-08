:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aracne.networks'
.. highlight: bash

bioconductor-aracne.networks
============================

.. conda:recipe:: bioconductor-aracne.networks
   :replaces_section_title:
   :noindex:

   ARACNe\-inferred gene networks from TCGA tumor datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/aracne.networks.html
   :license: file LICENSE
   :recipe: /`bioconductor-aracne.networks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aracne.networks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aracne.networks/meta.yaml>`_

   This package contains ARACNe\-inferred networks from TCGA tumor datasets. It also contains a function to export them into plain\-text format.


.. conda:package:: bioconductor-aracne.networks

   |downloads_bioconductor-aracne.networks| |docker_bioconductor-aracne.networks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-viper: ``>=1.40.0,<1.41.0``
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

      mamba install bioconductor-aracne.networks

   and update with::

      mamba update bioconductor-aracne.networks

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aracne.networks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aracne.networks:<tag>

   (see `bioconductor-aracne.networks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aracne.networks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aracne.networks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aracne.networks
   :alt:   (downloads)
.. |docker_bioconductor-aracne.networks| image:: https://quay.io/repository/biocontainers/bioconductor-aracne.networks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aracne.networks
.. _`bioconductor-aracne.networks/tags`: https://quay.io/repository/biocontainers/bioconductor-aracne.networks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aracne.networks";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aracne.networks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aracne.networks/README.html