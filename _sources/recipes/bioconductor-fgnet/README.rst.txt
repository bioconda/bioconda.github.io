:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgnet'
.. highlight: bash

bioconductor-fgnet
==================

.. conda:recipe:: bioconductor-fgnet
   :replaces_section_title:
   :noindex:

   Functional Gene Networks derived from biological enrichment analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FGNet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fgnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgnet/meta.yaml>`_

   Build and visualize functional gene and term networks from clustering of enrichment analyses in multiple annotation spaces. The package includes a graphical user interface \(GUI\) and functions to perform the functional enrichment analysis through DAVID\, GeneTerm Linker\, gage \(GSEA\) and topGO.


.. conda:package:: bioconductor-fgnet

   |downloads_bioconductor-fgnet| |docker_bioconductor-fgnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.44.0-0</code>,  <code>3.40.0-0</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  <code>3.34.0-0</code>,  <code>3.32.0-0</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-1</code>,  </span></summary>
      

      ``3.44.0-0``,  ``3.40.0-0``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.34.0-0``,  ``3.32.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-1``,  ``3.24.0-0``,  ``3.23.1-0``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-1``,  ``3.18.0-0``,  ``3.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-hwriter: 
   :depends r-igraph: ``>=0.6``
   :depends r-plotrix: 
   :depends r-png: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
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

      mamba install bioconductor-fgnet

   and update with::

      mamba update bioconductor-fgnet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fgnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fgnet:<tag>

   (see `bioconductor-fgnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fgnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fgnet
   :alt:   (downloads)
.. |docker_bioconductor-fgnet| image:: https://quay.io/repository/biocontainers/bioconductor-fgnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgnet
.. _`bioconductor-fgnet/tags`: https://quay.io/repository/biocontainers/bioconductor-fgnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fgnet";
        var versions = ["3.44.0","3.40.0","3.36.0","3.36.0","3.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgnet/README.html