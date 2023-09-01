:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sangerseqr'
.. highlight: bash

bioconductor-sangerseqr
=======================

.. conda:recipe:: bioconductor-sangerseqr
   :replaces_section_title:
   :noindex:

   Tools for Sanger Sequencing Data in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/sangerseqR.html
   :license: GPL-2
   :recipe: /`bioconductor-sangerseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangerseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangerseqr/meta.yaml>`_
   :links: biotools: :biotools:`sangerseqr`

   This package contains several tools for analyzing Sanger Sequencing data files in R\, including reading .scf and .ab1 files\, making basecalls and plotting chromatograms.


.. conda:package:: bioconductor-sangerseqr

   |downloads_bioconductor-sangerseqr| |docker_bioconductor-sangerseqr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-shiny: 
   :depends r-stringr: 
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

      mamba install bioconductor-sangerseqr

   and update with::

      mamba update bioconductor-sangerseqr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sangerseqr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sangerseqr:<tag>

   (see `bioconductor-sangerseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sangerseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sangerseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sangerseqr
   :alt:   (downloads)
.. |docker_bioconductor-sangerseqr| image:: https://quay.io/repository/biocontainers/bioconductor-sangerseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sangerseqr
.. _`bioconductor-sangerseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-sangerseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sangerseqr";
        var versions = ["1.36.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sangerseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sangerseqr/README.html