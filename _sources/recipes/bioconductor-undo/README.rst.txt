:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-undo'
.. highlight: bash

bioconductor-undo
=================

.. conda:recipe:: bioconductor-undo
   :replaces_section_title:
   :noindex:

   Unsupervised Deconvolution of Tumor\-Stromal Mixed Expressions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/UNDO.html
   :license: GPL-2
   :recipe: /`bioconductor-undo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-undo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-undo/meta.yaml>`_
   :links: biotools: :biotools:`undo`, doi: :doi:`10.1093/bioinformatics/btu607`

   UNDO is an R package for unsupervised deconvolution of tumor and stromal mixed expression data. It detects marker genes and deconvolutes the mixing expression data without any prior knowledge.


.. conda:package:: bioconductor-undo

   |downloads_bioconductor-undo| |docker_bioconductor-undo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-boot: 
   :depends r-mass: 
   :depends r-nnls: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-undo

   and update with::

      mamba update bioconductor-undo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-undo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-undo:<tag>

   (see `bioconductor-undo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-undo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-undo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-undo
   :alt:   (downloads)
.. |docker_bioconductor-undo| image:: https://quay.io/repository/biocontainers/bioconductor-undo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-undo
.. _`bioconductor-undo/tags`: https://quay.io/repository/biocontainers/bioconductor-undo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-undo";
        var versions = ["1.42.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-undo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-undo/README.html