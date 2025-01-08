:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-connectivitymap'
.. highlight: bash

bioconductor-connectivitymap
============================

.. conda:recipe:: bioconductor-connectivitymap
   :replaces_section_title:
   :noindex:

   Functional connections between drugs\, genes and diseases as revealed by common gene\-expression changes

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ConnectivityMap.html
   :license: GPL-3
   :recipe: /`bioconductor-connectivitymap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-connectivitymap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-connectivitymap/meta.yaml>`_

   The Broad Institute\'s Connectivity Map \(cmap02\) is a \"large reference catalogue of gene\-expression data from cultured human cells perturbed with many chemicals and genetic reagents\"\, containing more than 7000 gene expression profiles and 1300 small molecules.


.. conda:package:: bioconductor-connectivitymap

   |downloads_bioconductor-connectivitymap| |docker_bioconductor-connectivitymap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      
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

      mamba install bioconductor-connectivitymap

   and update with::

      mamba update bioconductor-connectivitymap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-connectivitymap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-connectivitymap:<tag>

   (see `bioconductor-connectivitymap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-connectivitymap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-connectivitymap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-connectivitymap
   :alt:   (downloads)
.. |docker_bioconductor-connectivitymap| image:: https://quay.io/repository/biocontainers/bioconductor-connectivitymap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-connectivitymap
.. _`bioconductor-connectivitymap/tags`: https://quay.io/repository/biocontainers/bioconductor-connectivitymap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-connectivitymap";
        var versions = ["1.42.0","1.38.0","1.36.0","1.33.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-connectivitymap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-connectivitymap/README.html