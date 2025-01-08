:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionet'
.. highlight: bash

bioconductor-bionet
===================

.. conda:recipe:: bioconductor-bionet
   :replaces_section_title:
   :noindex:

   Routines for the functional analysis of biological networks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioNet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bionet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionet/meta.yaml>`_
   :links: biotools: :biotools:`bionet`

   This package provides functions for the integrated analysis of protein\-protein interaction networks and the detection of functional modules. Different datasets can be integrated into the network by assigning p\-values of statistical tests to the nodes of the network. E.g. p\-values obtained from the differential expression of the genes from an Affymetrix array are assigned to the nodes of the network. By fitting a beta\-uniform mixture model and calculating scores from the p\-values\, overall scores of network regions can be calculated and an integer linear programming algorithm identifies the maximum scoring subnetwork.


.. conda:package:: bioconductor-bionet

   |downloads_bioconductor-bionet| |docker_bioconductor-bionet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.47.0-0</code>,  </span></summary>
      

      ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.47.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends bioconductor-rbgl: ``>=1.82.0,<1.83.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: ``>=1.0.1``
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

      mamba install bioconductor-bionet

   and update with::

      mamba update bioconductor-bionet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bionet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bionet:<tag>

   (see `bioconductor-bionet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bionet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bionet
   :alt:   (downloads)
.. |docker_bioconductor-bionet| image:: https://quay.io/repository/biocontainers/bioconductor-bionet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionet
.. _`bioconductor-bionet/tags`: https://quay.io/repository/biocontainers/bioconductor-bionet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bionet";
        var versions = ["1.66.0","1.62.0","1.60.0","1.58.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionet/README.html