:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsreg'
.. highlight: bash

bioconductor-gsreg
==================

.. conda:recipe:: bioconductor-gsreg
   :replaces_section_title:
   :noindex:

   Gene Set Regulation \(GS\-Reg\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GSReg.html
   :license: GPL-2
   :recipe: /`bioconductor-gsreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsreg/meta.yaml>`_
   :links: biotools: :biotools:`gsreg`, doi: :doi:`10.4137/CIN.S14066`

   A package for gene set analysis based on the variability of expressions as well as a method to detect Alternative Splicing Events . It implements DIfferential RAnk Conservation \(DIRAC\) and gene set Expression Variation Analysis \(EVA\) methods. For detecting Differentially Spliced genes\, it provides an implementation of the Spliced\-EVA \(SEVA\).


.. conda:package:: bioconductor-gsreg

   |downloads_bioconductor-gsreg| |docker_bioconductor-gsreg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0a0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.1,<1.4.0a0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
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

      mamba install bioconductor-gsreg

   and update with::

      mamba update bioconductor-gsreg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gsreg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsreg:<tag>

   (see `bioconductor-gsreg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsreg
   :alt:   (downloads)
.. |docker_bioconductor-gsreg| image:: https://quay.io/repository/biocontainers/bioconductor-gsreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsreg
.. _`bioconductor-gsreg/tags`: https://quay.io/repository/biocontainers/bioconductor-gsreg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsreg";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsreg/README.html