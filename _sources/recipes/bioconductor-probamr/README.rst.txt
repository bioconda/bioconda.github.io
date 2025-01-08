:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-probamr'
.. highlight: bash

bioconductor-probamr
====================

.. conda:recipe:: bioconductor-probamr
   :replaces_section_title:
   :noindex:

   Generating SAM file for PSMs in shotgun proteomics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/proBAMr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-probamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-probamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-probamr/meta.yaml>`_
   :links: biotools: :biotools:`probamr`, doi: :doi:`10.1074/mcp.M115.052860`

   Mapping PSMs back to genome. The package builds SAM file from shotgun proteomics data The package also provides function to prepare annotation from GTF file.


.. conda:package:: bioconductor-probamr

   |downloads_bioconductor-probamr| |docker_bioconductor-probamr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
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

      mamba install bioconductor-probamr

   and update with::

      mamba update bioconductor-probamr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-probamr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-probamr:<tag>

   (see `bioconductor-probamr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-probamr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-probamr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-probamr
   :alt:   (downloads)
.. |docker_bioconductor-probamr| image:: https://quay.io/repository/biocontainers/bioconductor-probamr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-probamr
.. _`bioconductor-probamr/tags`: https://quay.io/repository/biocontainers/bioconductor-probamr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-probamr";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-probamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-probamr/README.html