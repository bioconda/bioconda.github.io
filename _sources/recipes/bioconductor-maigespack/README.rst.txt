:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maigespack'
.. highlight: bash

bioconductor-maigespack
=======================

.. conda:recipe:: bioconductor-maigespack
   :replaces_section_title:
   :noindex:

   Functions to handle cDNA microarray data\, including several methods of data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/maigesPack.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-maigespack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maigespack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maigespack/meta.yaml>`_
   :links: biotools: :biotools:`maigespack`, doi: :doi:`10.1038/nmeth.3252`

   This package uses functions of various other packages together with other functions in a coordinated way to handle and analyse cDNA microarray data


.. conda:package:: bioconductor-maigespack

   |downloads_bioconductor-maigespack| |docker_bioconductor-maigespack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.58.0-2</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.58.0-2``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-convert: ``>=1.78.0,<1.79.0``
   :depends bioconductor-convert: ``>=1.78.0,<1.79.0a0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0``
   :depends bioconductor-marray: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-maigespack

   and update with::

      mamba update bioconductor-maigespack

  To create a new environment, run::

      mamba create --name myenvname bioconductor-maigespack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maigespack:<tag>

   (see `bioconductor-maigespack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maigespack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maigespack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maigespack
   :alt:   (downloads)
.. |docker_bioconductor-maigespack| image:: https://quay.io/repository/biocontainers/bioconductor-maigespack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maigespack
.. _`bioconductor-maigespack/tags`: https://quay.io/repository/biocontainers/bioconductor-maigespack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maigespack";
        var versions = ["1.64.0","1.64.0","1.62.0","1.62.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maigespack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maigespack/README.html