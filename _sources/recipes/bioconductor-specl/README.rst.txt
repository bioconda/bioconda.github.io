:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-specl'
.. highlight: bash

bioconductor-specl
==================

.. conda:recipe:: bioconductor-specl
   :replaces_section_title:
   :noindex:

   specL \- Prepare Peptide Spectrum Matches for Use in Targeted Proteomics

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/specL.html
   :license: GPL-3
   :recipe: /`bioconductor-specl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-specl/meta.yaml>`_
   :links: biotools: :biotools:`specl`

   provides a functions for generating spectra libraries that can be used for MRM SRM MS workflows in proteomics. The package provides a BiblioSpec reader\, a function which can add the protein information using a FASTA formatted amino acid file\, and an export method for using the created library in the Spectronaut software. The package is developed\, tested and used at the Functional Genomics Center Zurich \<https\:\/\/fgcz.ch\>.


.. conda:package:: bioconductor-specl

   |downloads_bioconductor-specl| |docker_bioconductor-specl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: ``>=0.5``
   :depends r-protviz: ``>=0.7``
   :depends r-rsqlite: ``>=1.1``
   :depends r-seqinr: ``>=3.3``
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

      mamba install bioconductor-specl

   and update with::

      mamba update bioconductor-specl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-specl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-specl:<tag>

   (see `bioconductor-specl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-specl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-specl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-specl
   :alt:   (downloads)
.. |docker_bioconductor-specl| image:: https://quay.io/repository/biocontainers/bioconductor-specl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-specl
.. _`bioconductor-specl/tags`: https://quay.io/repository/biocontainers/bioconductor-specl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-specl";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-specl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-specl/README.html