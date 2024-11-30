:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellnoptr'
.. highlight: bash

bioconductor-cellnoptr
======================

.. conda:recipe:: bioconductor-cellnoptr
   :replaces_section_title:
   :noindex:

   Training of boolean logic models of signalling networks using prior knowledge networks and perturbation data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CellNOptR.html
   :license: GPL-3
   :recipe: /`bioconductor-cellnoptr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellnoptr/meta.yaml>`_
   :links: biotools: :biotools:`cellnoptr`, doi: :doi:`10.1186/1752-0509-6-133`

   This package does optimisation of boolean logic networks of signalling pathways based on a previous knowledge network and a set of data upon perturbation of the nodes in the network.


.. conda:package:: bioconductor-cellnoptr

   |downloads_bioconductor-cellnoptr| |docker_bioconductor-cellnoptr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.1-0``,  ``1.23.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0a0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0a0``
   :depends graphviz: ``>=9.0.0,<10.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-rcurl: 
   :depends r-rmarkdown: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-xml: 
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

      mamba install bioconductor-cellnoptr

   and update with::

      mamba update bioconductor-cellnoptr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellnoptr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellnoptr:<tag>

   (see `bioconductor-cellnoptr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellnoptr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellnoptr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellnoptr
   :alt:   (downloads)
.. |docker_bioconductor-cellnoptr| image:: https://quay.io/repository/biocontainers/bioconductor-cellnoptr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellnoptr
.. _`bioconductor-cellnoptr/tags`: https://quay.io/repository/biocontainers/bioconductor-cellnoptr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellnoptr";
        var versions = ["1.48.0","1.46.0","1.44.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellnoptr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellnoptr/README.html