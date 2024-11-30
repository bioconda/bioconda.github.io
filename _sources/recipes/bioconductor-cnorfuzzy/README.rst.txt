:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnorfuzzy'
.. highlight: bash

bioconductor-cnorfuzzy
======================

.. conda:recipe:: bioconductor-cnorfuzzy
   :replaces_section_title:
   :noindex:

   Addon to CellNOptR\: Fuzzy Logic

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CNORfuzzy.html
   :license: GPL-2
   :recipe: /`bioconductor-cnorfuzzy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfuzzy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfuzzy/meta.yaml>`_
   :links: biotools: :biotools:`cnorfuzzy`, doi: :doi:`10.1186/1752-0509-6-133`

   This package is an extension to CellNOptR.  It contains additional functionality needed to simulate and train a prior knowledge network to experimental data using constrained fuzzy logic \(cFL\, rather than Boolean logic as is the case in CellNOptR\).  Additionally\, this package will contain functions to use for the compilation of multiple optimization results \(either Boolean or cFL\).


.. conda:package:: bioconductor-cnorfuzzy

   |downloads_bioconductor-cnorfuzzy| |docker_bioconductor-cnorfuzzy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cellnoptr: ``>=1.48.0,<1.49.0``
   :depends bioconductor-cellnoptr: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-nloptr: ``>=0.8.5``
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

      mamba install bioconductor-cnorfuzzy

   and update with::

      mamba update bioconductor-cnorfuzzy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnorfuzzy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnorfuzzy:<tag>

   (see `bioconductor-cnorfuzzy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnorfuzzy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnorfuzzy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnorfuzzy
   :alt:   (downloads)
.. |docker_bioconductor-cnorfuzzy| image:: https://quay.io/repository/biocontainers/bioconductor-cnorfuzzy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnorfuzzy
.. _`bioconductor-cnorfuzzy/tags`: https://quay.io/repository/biocontainers/bioconductor-cnorfuzzy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnorfuzzy";
        var versions = ["1.44.0","1.42.0","1.40.0","1.40.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnorfuzzy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnorfuzzy/README.html