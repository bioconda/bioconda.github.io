:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-michip'
.. highlight: bash

bioconductor-michip
===================

.. conda:recipe:: bioconductor-michip
   :replaces_section_title:
   :noindex:

   MiChip Parsing and Summarizing Functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MiChip.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-michip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-michip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-michip/meta.yaml>`_
   :links: biotools: :biotools:`michip`, doi: :doi:`10.1038/nmeth.3252`

   This package takes the MiChip miRNA microarray .grp scanner output files and parses these out\, providing summary and plotting functions to analyse MiChip hybridizations. A set of hybridizations is packaged into an ExpressionSet allowing it to be used by other BioConductor packages.


.. conda:package:: bioconductor-michip

   |downloads_bioconductor-michip| |docker_bioconductor-michip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  </span></summary>
      

      ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
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

      mamba install bioconductor-michip

   and update with::

      mamba update bioconductor-michip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-michip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-michip:<tag>

   (see `bioconductor-michip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-michip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-michip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-michip
   :alt:   (downloads)
.. |docker_bioconductor-michip| image:: https://quay.io/repository/biocontainers/bioconductor-michip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-michip
.. _`bioconductor-michip/tags`: https://quay.io/repository/biocontainers/bioconductor-michip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-michip";
        var versions = ["1.60.0","1.56.0","1.54.0","1.52.0","1.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-michip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-michip/README.html