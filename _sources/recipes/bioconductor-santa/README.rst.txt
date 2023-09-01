:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-santa'
.. highlight: bash

bioconductor-santa
==================

.. conda:recipe:: bioconductor-santa
   :replaces_section_title:
   :noindex:

   Spatial Analysis of Network Associations

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SANTA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-santa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-santa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-santa/meta.yaml>`_

   This package provides methods for measuring the strength of association between a network and a phenotype. It does this by measuring clustering of the phenotype across the network \(Knet\). Vertices can also be individually ranked by their strength of association with high\-weight vertices \(Knode\).


.. conda:package:: bioconductor-santa

   |downloads_bioconductor-santa| |docker_bioconductor-santa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.34.0-2</code>,  <code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.30.0-2</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.34.0-2``,  ``2.34.0-1``,  ``2.34.0-0``,  ``2.30.0-2``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
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

      mamba install bioconductor-santa

   and update with::

      mamba update bioconductor-santa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-santa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-santa:<tag>

   (see `bioconductor-santa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-santa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-santa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-santa
   :alt:   (downloads)
.. |docker_bioconductor-santa| image:: https://quay.io/repository/biocontainers/bioconductor-santa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-santa
.. _`bioconductor-santa/tags`: https://quay.io/repository/biocontainers/bioconductor-santa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-santa";
        var versions = ["2.36.0","2.34.0","2.34.0","2.34.0","2.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-santa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-santa/README.html